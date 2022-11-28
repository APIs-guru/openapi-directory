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
var ExtrasConfigContextsListQueryParams = /** @class */ (function (_super) {
    __extends(ExtrasConfigContextsListQueryParams, _super);
    function ExtrasConfigContextsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_group" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "clusterGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_group__n" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "clusterGroupN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_group_id" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "clusterGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_group_id__n" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "clusterGroupIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_id" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "clusterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_id__n" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "clusterIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gt" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "idGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gte" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "idGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lt" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "idLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lte" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "idLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__n" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "idN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_active" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "isActive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ExtrasConfigContextsListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ic" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "nameIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ie" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "nameIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__iew" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "nameIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__isw" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "nameIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__n" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "nameN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nic" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "nameNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nie" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "nameNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__niew" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "nameNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nisw" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "nameNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ExtrasConfigContextsListQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platform" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "platform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platform__n" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "platformN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platform_id" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "platformId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platform_id__n" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "platformIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region__n" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "regionN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region_id" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "regionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region_id__n" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "regionIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role__n" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "roleN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role_id" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "roleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role_id__n" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "roleIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site__n" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "siteN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "siteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id__n" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "siteIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag__n" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "tagN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "tenant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant__n" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "tenantN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_group" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "tenantGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_group__n" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "tenantGroupN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_group_id" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "tenantGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_group_id__n" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "tenantGroupIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_id" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "tenantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_id__n" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListQueryParams.prototype, "tenantIdN", void 0);
    return ExtrasConfigContextsListQueryParams;
}(SpeakeasyBase));
export { ExtrasConfigContextsListQueryParams };
var ExtrasConfigContextsList200ApplicationJson = /** @class */ (function (_super) {
    __extends(ExtrasConfigContextsList200ApplicationJson, _super);
    function ExtrasConfigContextsList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], ExtrasConfigContextsList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], ExtrasConfigContextsList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.ConfigContext }),
        __metadata("design:type", Array)
    ], ExtrasConfigContextsList200ApplicationJson.prototype, "results", void 0);
    return ExtrasConfigContextsList200ApplicationJson;
}(SpeakeasyBase));
export { ExtrasConfigContextsList200ApplicationJson };
var ExtrasConfigContextsListRequest = /** @class */ (function (_super) {
    __extends(ExtrasConfigContextsListRequest, _super);
    function ExtrasConfigContextsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExtrasConfigContextsListQueryParams)
    ], ExtrasConfigContextsListRequest.prototype, "queryParams", void 0);
    return ExtrasConfigContextsListRequest;
}(SpeakeasyBase));
export { ExtrasConfigContextsListRequest };
var ExtrasConfigContextsListResponse = /** @class */ (function (_super) {
    __extends(ExtrasConfigContextsListResponse, _super);
    function ExtrasConfigContextsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ExtrasConfigContextsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ExtrasConfigContextsListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExtrasConfigContextsList200ApplicationJson)
    ], ExtrasConfigContextsListResponse.prototype, "extrasConfigContextsList200ApplicationJsonObject", void 0);
    return ExtrasConfigContextsListResponse;
}(SpeakeasyBase));
export { ExtrasConfigContextsListResponse };
