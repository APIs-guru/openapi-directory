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
var IpamVlansListQueryParams = /** @class */ (function (_super) {
    __extends(IpamVlansListQueryParams, _super);
    function IpamVlansListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created__gte" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "createdGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created__lte" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "createdLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group__n" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "groupN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_id" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_id__n" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "groupIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gt" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "idGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gte" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "idGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lt" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "idLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lte" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "idLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__n" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "idN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated__gte" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "lastUpdatedGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated__lte" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "lastUpdatedLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], IpamVlansListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ic" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "nameIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ie" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "nameIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__iew" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "nameIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__isw" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "nameIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__n" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "nameN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nic" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "nameNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nie" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "nameNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__niew" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "nameNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nisw" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "nameNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], IpamVlansListQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region__n" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "regionN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region_id" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "regionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region_id__n" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "regionIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role__n" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "roleN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role_id" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "roleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role_id__n" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "roleIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site__n" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "siteN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "siteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id__n" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "siteIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status__n" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "statusN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag__n" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "tagN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "tenant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant__n" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "tenantN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_group" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "tenantGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_group__n" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "tenantGroupN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_group_id" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "tenantGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_group_id__n" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "tenantGroupIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_id" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "tenantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_id__n" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "tenantIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vid" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "vid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vid__gt" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "vidGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vid__gte" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "vidGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vid__lt" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "vidLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vid__lte" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "vidLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vid__n" }),
        __metadata("design:type", String)
    ], IpamVlansListQueryParams.prototype, "vidN", void 0);
    return IpamVlansListQueryParams;
}(SpeakeasyBase));
export { IpamVlansListQueryParams };
var IpamVlansList200ApplicationJson = /** @class */ (function (_super) {
    __extends(IpamVlansList200ApplicationJson, _super);
    function IpamVlansList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], IpamVlansList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], IpamVlansList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], IpamVlansList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Vlan }),
        __metadata("design:type", Array)
    ], IpamVlansList200ApplicationJson.prototype, "results", void 0);
    return IpamVlansList200ApplicationJson;
}(SpeakeasyBase));
export { IpamVlansList200ApplicationJson };
var IpamVlansListRequest = /** @class */ (function (_super) {
    __extends(IpamVlansListRequest, _super);
    function IpamVlansListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IpamVlansListQueryParams)
    ], IpamVlansListRequest.prototype, "queryParams", void 0);
    return IpamVlansListRequest;
}(SpeakeasyBase));
export { IpamVlansListRequest };
var IpamVlansListResponse = /** @class */ (function (_super) {
    __extends(IpamVlansListResponse, _super);
    function IpamVlansListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IpamVlansListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IpamVlansListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IpamVlansList200ApplicationJson)
    ], IpamVlansListResponse.prototype, "ipamVlansList200ApplicationJsonObject", void 0);
    return IpamVlansListResponse;
}(SpeakeasyBase));
export { IpamVlansListResponse };
