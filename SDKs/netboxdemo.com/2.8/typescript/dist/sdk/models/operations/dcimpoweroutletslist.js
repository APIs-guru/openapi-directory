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
var DcimPowerOutletsListQueryParams = /** @class */ (function (_super) {
    __extends(DcimPowerOutletsListQueryParams, _super);
    function DcimPowerOutletsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cabled" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "cabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=connection_status" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "connectionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=connection_status__n" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "connectionStatusN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__ic" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "descriptionIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__ie" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "descriptionIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__iew" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "descriptionIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__isw" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "descriptionIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__n" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "descriptionN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__nic" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "descriptionNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__nie" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "descriptionNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__niew" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "descriptionNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__nisw" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "descriptionNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device__n" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "deviceN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_id" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_id__n" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "deviceIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=feed_leg" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "feedLeg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=feed_leg__n" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "feedLegN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gt" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "idGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gte" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "idGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lt" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "idLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lte" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "idLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__n" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "idN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], DcimPowerOutletsListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ic" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "nameIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ie" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "nameIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__iew" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "nameIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__isw" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "nameIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__n" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "nameN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nic" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "nameNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nie" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "nameNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__niew" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "nameNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nisw" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "nameNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], DcimPowerOutletsListQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region__n" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "regionN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region_id" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "regionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region_id__n" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "regionIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site__n" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "siteN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "siteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id__n" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "siteIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag__n" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "tagN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type__n" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "typeN", void 0);
    return DcimPowerOutletsListQueryParams;
}(SpeakeasyBase));
export { DcimPowerOutletsListQueryParams };
var DcimPowerOutletsList200ApplicationJson = /** @class */ (function (_super) {
    __extends(DcimPowerOutletsList200ApplicationJson, _super);
    function DcimPowerOutletsList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], DcimPowerOutletsList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.PowerOutlet }),
        __metadata("design:type", Array)
    ], DcimPowerOutletsList200ApplicationJson.prototype, "results", void 0);
    return DcimPowerOutletsList200ApplicationJson;
}(SpeakeasyBase));
export { DcimPowerOutletsList200ApplicationJson };
var DcimPowerOutletsListRequest = /** @class */ (function (_super) {
    __extends(DcimPowerOutletsListRequest, _super);
    function DcimPowerOutletsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DcimPowerOutletsListQueryParams)
    ], DcimPowerOutletsListRequest.prototype, "queryParams", void 0);
    return DcimPowerOutletsListRequest;
}(SpeakeasyBase));
export { DcimPowerOutletsListRequest };
var DcimPowerOutletsListResponse = /** @class */ (function (_super) {
    __extends(DcimPowerOutletsListResponse, _super);
    function DcimPowerOutletsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DcimPowerOutletsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DcimPowerOutletsListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DcimPowerOutletsList200ApplicationJson)
    ], DcimPowerOutletsListResponse.prototype, "dcimPowerOutletsList200ApplicationJsonObject", void 0);
    return DcimPowerOutletsListResponse;
}(SpeakeasyBase));
export { DcimPowerOutletsListResponse };
