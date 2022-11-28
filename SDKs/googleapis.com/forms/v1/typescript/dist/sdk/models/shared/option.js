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
import { ImageInput } from "./image";
import { Image } from "./image";
export var OptionGoToActionEnum;
(function (OptionGoToActionEnum) {
    OptionGoToActionEnum["GoToActionUnspecified"] = "GO_TO_ACTION_UNSPECIFIED";
    OptionGoToActionEnum["NextSection"] = "NEXT_SECTION";
    OptionGoToActionEnum["RestartForm"] = "RESTART_FORM";
    OptionGoToActionEnum["SubmitForm"] = "SUBMIT_FORM";
})(OptionGoToActionEnum || (OptionGoToActionEnum = {}));
// OptionInput
/**
 * An option for a Choice question.
**/
var OptionInput = /** @class */ (function (_super) {
    __extends(OptionInput, _super);
    function OptionInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=goToAction" }),
        __metadata("design:type", String)
    ], OptionInput.prototype, "goToAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=goToSectionId" }),
        __metadata("design:type", String)
    ], OptionInput.prototype, "goToSectionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", ImageInput)
    ], OptionInput.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isOther" }),
        __metadata("design:type", Boolean)
    ], OptionInput.prototype, "isOther", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], OptionInput.prototype, "value", void 0);
    return OptionInput;
}(SpeakeasyBase));
export { OptionInput };
// Option
/**
 * An option for a Choice question.
**/
var Option = /** @class */ (function (_super) {
    __extends(Option, _super);
    function Option() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=goToAction" }),
        __metadata("design:type", String)
    ], Option.prototype, "goToAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=goToSectionId" }),
        __metadata("design:type", String)
    ], Option.prototype, "goToSectionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", Image)
    ], Option.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isOther" }),
        __metadata("design:type", Boolean)
    ], Option.prototype, "isOther", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], Option.prototype, "value", void 0);
    return Option;
}(SpeakeasyBase));
export { Option };
