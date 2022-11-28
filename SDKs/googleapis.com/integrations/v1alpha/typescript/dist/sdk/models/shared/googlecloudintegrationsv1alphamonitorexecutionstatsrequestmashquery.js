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
import { GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent } from "./googlecloudintegrationsv1alphamonitorexecutionstatsrequestmashquerycomponent";
import { GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationMode } from "./googlecloudintegrationsv1alphamonitorexecutionstatsrequestmashqueryoperationmode";
// GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQuery
/**
 * The MashQuery for searching data, set both queries for Join Operation.
**/
var GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQuery = /** @class */ (function (_super) {
    __extends(GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQuery, _super);
    function GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstQuery" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent)
    ], GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQuery.prototype, "firstQuery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operationMode" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationMode)
    ], GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQuery.prototype, "operationMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondQuery" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent)
    ], GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQuery.prototype, "secondQuery", void 0);
    return GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQuery;
}(SpeakeasyBase));
export { GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQuery };
