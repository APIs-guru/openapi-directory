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
var DcimPowerFeedsListQueryParams = /** @class */ (function (_super) {
    __extends(DcimPowerFeedsListQueryParams, _super);
    function DcimPowerFeedsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=amperage" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "amperage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=amperage__gt" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "amperageGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=amperage__gte" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "amperageGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=amperage__lt" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "amperageLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=amperage__lte" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "amperageLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=amperage__n" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "amperageN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created__gte" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "createdGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created__lte" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "createdLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gt" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "idGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gte" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "idGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lt" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "idLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lte" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "idLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__n" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "idN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated__gte" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "lastUpdatedGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated__lte" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "lastUpdatedLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], DcimPowerFeedsListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_utilization" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "maxUtilization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_utilization__gt" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "maxUtilizationGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_utilization__gte" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "maxUtilizationGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_utilization__lt" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "maxUtilizationLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_utilization__lte" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "maxUtilizationLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_utilization__n" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "maxUtilizationN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ic" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "nameIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ie" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "nameIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__iew" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "nameIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__isw" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "nameIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__n" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "nameN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nic" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "nameNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nie" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "nameNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__niew" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "nameNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nisw" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "nameNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], DcimPowerFeedsListQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=phase" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "phase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=phase__n" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "phaseN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=power_panel_id" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "powerPanelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=power_panel_id__n" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "powerPanelIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rack_id" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "rackId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rack_id__n" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "rackIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region__n" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "regionN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region_id" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "regionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region_id__n" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "regionIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site__n" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "siteN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "siteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id__n" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "siteIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status__n" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "statusN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supply" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "supply", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supply__n" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "supplyN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag__n" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "tagN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type__n" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "typeN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=voltage" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "voltage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=voltage__gt" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "voltageGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=voltage__gte" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "voltageGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=voltage__lt" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "voltageLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=voltage__lte" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "voltageLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=voltage__n" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsListQueryParams.prototype, "voltageN", void 0);
    return DcimPowerFeedsListQueryParams;
}(SpeakeasyBase));
export { DcimPowerFeedsListQueryParams };
var DcimPowerFeedsList200ApplicationJson = /** @class */ (function (_super) {
    __extends(DcimPowerFeedsList200ApplicationJson, _super);
    function DcimPowerFeedsList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], DcimPowerFeedsList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], DcimPowerFeedsList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.PowerFeed }),
        __metadata("design:type", Array)
    ], DcimPowerFeedsList200ApplicationJson.prototype, "results", void 0);
    return DcimPowerFeedsList200ApplicationJson;
}(SpeakeasyBase));
export { DcimPowerFeedsList200ApplicationJson };
var DcimPowerFeedsListRequest = /** @class */ (function (_super) {
    __extends(DcimPowerFeedsListRequest, _super);
    function DcimPowerFeedsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DcimPowerFeedsListQueryParams)
    ], DcimPowerFeedsListRequest.prototype, "queryParams", void 0);
    return DcimPowerFeedsListRequest;
}(SpeakeasyBase));
export { DcimPowerFeedsListRequest };
var DcimPowerFeedsListResponse = /** @class */ (function (_super) {
    __extends(DcimPowerFeedsListResponse, _super);
    function DcimPowerFeedsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DcimPowerFeedsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DcimPowerFeedsListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DcimPowerFeedsList200ApplicationJson)
    ], DcimPowerFeedsListResponse.prototype, "dcimPowerFeedsList200ApplicationJsonObject", void 0);
    return DcimPowerFeedsListResponse;
}(SpeakeasyBase));
export { DcimPowerFeedsListResponse };
