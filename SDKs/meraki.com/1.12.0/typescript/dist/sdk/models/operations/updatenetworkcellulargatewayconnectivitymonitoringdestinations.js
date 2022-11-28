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
var UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams, _super);
    function UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams.prototype, "networkId", void 0);
    return UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams;
}(SpeakeasyBase));
export { UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams };
var UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations = /** @class */ (function (_super) {
    __extends(UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations, _super);
    function UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations.prototype, "default", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations.prototype, "ip", void 0);
    return UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations;
}(SpeakeasyBase));
export { UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations };
var UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody, _super);
    function UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinations", elemType: UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations }),
        __metadata("design:type", Array)
    ], UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody.prototype, "destinations", void 0);
    return UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody };
var UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest, _super);
    function UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams)
    ], UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody)
    ], UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest.prototype, "request", void 0);
    return UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest;
}(SpeakeasyBase));
export { UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest };
var UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse, _super);
    function UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse.prototype, "updateNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJsonObject", void 0);
    return UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse;
}(SpeakeasyBase));
export { UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse };
