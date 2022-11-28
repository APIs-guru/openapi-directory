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
var GetOrganizationDevicesPathParams = /** @class */ (function (_super) {
    __extends(GetOrganizationDevicesPathParams, _super);
    function GetOrganizationDevicesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], GetOrganizationDevicesPathParams.prototype, "organizationId", void 0);
    return GetOrganizationDevicesPathParams;
}(SpeakeasyBase));
export { GetOrganizationDevicesPathParams };
var GetOrganizationDevicesQueryParams = /** @class */ (function (_super) {
    __extends(GetOrganizationDevicesQueryParams, _super);
    function GetOrganizationDevicesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=configurationUpdatedAfter" }),
        __metadata("design:type", String)
    ], GetOrganizationDevicesQueryParams.prototype, "configurationUpdatedAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endingBefore" }),
        __metadata("design:type", String)
    ], GetOrganizationDevicesQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=perPage" }),
        __metadata("design:type", Number)
    ], GetOrganizationDevicesQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startingAfter" }),
        __metadata("design:type", String)
    ], GetOrganizationDevicesQueryParams.prototype, "startingAfter", void 0);
    return GetOrganizationDevicesQueryParams;
}(SpeakeasyBase));
export { GetOrganizationDevicesQueryParams };
var GetOrganizationDevicesRequest = /** @class */ (function (_super) {
    __extends(GetOrganizationDevicesRequest, _super);
    function GetOrganizationDevicesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOrganizationDevicesPathParams)
    ], GetOrganizationDevicesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOrganizationDevicesQueryParams)
    ], GetOrganizationDevicesRequest.prototype, "queryParams", void 0);
    return GetOrganizationDevicesRequest;
}(SpeakeasyBase));
export { GetOrganizationDevicesRequest };
var GetOrganizationDevicesResponse = /** @class */ (function (_super) {
    __extends(GetOrganizationDevicesResponse, _super);
    function GetOrganizationDevicesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetOrganizationDevicesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetOrganizationDevicesResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetOrganizationDevicesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetOrganizationDevicesResponse.prototype, "getOrganizationDevices200ApplicationJsonObject", void 0);
    return GetOrganizationDevicesResponse;
}(SpeakeasyBase));
export { GetOrganizationDevicesResponse };
