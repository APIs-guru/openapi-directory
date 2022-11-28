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
export var EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum;
(function (EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum) {
    EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum["LogTypeUnspecified"] = "LOG_TYPE_UNSPECIFIED";
    EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum["Gws"] = "GWS";
    EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum["Gts"] = "GTS";
    EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum["All"] = "ALL";
})(EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum || (EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum = {}));
export var EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnum;
(function (EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnum) {
    EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnum["PrivacyTypeUnspecified"] = "PRIVACY_TYPE_UNSPECIFIED";
    EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnum["NotPii"] = "NOT_PII";
    EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnum["Pii"] = "PII";
    EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnum["Spii"] = "SPII";
    EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnum["Unsure"] = "UNSURE";
})(EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnum || (EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnum = {}));
export var EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum;
(function (EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum) {
    EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum["SanitizeTypeUnspecified"] = "SANITIZE_TYPE_UNSPECIFIED";
    EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum["Scrub"] = "SCRUB";
    EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum["Anonymize"] = "ANONYMIZE";
    EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum["AnonymizeLimitedRepeatable"] = "ANONYMIZE_LIMITED_REPEATABLE";
    EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum["Obfuscate"] = "OBFUSCATE";
    EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum["Encrypt"] = "ENCRYPT";
    EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum["DoNotSanitize"] = "DO_NOT_SANITIZE";
})(EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum || (EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum = {}));
// EnterpriseCrmLoggingGwsSanitizeOptions
/**
 * Identifies whether a field contains, or may contain, PII or sensitive data, and how to sanitize the field if it does. If a field's privacy type cannot be determined then it is sanitized (e.g., scrubbed). The specific sanitizer implementation is determined by run-time configuration and environment options (e.g., prod vs. qa). next_id: 5
**/
var EnterpriseCrmLoggingGwsSanitizeOptions = /** @class */ (function (_super) {
    __extends(EnterpriseCrmLoggingGwsSanitizeOptions, _super);
    function EnterpriseCrmLoggingGwsSanitizeOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isAlreadySanitized" }),
        __metadata("design:type", Boolean)
    ], EnterpriseCrmLoggingGwsSanitizeOptions.prototype, "isAlreadySanitized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logType" }),
        __metadata("design:type", Array)
    ], EnterpriseCrmLoggingGwsSanitizeOptions.prototype, "logType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", String)
    ], EnterpriseCrmLoggingGwsSanitizeOptions.prototype, "privacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sanitizeType" }),
        __metadata("design:type", String)
    ], EnterpriseCrmLoggingGwsSanitizeOptions.prototype, "sanitizeType", void 0);
    return EnterpriseCrmLoggingGwsSanitizeOptions;
}(SpeakeasyBase));
export { EnterpriseCrmLoggingGwsSanitizeOptions };
