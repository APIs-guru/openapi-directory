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
var DcimSitesListQueryParams = /** @class */ (function (_super) {
    __extends(DcimSitesListQueryParams, _super);
    function DcimSitesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asn" }),
        __metadata("design:type", Number)
    ], DcimSitesListQueryParams.prototype, "asn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_email" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_name" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_phone" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "contactPhone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facility" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "facility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__in" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "idIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], DcimSitesListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], DcimSitesListQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region_id" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "regionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "slug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "tenant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_id" }),
        __metadata("design:type", String)
    ], DcimSitesListQueryParams.prototype, "tenantId", void 0);
    return DcimSitesListQueryParams;
}(SpeakeasyBase));
export { DcimSitesListQueryParams };
var DcimSitesList200ApplicationJson = /** @class */ (function (_super) {
    __extends(DcimSitesList200ApplicationJson, _super);
    function DcimSitesList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], DcimSitesList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], DcimSitesList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], DcimSitesList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Site }),
        __metadata("design:type", Array)
    ], DcimSitesList200ApplicationJson.prototype, "results", void 0);
    return DcimSitesList200ApplicationJson;
}(SpeakeasyBase));
export { DcimSitesList200ApplicationJson };
var DcimSitesListRequest = /** @class */ (function (_super) {
    __extends(DcimSitesListRequest, _super);
    function DcimSitesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DcimSitesListQueryParams)
    ], DcimSitesListRequest.prototype, "queryParams", void 0);
    return DcimSitesListRequest;
}(SpeakeasyBase));
export { DcimSitesListRequest };
var DcimSitesListResponse = /** @class */ (function (_super) {
    __extends(DcimSitesListResponse, _super);
    function DcimSitesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DcimSitesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DcimSitesListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DcimSitesList200ApplicationJson)
    ], DcimSitesListResponse.prototype, "dcimSitesList200ApplicationJsonObject", void 0);
    return DcimSitesListResponse;
}(SpeakeasyBase));
export { DcimSitesListResponse };
