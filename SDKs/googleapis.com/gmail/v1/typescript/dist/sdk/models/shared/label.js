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
import { LabelColor } from "./labelcolor";
export var LabelLabelListVisibilityEnum;
(function (LabelLabelListVisibilityEnum) {
    LabelLabelListVisibilityEnum["LabelShow"] = "labelShow";
    LabelLabelListVisibilityEnum["LabelShowIfUnread"] = "labelShowIfUnread";
    LabelLabelListVisibilityEnum["LabelHide"] = "labelHide";
})(LabelLabelListVisibilityEnum || (LabelLabelListVisibilityEnum = {}));
export var LabelMessageListVisibilityEnum;
(function (LabelMessageListVisibilityEnum) {
    LabelMessageListVisibilityEnum["Show"] = "show";
    LabelMessageListVisibilityEnum["Hide"] = "hide";
})(LabelMessageListVisibilityEnum || (LabelMessageListVisibilityEnum = {}));
export var LabelTypeEnum;
(function (LabelTypeEnum) {
    LabelTypeEnum["System"] = "system";
    LabelTypeEnum["User"] = "user";
})(LabelTypeEnum || (LabelTypeEnum = {}));
// Label
/**
 * Labels are used to categorize messages and threads within the user's mailbox. The maximum number of labels supported for a user's mailbox is 10,000.
**/
var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", LabelColor)
    ], Label.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Label.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labelListVisibility" }),
        __metadata("design:type", String)
    ], Label.prototype, "labelListVisibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messageListVisibility" }),
        __metadata("design:type", String)
    ], Label.prototype, "messageListVisibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messagesTotal" }),
        __metadata("design:type", Number)
    ], Label.prototype, "messagesTotal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messagesUnread" }),
        __metadata("design:type", Number)
    ], Label.prototype, "messagesUnread", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Label.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=threadsTotal" }),
        __metadata("design:type", Number)
    ], Label.prototype, "threadsTotal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=threadsUnread" }),
        __metadata("design:type", Number)
    ], Label.prototype, "threadsUnread", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Label.prototype, "type", void 0);
    return Label;
}(SpeakeasyBase));
export { Label };
