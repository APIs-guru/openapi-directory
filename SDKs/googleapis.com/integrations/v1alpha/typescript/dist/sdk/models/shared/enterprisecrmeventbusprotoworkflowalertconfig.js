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
export var EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum;
(function (EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum) {
    EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum["MetricTypeUnspecified"] = "METRIC_TYPE_UNSPECIFIED";
    EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum["EventErrorRate"] = "EVENT_ERROR_RATE";
    EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum["EventWarningRate"] = "EVENT_WARNING_RATE";
    EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum["TaskErrorRate"] = "TASK_ERROR_RATE";
    EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum["TaskWarningRate"] = "TASK_WARNING_RATE";
    EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum["TaskRate"] = "TASK_RATE";
    EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum["EventRate"] = "EVENT_RATE";
    EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum["EventAverageDuration"] = "EVENT_AVERAGE_DURATION";
    EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum["EventPercentileDuration"] = "EVENT_PERCENTILE_DURATION";
    EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum["TaskAverageDuration"] = "TASK_AVERAGE_DURATION";
    EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum["TaskPercentileDuration"] = "TASK_PERCENTILE_DURATION";
})(EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum || (EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum = {}));
export var EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnum;
(function (EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnum) {
    EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnum["UnspecifiedThresholdType"] = "UNSPECIFIED_THRESHOLD_TYPE";
    EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnum["ExpectedMin"] = "EXPECTED_MIN";
    EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnum["ExpectedMax"] = "EXPECTED_MAX";
})(EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnum || (EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnum = {}));
// EnterpriseCrmEventbusProtoWorkflowAlertConfig
/**
 * Message to be used to configure custom alerting in the {@code EventConfig} protos for an event. See go/eventbus-alert-config-examples for examples of the different alerts that can be configured.
**/
var EnterpriseCrmEventbusProtoWorkflowAlertConfig = /** @class */ (function (_super) {
    __extends(EnterpriseCrmEventbusProtoWorkflowAlertConfig, _super);
    function EnterpriseCrmEventbusProtoWorkflowAlertConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aggregationPeriod" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoWorkflowAlertConfig.prototype, "aggregationPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alertDisabled" }),
        __metadata("design:type", Boolean)
    ], EnterpriseCrmEventbusProtoWorkflowAlertConfig.prototype, "alertDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alertName" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoWorkflowAlertConfig.prototype, "alertName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoWorkflowAlertConfig.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=durationThresholdMs" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoWorkflowAlertConfig.prototype, "durationThresholdMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorEnumList" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList)
    ], EnterpriseCrmEventbusProtoWorkflowAlertConfig.prototype, "errorEnumList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metricType" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoWorkflowAlertConfig.prototype, "metricType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numAggregationPeriods" }),
        __metadata("design:type", Number)
    ], EnterpriseCrmEventbusProtoWorkflowAlertConfig.prototype, "numAggregationPeriods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onlyFinalAttempt" }),
        __metadata("design:type", Boolean)
    ], EnterpriseCrmEventbusProtoWorkflowAlertConfig.prototype, "onlyFinalAttempt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playbookUrl" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoWorkflowAlertConfig.prototype, "playbookUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thresholdType" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoWorkflowAlertConfig.prototype, "thresholdType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thresholdValue" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue)
    ], EnterpriseCrmEventbusProtoWorkflowAlertConfig.prototype, "thresholdValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=warningEnumList" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList)
    ], EnterpriseCrmEventbusProtoWorkflowAlertConfig.prototype, "warningEnumList", void 0);
    return EnterpriseCrmEventbusProtoWorkflowAlertConfig;
}(SpeakeasyBase));
export { EnterpriseCrmEventbusProtoWorkflowAlertConfig };
