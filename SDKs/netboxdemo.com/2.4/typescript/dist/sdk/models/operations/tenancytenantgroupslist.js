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
import * as shared from "../shared";
var TenancyTenantGroupsListQueryParams = /** @class */ (function (_super) {
    __extends(TenancyTenantGroupsListQueryParams, _super);
    function TenancyTenantGroupsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], TenancyTenantGroupsListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], TenancyTenantGroupsListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], TenancyTenantGroupsListQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug" }),
        __metadata("design:type", String)
    ], TenancyTenantGroupsListQueryParams.prototype, "slug", void 0);
    return TenancyTenantGroupsListQueryParams;
}(SpeakeasyBase));
export { TenancyTenantGroupsListQueryParams };
var TenancyTenantGroupsList200ApplicationJson = /** @class */ (function (_super) {
    __extends(TenancyTenantGroupsList200ApplicationJson, _super);
    function TenancyTenantGroupsList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], TenancyTenantGroupsList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], TenancyTenantGroupsList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], TenancyTenantGroupsList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.TenantGroup }),
        __metadata("design:type", Array)
    ], TenancyTenantGroupsList200ApplicationJson.prototype, "results", void 0);
    return TenancyTenantGroupsList200ApplicationJson;
}(SpeakeasyBase));
export { TenancyTenantGroupsList200ApplicationJson };
var TenancyTenantGroupsListRequest = /** @class */ (function (_super) {
    __extends(TenancyTenantGroupsListRequest, _super);
    function TenancyTenantGroupsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TenancyTenantGroupsListQueryParams)
    ], TenancyTenantGroupsListRequest.prototype, "queryParams", void 0);
    return TenancyTenantGroupsListRequest;
}(SpeakeasyBase));
export { TenancyTenantGroupsListRequest };
var TenancyTenantGroupsListResponse = /** @class */ (function (_super) {
    __extends(TenancyTenantGroupsListResponse, _super);
    function TenancyTenantGroupsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TenancyTenantGroupsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TenancyTenantGroupsListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TenancyTenantGroupsList200ApplicationJson)
    ], TenancyTenantGroupsListResponse.prototype, "tenancyTenantGroupsList200ApplicationJsonObject", void 0);
    return TenancyTenantGroupsListResponse;
}(SpeakeasyBase));
export { TenancyTenantGroupsListResponse };
