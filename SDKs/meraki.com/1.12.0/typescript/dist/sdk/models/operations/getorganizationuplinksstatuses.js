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
var GetOrganizationUplinksStatusesPathParams = /** @class */ (function (_super) {
    __extends(GetOrganizationUplinksStatusesPathParams, _super);
    function GetOrganizationUplinksStatusesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], GetOrganizationUplinksStatusesPathParams.prototype, "organizationId", void 0);
    return GetOrganizationUplinksStatusesPathParams;
}(SpeakeasyBase));
export { GetOrganizationUplinksStatusesPathParams };
var GetOrganizationUplinksStatusesQueryParams = /** @class */ (function (_super) {
    __extends(GetOrganizationUplinksStatusesQueryParams, _super);
    function GetOrganizationUplinksStatusesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endingBefore" }),
        __metadata("design:type", String)
    ], GetOrganizationUplinksStatusesQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=iccids" }),
        __metadata("design:type", Array)
    ], GetOrganizationUplinksStatusesQueryParams.prototype, "iccids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=networkIds" }),
        __metadata("design:type", Array)
    ], GetOrganizationUplinksStatusesQueryParams.prototype, "networkIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=perPage" }),
        __metadata("design:type", Number)
    ], GetOrganizationUplinksStatusesQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=serials" }),
        __metadata("design:type", Array)
    ], GetOrganizationUplinksStatusesQueryParams.prototype, "serials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startingAfter" }),
        __metadata("design:type", String)
    ], GetOrganizationUplinksStatusesQueryParams.prototype, "startingAfter", void 0);
    return GetOrganizationUplinksStatusesQueryParams;
}(SpeakeasyBase));
export { GetOrganizationUplinksStatusesQueryParams };
var GetOrganizationUplinksStatusesRequest = /** @class */ (function (_super) {
    __extends(GetOrganizationUplinksStatusesRequest, _super);
    function GetOrganizationUplinksStatusesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOrganizationUplinksStatusesPathParams)
    ], GetOrganizationUplinksStatusesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOrganizationUplinksStatusesQueryParams)
    ], GetOrganizationUplinksStatusesRequest.prototype, "queryParams", void 0);
    return GetOrganizationUplinksStatusesRequest;
}(SpeakeasyBase));
export { GetOrganizationUplinksStatusesRequest };
var GetOrganizationUplinksStatusesResponse = /** @class */ (function (_super) {
    __extends(GetOrganizationUplinksStatusesResponse, _super);
    function GetOrganizationUplinksStatusesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetOrganizationUplinksStatusesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetOrganizationUplinksStatusesResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetOrganizationUplinksStatusesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetOrganizationUplinksStatusesResponse.prototype, "getOrganizationUplinksStatuses200ApplicationJsonObject", void 0);
    return GetOrganizationUplinksStatusesResponse;
}(SpeakeasyBase));
export { GetOrganizationUplinksStatusesResponse };
