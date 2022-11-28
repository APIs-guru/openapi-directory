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
var GetOrganizationApplianceVpnStatsPathParams = /** @class */ (function (_super) {
    __extends(GetOrganizationApplianceVpnStatsPathParams, _super);
    function GetOrganizationApplianceVpnStatsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], GetOrganizationApplianceVpnStatsPathParams.prototype, "organizationId", void 0);
    return GetOrganizationApplianceVpnStatsPathParams;
}(SpeakeasyBase));
export { GetOrganizationApplianceVpnStatsPathParams };
var GetOrganizationApplianceVpnStatsQueryParams = /** @class */ (function (_super) {
    __extends(GetOrganizationApplianceVpnStatsQueryParams, _super);
    function GetOrganizationApplianceVpnStatsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endingBefore" }),
        __metadata("design:type", String)
    ], GetOrganizationApplianceVpnStatsQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=networkIds" }),
        __metadata("design:type", Array)
    ], GetOrganizationApplianceVpnStatsQueryParams.prototype, "networkIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=perPage" }),
        __metadata("design:type", Number)
    ], GetOrganizationApplianceVpnStatsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startingAfter" }),
        __metadata("design:type", String)
    ], GetOrganizationApplianceVpnStatsQueryParams.prototype, "startingAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" }),
        __metadata("design:type", String)
    ], GetOrganizationApplianceVpnStatsQueryParams.prototype, "t0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t1" }),
        __metadata("design:type", String)
    ], GetOrganizationApplianceVpnStatsQueryParams.prototype, "t1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetOrganizationApplianceVpnStatsQueryParams.prototype, "timespan", void 0);
    return GetOrganizationApplianceVpnStatsQueryParams;
}(SpeakeasyBase));
export { GetOrganizationApplianceVpnStatsQueryParams };
var GetOrganizationApplianceVpnStatsRequest = /** @class */ (function (_super) {
    __extends(GetOrganizationApplianceVpnStatsRequest, _super);
    function GetOrganizationApplianceVpnStatsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOrganizationApplianceVpnStatsPathParams)
    ], GetOrganizationApplianceVpnStatsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOrganizationApplianceVpnStatsQueryParams)
    ], GetOrganizationApplianceVpnStatsRequest.prototype, "queryParams", void 0);
    return GetOrganizationApplianceVpnStatsRequest;
}(SpeakeasyBase));
export { GetOrganizationApplianceVpnStatsRequest };
var GetOrganizationApplianceVpnStatsResponse = /** @class */ (function (_super) {
    __extends(GetOrganizationApplianceVpnStatsResponse, _super);
    function GetOrganizationApplianceVpnStatsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetOrganizationApplianceVpnStatsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetOrganizationApplianceVpnStatsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetOrganizationApplianceVpnStatsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetOrganizationApplianceVpnStatsResponse.prototype, "getOrganizationApplianceVpnStats200ApplicationJsonObject", void 0);
    return GetOrganizationApplianceVpnStatsResponse;
}(SpeakeasyBase));
export { GetOrganizationApplianceVpnStatsResponse };
