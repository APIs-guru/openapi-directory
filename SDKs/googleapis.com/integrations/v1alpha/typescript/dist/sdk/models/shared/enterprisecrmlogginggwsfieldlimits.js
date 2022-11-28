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
export var EnterpriseCrmLoggingGwsFieldLimitsLogActionEnum;
(function (EnterpriseCrmLoggingGwsFieldLimitsLogActionEnum) {
    EnterpriseCrmLoggingGwsFieldLimitsLogActionEnum["LogActionUnspecified"] = "LOG_ACTION_UNSPECIFIED";
    EnterpriseCrmLoggingGwsFieldLimitsLogActionEnum["DontLog"] = "DONT_LOG";
    EnterpriseCrmLoggingGwsFieldLimitsLogActionEnum["Log"] = "LOG";
})(EnterpriseCrmLoggingGwsFieldLimitsLogActionEnum || (EnterpriseCrmLoggingGwsFieldLimitsLogActionEnum = {}));
export var EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum;
(function (EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum) {
    EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum["LogTypeUnspecified"] = "LOG_TYPE_UNSPECIFIED";
    EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum["Gws"] = "GWS";
    EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum["Gts"] = "GTS";
    EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum["All"] = "ALL";
})(EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum || (EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum = {}));
export var EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum;
(function (EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum) {
    EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum["ShortenerTypeUnspecified"] = "SHORTENER_TYPE_UNSPECIFIED";
    EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum["Shorten"] = "SHORTEN";
    EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum["Hash"] = "HASH";
    EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum["ShortenWithHash"] = "SHORTEN_WITH_HASH";
    EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum["ShortenEmail"] = "SHORTEN_EMAIL";
    EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum["ShortenEmailWithHash"] = "SHORTEN_EMAIL_WITH_HASH";
    EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum["ShortenDomain"] = "SHORTEN_DOMAIN";
})(EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum || (EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum = {}));
// EnterpriseCrmLoggingGwsFieldLimits
/**
 * Describes string and array limits when writing to logs. When a limit is exceeded the *shortener_type* describes how to shorten the field. next_id: 6
**/
var EnterpriseCrmLoggingGwsFieldLimits = /** @class */ (function (_super) {
    __extends(EnterpriseCrmLoggingGwsFieldLimits, _super);
    function EnterpriseCrmLoggingGwsFieldLimits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logAction" }),
        __metadata("design:type", String)
    ], EnterpriseCrmLoggingGwsFieldLimits.prototype, "logAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logType" }),
        __metadata("design:type", Array)
    ], EnterpriseCrmLoggingGwsFieldLimits.prototype, "logType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxArraySize" }),
        __metadata("design:type", Number)
    ], EnterpriseCrmLoggingGwsFieldLimits.prototype, "maxArraySize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxStringLength" }),
        __metadata("design:type", Number)
    ], EnterpriseCrmLoggingGwsFieldLimits.prototype, "maxStringLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shortenerType" }),
        __metadata("design:type", String)
    ], EnterpriseCrmLoggingGwsFieldLimits.prototype, "shortenerType", void 0);
    return EnterpriseCrmLoggingGwsFieldLimits;
}(SpeakeasyBase));
export { EnterpriseCrmLoggingGwsFieldLimits };
