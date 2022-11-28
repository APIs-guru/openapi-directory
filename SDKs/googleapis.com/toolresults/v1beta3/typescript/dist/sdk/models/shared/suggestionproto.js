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
import { SafeHtmlProto } from "./safehtmlproto";
import { RegionProto } from "./regionproto";
export var SuggestionProtoPriorityEnum;
(function (SuggestionProtoPriorityEnum) {
    SuggestionProtoPriorityEnum["UnknownPriority"] = "unknownPriority";
    SuggestionProtoPriorityEnum["Error"] = "error";
    SuggestionProtoPriorityEnum["Warning"] = "warning";
    SuggestionProtoPriorityEnum["Info"] = "info";
})(SuggestionProtoPriorityEnum || (SuggestionProtoPriorityEnum = {}));
var SuggestionProto = /** @class */ (function (_super) {
    __extends(SuggestionProto, _super);
    function SuggestionProto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=helpUrl" }),
        __metadata("design:type", String)
    ], SuggestionProto.prototype, "helpUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longMessage" }),
        __metadata("design:type", SafeHtmlProto)
    ], SuggestionProto.prototype, "longMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", String)
    ], SuggestionProto.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pseudoResourceId" }),
        __metadata("design:type", String)
    ], SuggestionProto.prototype, "pseudoResourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", RegionProto)
    ], SuggestionProto.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], SuggestionProto.prototype, "resourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=screenId" }),
        __metadata("design:type", String)
    ], SuggestionProto.prototype, "screenId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondaryPriority" }),
        __metadata("design:type", Number)
    ], SuggestionProto.prototype, "secondaryPriority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shortMessage" }),
        __metadata("design:type", SafeHtmlProto)
    ], SuggestionProto.prototype, "shortMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], SuggestionProto.prototype, "title", void 0);
    return SuggestionProto;
}(SpeakeasyBase));
export { SuggestionProto };
