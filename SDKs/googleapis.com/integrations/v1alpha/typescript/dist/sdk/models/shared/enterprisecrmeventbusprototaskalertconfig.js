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
import { EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList } from "./enterprisecrmeventbusprotobasealertconfigerrorenumlist";
import { EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue } from "./enterprisecrmeventbusprotobasealertconfigthresholdvalue";
export var EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum;
(function (EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum) {
    EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum["MetricTypeUnspecified"] = "METRIC_TYPE_UNSPECIFIED";
    EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum["TaskErrorRate"] = "TASK_ERROR_RATE";
    EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum["TaskWarningRate"] = "TASK_WARNING_RATE";
    EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum["TaskRate"] = "TASK_RATE";
    EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum["TaskAverageDuration"] = "TASK_AVERAGE_DURATION";
    EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum["TaskPercentileDuration"] = "TASK_PERCENTILE_DURATION";
})(EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum || (EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum = {}));
export var EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum;
(function (EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum) {
    EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum["UnspecifiedThresholdType"] = "UNSPECIFIED_THRESHOLD_TYPE";
    EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum["ExpectedMin"] = "EXPECTED_MIN";
    EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum["ExpectedMax"] = "EXPECTED_MAX";
})(EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum || (EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum = {}));
// EnterpriseCrmEventbusProtoTaskAlertConfig
/**
 * Message to be used to configure alerting in the {@code TaskConfig} protos for tasks in an event. See go/eventbus-alert-config-examples for examples of the different alerts that can be configured.
**/
var EnterpriseCrmEventbusProtoTaskAlertConfig = /** @class */ (function (_super) {
    __extends(EnterpriseCrmEventbusProtoTaskAlertConfig, _super);
    function EnterpriseCrmEventbusProtoTaskAlertConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aggregationPeriod" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoTaskAlertConfig.prototype, "aggregationPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alertDisabled" }),
        __metadata("design:type", Boolean)
    ], EnterpriseCrmEventbusProtoTaskAlertConfig.prototype, "alertDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alertName" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoTaskAlertConfig.prototype, "alertName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoTaskAlertConfig.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=durationThresholdMs" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoTaskAlertConfig.prototype, "durationThresholdMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorEnumList" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList)
    ], EnterpriseCrmEventbusProtoTaskAlertConfig.prototype, "errorEnumList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metricType" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoTaskAlertConfig.prototype, "metricType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numAggregationPeriods" }),
        __metadata("design:type", Number)
    ], EnterpriseCrmEventbusProtoTaskAlertConfig.prototype, "numAggregationPeriods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onlyFinalAttempt" }),
        __metadata("design:type", Boolean)
    ], EnterpriseCrmEventbusProtoTaskAlertConfig.prototype, "onlyFinalAttempt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playbookUrl" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoTaskAlertConfig.prototype, "playbookUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thresholdType" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoTaskAlertConfig.prototype, "thresholdType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thresholdValue" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue)
    ], EnterpriseCrmEventbusProtoTaskAlertConfig.prototype, "thresholdValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=warningEnumList" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList)
    ], EnterpriseCrmEventbusProtoTaskAlertConfig.prototype, "warningEnumList", void 0);
    return EnterpriseCrmEventbusProtoTaskAlertConfig;
}(SpeakeasyBase));
export { EnterpriseCrmEventbusProtoTaskAlertConfig };
