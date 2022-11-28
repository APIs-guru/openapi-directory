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
var FrontendSettingsLanguageSource = /** @class */ (function (_super) {
    __extends(FrontendSettingsLanguageSource, _super);
    function FrontendSettingsLanguageSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FrontendSettingsLanguageSource.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FrontendSettingsLanguageSource.prototype, "name", void 0);
    return FrontendSettingsLanguageSource;
}(SpeakeasyBase));
export { FrontendSettingsLanguageSource };
var FrontendSettingsLanguageTarget = /** @class */ (function (_super) {
    __extends(FrontendSettingsLanguageTarget, _super);
    function FrontendSettingsLanguageTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FrontendSettingsLanguageTarget.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FrontendSettingsLanguageTarget.prototype, "name", void 0);
    return FrontendSettingsLanguageTarget;
}(SpeakeasyBase));
export { FrontendSettingsLanguageTarget };
var FrontendSettingsLanguage = /** @class */ (function (_super) {
    __extends(FrontendSettingsLanguage, _super);
    function FrontendSettingsLanguage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FrontendSettingsLanguageSource)
    ], FrontendSettingsLanguage.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FrontendSettingsLanguageTarget)
    ], FrontendSettingsLanguage.prototype, "target", void 0);
    return FrontendSettingsLanguage;
}(SpeakeasyBase));
export { FrontendSettingsLanguage };
var FrontendSettings = /** @class */ (function (_super) {
    __extends(FrontendSettings, _super);
    function FrontendSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FrontendSettings.prototype, "charLimit", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FrontendSettings.prototype, "frontendTimeout", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FrontendSettingsLanguage)
    ], FrontendSettings.prototype, "language", void 0);
    return FrontendSettings;
}(SpeakeasyBase));
export { FrontendSettings };
