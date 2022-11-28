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
export var ImageConfigTextRedactionModeEnum;
(function (ImageConfigTextRedactionModeEnum) {
    ImageConfigTextRedactionModeEnum["TextRedactionModeUnspecified"] = "TEXT_REDACTION_MODE_UNSPECIFIED";
    ImageConfigTextRedactionModeEnum["RedactAllText"] = "REDACT_ALL_TEXT";
    ImageConfigTextRedactionModeEnum["RedactSensitiveText"] = "REDACT_SENSITIVE_TEXT";
    ImageConfigTextRedactionModeEnum["RedactNoText"] = "REDACT_NO_TEXT";
    ImageConfigTextRedactionModeEnum["RedactSensitiveTextCleanDescriptors"] = "REDACT_SENSITIVE_TEXT_CLEAN_DESCRIPTORS";
})(ImageConfigTextRedactionModeEnum || (ImageConfigTextRedactionModeEnum = {}));
// ImageConfig
/**
 * Specifies how to handle de-identification of image pixels.
**/
var ImageConfig = /** @class */ (function (_super) {
    __extends(ImageConfig, _super);
    function ImageConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalInfoTypes" }),
        __metadata("design:type", Array)
    ], ImageConfig.prototype, "additionalInfoTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludeInfoTypes" }),
        __metadata("design:type", Array)
    ], ImageConfig.prototype, "excludeInfoTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textRedactionMode" }),
        __metadata("design:type", String)
    ], ImageConfig.prototype, "textRedactionMode", void 0);
    return ImageConfig;
}(SpeakeasyBase));
export { ImageConfig };
