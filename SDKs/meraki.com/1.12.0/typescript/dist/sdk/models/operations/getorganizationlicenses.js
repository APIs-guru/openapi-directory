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
var GetOrganizationLicensesPathParams = /** @class */ (function (_super) {
    __extends(GetOrganizationLicensesPathParams, _super);
    function GetOrganizationLicensesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], GetOrganizationLicensesPathParams.prototype, "organizationId", void 0);
    return GetOrganizationLicensesPathParams;
}(SpeakeasyBase));
export { GetOrganizationLicensesPathParams };
export var GetOrganizationLicensesStateEnum;
(function (GetOrganizationLicensesStateEnum) {
    GetOrganizationLicensesStateEnum["Active"] = "active";
    GetOrganizationLicensesStateEnum["Expired"] = "expired";
    GetOrganizationLicensesStateEnum["Expiring"] = "expiring";
    GetOrganizationLicensesStateEnum["Unused"] = "unused";
    GetOrganizationLicensesStateEnum["UnusedActive"] = "unusedActive";
    GetOrganizationLicensesStateEnum["RecentlyQueued"] = "recentlyQueued";
})(GetOrganizationLicensesStateEnum || (GetOrganizationLicensesStateEnum = {}));
var GetOrganizationLicensesQueryParams = /** @class */ (function (_super) {
    __extends(GetOrganizationLicensesQueryParams, _super);
    function GetOrganizationLicensesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceSerial" }),
        __metadata("design:type", String)
    ], GetOrganizationLicensesQueryParams.prototype, "deviceSerial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endingBefore" }),
        __metadata("design:type", String)
    ], GetOrganizationLicensesQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=networkId" }),
        __metadata("design:type", String)
    ], GetOrganizationLicensesQueryParams.prototype, "networkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=perPage" }),
        __metadata("design:type", Number)
    ], GetOrganizationLicensesQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startingAfter" }),
        __metadata("design:type", String)
    ], GetOrganizationLicensesQueryParams.prototype, "startingAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], GetOrganizationLicensesQueryParams.prototype, "state", void 0);
    return GetOrganizationLicensesQueryParams;
}(SpeakeasyBase));
export { GetOrganizationLicensesQueryParams };
var GetOrganizationLicensesRequest = /** @class */ (function (_super) {
    __extends(GetOrganizationLicensesRequest, _super);
    function GetOrganizationLicensesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOrganizationLicensesPathParams)
    ], GetOrganizationLicensesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOrganizationLicensesQueryParams)
    ], GetOrganizationLicensesRequest.prototype, "queryParams", void 0);
    return GetOrganizationLicensesRequest;
}(SpeakeasyBase));
export { GetOrganizationLicensesRequest };
var GetOrganizationLicensesResponse = /** @class */ (function (_super) {
    __extends(GetOrganizationLicensesResponse, _super);
    function GetOrganizationLicensesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetOrganizationLicensesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetOrganizationLicensesResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetOrganizationLicensesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetOrganizationLicensesResponse.prototype, "getOrganizationLicenses200ApplicationJsonObject", void 0);
    return GetOrganizationLicensesResponse;
}(SpeakeasyBase));
export { GetOrganizationLicensesResponse };
