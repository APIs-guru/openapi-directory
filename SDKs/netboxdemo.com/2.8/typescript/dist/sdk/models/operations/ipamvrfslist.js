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
var IpamVrfsListQueryParams = /** @class */ (function (_super) {
    __extends(IpamVrfsListQueryParams, _super);
    function IpamVrfsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created__gte" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "createdGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created__lte" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "createdLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enforce_unique" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "enforceUnique", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gt" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "idGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gte" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "idGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lt" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "idLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lte" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "idLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__n" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "idN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated__gte" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "lastUpdatedGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated__lte" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "lastUpdatedLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], IpamVrfsListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ic" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "nameIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ie" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "nameIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__iew" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "nameIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__isw" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "nameIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__n" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "nameN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nic" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "nameNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nie" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "nameNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__niew" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "nameNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nisw" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "nameNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], IpamVrfsListQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rd" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "rd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rd__ic" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "rdIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rd__ie" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "rdIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rd__iew" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "rdIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rd__isw" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "rdIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rd__n" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "rdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rd__nic" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "rdNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rd__nie" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "rdNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rd__niew" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "rdNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rd__nisw" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "rdNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag__n" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "tagN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "tenant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant__n" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "tenantN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_group" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "tenantGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_group__n" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "tenantGroupN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_group_id" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "tenantGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_group_id__n" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "tenantGroupIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_id" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "tenantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_id__n" }),
        __metadata("design:type", String)
    ], IpamVrfsListQueryParams.prototype, "tenantIdN", void 0);
    return IpamVrfsListQueryParams;
}(SpeakeasyBase));
export { IpamVrfsListQueryParams };
var IpamVrfsList200ApplicationJson = /** @class */ (function (_super) {
    __extends(IpamVrfsList200ApplicationJson, _super);
    function IpamVrfsList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], IpamVrfsList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], IpamVrfsList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], IpamVrfsList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Vrf }),
        __metadata("design:type", Array)
    ], IpamVrfsList200ApplicationJson.prototype, "results", void 0);
    return IpamVrfsList200ApplicationJson;
}(SpeakeasyBase));
export { IpamVrfsList200ApplicationJson };
var IpamVrfsListRequest = /** @class */ (function (_super) {
    __extends(IpamVrfsListRequest, _super);
    function IpamVrfsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IpamVrfsListQueryParams)
    ], IpamVrfsListRequest.prototype, "queryParams", void 0);
    return IpamVrfsListRequest;
}(SpeakeasyBase));
export { IpamVrfsListRequest };
var IpamVrfsListResponse = /** @class */ (function (_super) {
    __extends(IpamVrfsListResponse, _super);
    function IpamVrfsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IpamVrfsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IpamVrfsListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IpamVrfsList200ApplicationJson)
    ], IpamVrfsListResponse.prototype, "ipamVrfsList200ApplicationJsonObject", void 0);
    return IpamVrfsListResponse;
}(SpeakeasyBase));
export { IpamVrfsListResponse };
