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
import { EnterpriseCrmLoggingGwsSanitizeOptions } from "./enterprisecrmlogginggwssanitizeoptions";
import { EnterpriseCrmLoggingGwsFieldLimits } from "./enterprisecrmlogginggwsfieldlimits";
export var EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnum;
(function (EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnum) {
    EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnum["SeedPeriodUnspecified"] = "SEED_PERIOD_UNSPECIFIED";
    EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnum["Day"] = "DAY";
    EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnum["Week"] = "WEEK";
    EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnum["Month"] = "MONTH";
})(EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnum || (EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnum = {}));
export var EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnum;
(function (EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnum) {
    EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnum["SeedScopeUnspecified"] = "SEED_SCOPE_UNSPECIFIED";
    EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnum["EventName"] = "EVENT_NAME";
    EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnum["TimePeriod"] = "TIME_PERIOD";
    EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnum["ParamName"] = "PARAM_NAME";
})(EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnum || (EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnum = {}));
// EnterpriseCrmEventbusProtoLogSettings
/**
 * The LogSettings define the logging attributes for an event property. These attributes are used to map the property to the parameter in the log proto. Also used to define scrubbing/truncation behavior and PII information. See go/integration-platform/analytics/logging_task.md for details.
**/
var EnterpriseCrmEventbusProtoLogSettings = /** @class */ (function (_super) {
    __extends(EnterpriseCrmEventbusProtoLogSettings, _super);
    function EnterpriseCrmEventbusProtoLogSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logFieldName" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoLogSettings.prototype, "logFieldName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sanitizeOptions" }),
        __metadata("design:type", EnterpriseCrmLoggingGwsSanitizeOptions)
    ], EnterpriseCrmEventbusProtoLogSettings.prototype, "sanitizeOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seedPeriod" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoLogSettings.prototype, "seedPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seedScope" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoLogSettings.prototype, "seedScope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shorteningLimits" }),
        __metadata("design:type", EnterpriseCrmLoggingGwsFieldLimits)
    ], EnterpriseCrmEventbusProtoLogSettings.prototype, "shorteningLimits", void 0);
    return EnterpriseCrmEventbusProtoLogSettings;
}(SpeakeasyBase));
export { EnterpriseCrmEventbusProtoLogSettings };
