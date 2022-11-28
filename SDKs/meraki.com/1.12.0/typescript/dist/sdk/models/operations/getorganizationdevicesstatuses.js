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
var GetOrganizationDevicesStatusesPathParams = /** @class */ (function (_super) {
    __extends(GetOrganizationDevicesStatusesPathParams, _super);
    function GetOrganizationDevicesStatusesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], GetOrganizationDevicesStatusesPathParams.prototype, "organizationId", void 0);
    return GetOrganizationDevicesStatusesPathParams;
}(SpeakeasyBase));
export { GetOrganizationDevicesStatusesPathParams };
var GetOrganizationDevicesStatusesQueryParams = /** @class */ (function (_super) {
    __extends(GetOrganizationDevicesStatusesQueryParams, _super);
    function GetOrganizationDevicesStatusesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=components" }),
        __metadata("design:type", Map)
    ], GetOrganizationDevicesStatusesQueryParams.prototype, "components", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endingBefore" }),
        __metadata("design:type", String)
    ], GetOrganizationDevicesStatusesQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=perPage" }),
        __metadata("design:type", Number)
    ], GetOrganizationDevicesStatusesQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startingAfter" }),
        __metadata("design:type", String)
    ], GetOrganizationDevicesStatusesQueryParams.prototype, "startingAfter", void 0);
    return GetOrganizationDevicesStatusesQueryParams;
}(SpeakeasyBase));
export { GetOrganizationDevicesStatusesQueryParams };
var GetOrganizationDevicesStatusesRequest = /** @class */ (function (_super) {
    __extends(GetOrganizationDevicesStatusesRequest, _super);
    function GetOrganizationDevicesStatusesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOrganizationDevicesStatusesPathParams)
    ], GetOrganizationDevicesStatusesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOrganizationDevicesStatusesQueryParams)
    ], GetOrganizationDevicesStatusesRequest.prototype, "queryParams", void 0);
    return GetOrganizationDevicesStatusesRequest;
}(SpeakeasyBase));
export { GetOrganizationDevicesStatusesRequest };
var GetOrganizationDevicesStatusesResponse = /** @class */ (function (_super) {
    __extends(GetOrganizationDevicesStatusesResponse, _super);
    function GetOrganizationDevicesStatusesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetOrganizationDevicesStatusesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetOrganizationDevicesStatusesResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetOrganizationDevicesStatusesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetOrganizationDevicesStatusesResponse.prototype, "getOrganizationDevicesStatuses200ApplicationJsonObject", void 0);
    return GetOrganizationDevicesStatusesResponse;
}(SpeakeasyBase));
export { GetOrganizationDevicesStatusesResponse };
