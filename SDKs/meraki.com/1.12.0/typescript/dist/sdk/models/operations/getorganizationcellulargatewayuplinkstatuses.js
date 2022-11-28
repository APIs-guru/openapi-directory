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
var GetOrganizationCellularGatewayUplinkStatusesPathParams = /** @class */ (function (_super) {
    __extends(GetOrganizationCellularGatewayUplinkStatusesPathParams, _super);
    function GetOrganizationCellularGatewayUplinkStatusesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], GetOrganizationCellularGatewayUplinkStatusesPathParams.prototype, "organizationId", void 0);
    return GetOrganizationCellularGatewayUplinkStatusesPathParams;
}(SpeakeasyBase));
export { GetOrganizationCellularGatewayUplinkStatusesPathParams };
var GetOrganizationCellularGatewayUplinkStatusesQueryParams = /** @class */ (function (_super) {
    __extends(GetOrganizationCellularGatewayUplinkStatusesQueryParams, _super);
    function GetOrganizationCellularGatewayUplinkStatusesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endingBefore" }),
        __metadata("design:type", String)
    ], GetOrganizationCellularGatewayUplinkStatusesQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=iccids" }),
        __metadata("design:type", Array)
    ], GetOrganizationCellularGatewayUplinkStatusesQueryParams.prototype, "iccids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=networkIds" }),
        __metadata("design:type", Array)
    ], GetOrganizationCellularGatewayUplinkStatusesQueryParams.prototype, "networkIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=perPage" }),
        __metadata("design:type", Number)
    ], GetOrganizationCellularGatewayUplinkStatusesQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=serials" }),
        __metadata("design:type", Array)
    ], GetOrganizationCellularGatewayUplinkStatusesQueryParams.prototype, "serials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startingAfter" }),
        __metadata("design:type", String)
    ], GetOrganizationCellularGatewayUplinkStatusesQueryParams.prototype, "startingAfter", void 0);
    return GetOrganizationCellularGatewayUplinkStatusesQueryParams;
}(SpeakeasyBase));
export { GetOrganizationCellularGatewayUplinkStatusesQueryParams };
var GetOrganizationCellularGatewayUplinkStatusesRequest = /** @class */ (function (_super) {
    __extends(GetOrganizationCellularGatewayUplinkStatusesRequest, _super);
    function GetOrganizationCellularGatewayUplinkStatusesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOrganizationCellularGatewayUplinkStatusesPathParams)
    ], GetOrganizationCellularGatewayUplinkStatusesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOrganizationCellularGatewayUplinkStatusesQueryParams)
    ], GetOrganizationCellularGatewayUplinkStatusesRequest.prototype, "queryParams", void 0);
    return GetOrganizationCellularGatewayUplinkStatusesRequest;
}(SpeakeasyBase));
export { GetOrganizationCellularGatewayUplinkStatusesRequest };
var GetOrganizationCellularGatewayUplinkStatusesResponse = /** @class */ (function (_super) {
    __extends(GetOrganizationCellularGatewayUplinkStatusesResponse, _super);
    function GetOrganizationCellularGatewayUplinkStatusesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetOrganizationCellularGatewayUplinkStatusesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetOrganizationCellularGatewayUplinkStatusesResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetOrganizationCellularGatewayUplinkStatusesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetOrganizationCellularGatewayUplinkStatusesResponse.prototype, "getOrganizationCellularGatewayUplinkStatuses200ApplicationJsonObject", void 0);
    return GetOrganizationCellularGatewayUplinkStatusesResponse;
}(SpeakeasyBase));
export { GetOrganizationCellularGatewayUplinkStatusesResponse };
