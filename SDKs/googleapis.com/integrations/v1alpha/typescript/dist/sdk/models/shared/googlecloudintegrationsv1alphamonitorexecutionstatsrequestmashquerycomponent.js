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
import { GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestGroupBy } from "./googlecloudintegrationsv1alphamonitorexecutionstatsrequestgroupby";
export var GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponentBorgTaskMetricEnum;
(function (GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponentBorgTaskMetricEnum) {
    GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponentBorgTaskMetricEnum["BorgTaskMetricUnspecified"] = "BORG_TASK_METRIC_UNSPECIFIED";
    GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponentBorgTaskMetricEnum["TaskIndividualCount"] = "TASK_INDIVIDUAL_COUNT";
    GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponentBorgTaskMetricEnum["EventCount"] = "EVENT_COUNT";
    GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponentBorgTaskMetricEnum["EventDuration"] = "EVENT_DURATION";
    GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponentBorgTaskMetricEnum["TaskIndividualDuration"] = "TASK_INDIVIDUAL_DURATION";
})(GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponentBorgTaskMetricEnum || (GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponentBorgTaskMetricEnum = {}));
// GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent
/**
 * The components for constructing MashQuery.
**/
var GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent = /** @class */ (function (_super) {
    __extends(GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent, _super);
    function GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=borgTaskMetric" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent.prototype, "borgTaskMetric", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataFilters" }),
        __metadata("design:type", Array)
    ], GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent.prototype, "dataFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fetchFilters" }),
        __metadata("design:type", Array)
    ], GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent.prototype, "fetchFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupBy" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestGroupBy)
    ], GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent.prototype, "groupBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pointOperation" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent.prototype, "pointOperation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeDelta" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent.prototype, "timeDelta", void 0);
    return GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent;
}(SpeakeasyBase));
export { GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent };
