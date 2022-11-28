var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SlashCommandMetadata } from "./slashcommandmetadata";
import { UserMentionMetadata } from "./usermentionmetadata";
export var AnnotationTypeEnum;
(function (AnnotationTypeEnum) {
    AnnotationTypeEnum["AnnotationTypeUnspecified"] = "ANNOTATION_TYPE_UNSPECIFIED";
    AnnotationTypeEnum["UserMention"] = "USER_MENTION";
    AnnotationTypeEnum["SlashCommand"] = "SLASH_COMMAND";
})(AnnotationTypeEnum || (AnnotationTypeEnum = {}));
// Annotation
/**
 * Annotations associated with the plain-text body of the message. Example plain-text message body: ``` Hello @FooBot how are you!" ``` The corresponding annotations metadata: ``` "annotations":[{ "type":"USER_MENTION", "startIndex":6, "length":7, "userMention": { "user": { "name":"users/107946847022116401880", "displayName":"FooBot", "avatarUrl":"https://goo.gl/aeDtrS", "type":"BOT" }, "type":"MENTION" } }] ```
**/
var Annotation = /** @class */ (function (_super) {
    __extends(Annotation, _super);
    function Annotation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], Annotation.prototype, "length", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slashCommand" }),
        __metadata("design:type", SlashCommandMetadata)
    ], Annotation.prototype, "slashCommand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startIndex" }),
        __metadata("design:type", Number)
    ], Annotation.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Annotation.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userMention" }),
        __metadata("design:type", UserMentionMetadata)
    ], Annotation.prototype, "userMention", void 0);
    return Annotation;
}(SpeakeasyBase));
export { Annotation };
