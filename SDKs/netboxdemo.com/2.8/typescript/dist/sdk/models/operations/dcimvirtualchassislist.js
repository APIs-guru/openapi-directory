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
var DcimVirtualChassisListQueryParams = /** @class */ (function (_super) {
    __extends(DcimVirtualChassisListQueryParams, _super);
    function DcimVirtualChassisListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisListQueryParams.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain__ic" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisListQueryParams.prototype, "domainIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain__ie" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisListQueryParams.prototype, "domainIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain__iew" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisListQueryParams.prototype, "domainIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain__isw" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisListQueryParams.prototype, "domainIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain__n" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisListQueryParams.prototype, "domainN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain__nic" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisListQueryParams.prototype, "domainNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain__nie" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisListQueryParams.prototype, "domainNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain__niew" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisListQueryParams.prototype, "domainNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain__nisw" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisListQueryParams.prototype, "domainNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisListQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gt" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisListQueryParams.prototype, "idGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gte" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisListQueryParams.prototype, "idGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lt" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisListQueryParams.prototype, "idLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lte" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisListQueryParams.prototype, "idLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__n" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisListQueryParams.prototype, "idN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], DcimVirtualChassisListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], DcimVirtualChassisListQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisListQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisListQueryParams.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region__n" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisListQueryParams.prototype, "regionN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region_id" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisListQueryParams.prototype, "regionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region_id__n" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisListQueryParams.prototype, "regionIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisListQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site__n" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisListQueryParams.prototype, "siteN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisListQueryParams.prototype, "siteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id__n" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisListQueryParams.prototype, "siteIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisListQueryParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag__n" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisListQueryParams.prototype, "tagN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisListQueryParams.prototype, "tenant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant__n" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisListQueryParams.prototype, "tenantN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_id" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisListQueryParams.prototype, "tenantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_id__n" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisListQueryParams.prototype, "tenantIdN", void 0);
    return DcimVirtualChassisListQueryParams;
}(SpeakeasyBase));
export { DcimVirtualChassisListQueryParams };
var DcimVirtualChassisList200ApplicationJson = /** @class */ (function (_super) {
    __extends(DcimVirtualChassisList200ApplicationJson, _super);
    function DcimVirtualChassisList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], DcimVirtualChassisList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], DcimVirtualChassisList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.VirtualChassis }),
        __metadata("design:type", Array)
    ], DcimVirtualChassisList200ApplicationJson.prototype, "results", void 0);
    return DcimVirtualChassisList200ApplicationJson;
}(SpeakeasyBase));
export { DcimVirtualChassisList200ApplicationJson };
var DcimVirtualChassisListRequest = /** @class */ (function (_super) {
    __extends(DcimVirtualChassisListRequest, _super);
    function DcimVirtualChassisListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DcimVirtualChassisListQueryParams)
    ], DcimVirtualChassisListRequest.prototype, "queryParams", void 0);
    return DcimVirtualChassisListRequest;
}(SpeakeasyBase));
export { DcimVirtualChassisListRequest };
var DcimVirtualChassisListResponse = /** @class */ (function (_super) {
    __extends(DcimVirtualChassisListResponse, _super);
    function DcimVirtualChassisListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DcimVirtualChassisListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DcimVirtualChassisListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DcimVirtualChassisList200ApplicationJson)
    ], DcimVirtualChassisListResponse.prototype, "dcimVirtualChassisList200ApplicationJsonObject", void 0);
    return DcimVirtualChassisListResponse;
}(SpeakeasyBase));
export { DcimVirtualChassisListResponse };
