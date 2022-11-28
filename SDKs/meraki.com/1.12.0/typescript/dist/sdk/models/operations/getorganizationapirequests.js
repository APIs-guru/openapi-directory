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
var GetOrganizationApiRequestsPathParams = /** @class */ (function (_super) {
    __extends(GetOrganizationApiRequestsPathParams, _super);
    function GetOrganizationApiRequestsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], GetOrganizationApiRequestsPathParams.prototype, "organizationId", void 0);
    return GetOrganizationApiRequestsPathParams;
}(SpeakeasyBase));
export { GetOrganizationApiRequestsPathParams };
var GetOrganizationApiRequestsQueryParams = /** @class */ (function (_super) {
    __extends(GetOrganizationApiRequestsQueryParams, _super);
    function GetOrganizationApiRequestsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=adminId" }),
        __metadata("design:type", String)
    ], GetOrganizationApiRequestsQueryParams.prototype, "adminId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endingBefore" }),
        __metadata("design:type", String)
    ], GetOrganizationApiRequestsQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=method" }),
        __metadata("design:type", String)
    ], GetOrganizationApiRequestsQueryParams.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" }),
        __metadata("design:type", String)
    ], GetOrganizationApiRequestsQueryParams.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=perPage" }),
        __metadata("design:type", Number)
    ], GetOrganizationApiRequestsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=responseCode" }),
        __metadata("design:type", Number)
    ], GetOrganizationApiRequestsQueryParams.prototype, "responseCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceIp" }),
        __metadata("design:type", String)
    ], GetOrganizationApiRequestsQueryParams.prototype, "sourceIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startingAfter" }),
        __metadata("design:type", String)
    ], GetOrganizationApiRequestsQueryParams.prototype, "startingAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" }),
        __metadata("design:type", String)
    ], GetOrganizationApiRequestsQueryParams.prototype, "t0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t1" }),
        __metadata("design:type", String)
    ], GetOrganizationApiRequestsQueryParams.prototype, "t1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetOrganizationApiRequestsQueryParams.prototype, "timespan", void 0);
    return GetOrganizationApiRequestsQueryParams;
}(SpeakeasyBase));
export { GetOrganizationApiRequestsQueryParams };
var GetOrganizationApiRequestsRequest = /** @class */ (function (_super) {
    __extends(GetOrganizationApiRequestsRequest, _super);
    function GetOrganizationApiRequestsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOrganizationApiRequestsPathParams)
    ], GetOrganizationApiRequestsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOrganizationApiRequestsQueryParams)
    ], GetOrganizationApiRequestsRequest.prototype, "queryParams", void 0);
    return GetOrganizationApiRequestsRequest;
}(SpeakeasyBase));
export { GetOrganizationApiRequestsRequest };
var GetOrganizationApiRequestsResponse = /** @class */ (function (_super) {
    __extends(GetOrganizationApiRequestsResponse, _super);
    function GetOrganizationApiRequestsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetOrganizationApiRequestsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetOrganizationApiRequestsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetOrganizationApiRequestsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetOrganizationApiRequestsResponse.prototype, "getOrganizationApiRequests200ApplicationJsonObject", void 0);
    return GetOrganizationApiRequestsResponse;
}(SpeakeasyBase));
export { GetOrganizationApiRequestsResponse };
