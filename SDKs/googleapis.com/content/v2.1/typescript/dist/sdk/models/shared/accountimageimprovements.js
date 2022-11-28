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
import { AccountImageImprovementsSettings } from "./accountimageimprovementssettings";
// AccountImageImprovementsInput
/**
 * This improvement will attempt to automatically correct submitted images if they don't meet the [image requirements](https://support.google.com/merchants/answer/6324350), for example, removing overlays. If successful, the image will be replaced and approved. This improvement is only applied to images of disapproved offers. For more information see: [Automatic image improvements](https://support.google.com/merchants/answer/9242973)
**/
var AccountImageImprovementsInput = /** @class */ (function (_super) {
    __extends(AccountImageImprovementsInput, _super);
    function AccountImageImprovementsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountImageImprovementsSettings" }),
        __metadata("design:type", AccountImageImprovementsSettings)
    ], AccountImageImprovementsInput.prototype, "accountImageImprovementsSettings", void 0);
    return AccountImageImprovementsInput;
}(SpeakeasyBase));
export { AccountImageImprovementsInput };
// AccountImageImprovements
/**
 * This improvement will attempt to automatically correct submitted images if they don't meet the [image requirements](https://support.google.com/merchants/answer/6324350), for example, removing overlays. If successful, the image will be replaced and approved. This improvement is only applied to images of disapproved offers. For more information see: [Automatic image improvements](https://support.google.com/merchants/answer/9242973)
**/
var AccountImageImprovements = /** @class */ (function (_super) {
    __extends(AccountImageImprovements, _super);
    function AccountImageImprovements() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountImageImprovementsSettings" }),
        __metadata("design:type", AccountImageImprovementsSettings)
    ], AccountImageImprovements.prototype, "accountImageImprovementsSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effectiveAllowAutomaticImageImprovements" }),
        __metadata("design:type", Boolean)
    ], AccountImageImprovements.prototype, "effectiveAllowAutomaticImageImprovements", void 0);
    return AccountImageImprovements;
}(SpeakeasyBase));
export { AccountImageImprovements };
