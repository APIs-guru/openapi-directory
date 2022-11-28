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
import { GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeUnionConfig } from "./googlecloudintegrationsv1alphamonitorexecutionstatsrequestmashqueryoperationmodeunionconfig";
export var GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeOperationTypeEnum;
(function (GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeOperationTypeEnum) {
    GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeOperationTypeEnum["OperationTypeUnspecified"] = "OPERATION_TYPE_UNSPECIFIED";
    GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeOperationTypeEnum["Union"] = "UNION";
    GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeOperationTypeEnum["Join"] = "JOIN";
})(GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeOperationTypeEnum || (GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeOperationTypeEnum = {}));
// GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationMode
/**
 * Operation between 2 query
**/
var GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationMode = /** @class */ (function (_super) {
    __extends(GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationMode, _super);
    function GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationMode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=joinConfig" }),
        __metadata("design:type", Map)
    ], GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationMode.prototype, "joinConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operationType" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationMode.prototype, "operationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unionConfig" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeUnionConfig)
    ], GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationMode.prototype, "unionConfig", void 0);
    return GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationMode;
}(SpeakeasyBase));
export { GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationMode };
