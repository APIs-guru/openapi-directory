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
import { GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdValue } from "./googlecloudintegrationsv1alphaintegrationalertconfigthresholdvalue";
export var GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum;
(function (GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum) {
    GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum["MetricTypeUnspecified"] = "METRIC_TYPE_UNSPECIFIED";
    GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum["EventErrorRate"] = "EVENT_ERROR_RATE";
    GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum["EventWarningRate"] = "EVENT_WARNING_RATE";
    GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum["TaskErrorRate"] = "TASK_ERROR_RATE";
    GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum["TaskWarningRate"] = "TASK_WARNING_RATE";
    GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum["TaskRate"] = "TASK_RATE";
    GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum["EventRate"] = "EVENT_RATE";
    GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum["EventAverageDuration"] = "EVENT_AVERAGE_DURATION";
    GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum["EventPercentileDuration"] = "EVENT_PERCENTILE_DURATION";
    GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum["TaskAverageDuration"] = "TASK_AVERAGE_DURATION";
    GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum["TaskPercentileDuration"] = "TASK_PERCENTILE_DURATION";
})(GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum || (GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum = {}));
export var GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdTypeEnum;
(function (GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdTypeEnum) {
    GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdTypeEnum["ThresholdTypeUnspecified"] = "THRESHOLD_TYPE_UNSPECIFIED";
    GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdTypeEnum["ExpectedMin"] = "EXPECTED_MIN";
    GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdTypeEnum["ExpectedMax"] = "EXPECTED_MAX";
})(GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdTypeEnum || (GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdTypeEnum = {}));
// GoogleCloudIntegrationsV1alphaIntegrationAlertConfig
/**
 * Message to be used to configure custom alerting in the {@code EventConfig} protos for an event.
**/
var GoogleCloudIntegrationsV1alphaIntegrationAlertConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudIntegrationsV1alphaIntegrationAlertConfig, _super);
    function GoogleCloudIntegrationsV1alphaIntegrationAlertConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aggregationPeriod" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationAlertConfig.prototype, "aggregationPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alertThreshold" }),
        __metadata("design:type", Number)
    ], GoogleCloudIntegrationsV1alphaIntegrationAlertConfig.prototype, "alertThreshold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableAlert" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudIntegrationsV1alphaIntegrationAlertConfig.prototype, "disableAlert", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationAlertConfig.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=durationThreshold" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationAlertConfig.prototype, "durationThreshold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metricType" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationAlertConfig.prototype, "metricType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onlyFinalAttempt" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudIntegrationsV1alphaIntegrationAlertConfig.prototype, "onlyFinalAttempt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thresholdType" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationAlertConfig.prototype, "thresholdType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thresholdValue" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdValue)
    ], GoogleCloudIntegrationsV1alphaIntegrationAlertConfig.prototype, "thresholdValue", void 0);
    return GoogleCloudIntegrationsV1alphaIntegrationAlertConfig;
}(SpeakeasyBase));
export { GoogleCloudIntegrationsV1alphaIntegrationAlertConfig };
