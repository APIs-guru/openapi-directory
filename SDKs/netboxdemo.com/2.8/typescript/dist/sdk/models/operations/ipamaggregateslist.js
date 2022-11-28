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
var IpamAggregatesListQueryParams = /** @class */ (function (_super) {
    __extends(IpamAggregatesListQueryParams, _super);
    function IpamAggregatesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created" }),
        __metadata("design:type", String)
    ], IpamAggregatesListQueryParams.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created__gte" }),
        __metadata("design:type", String)
    ], IpamAggregatesListQueryParams.prototype, "createdGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created__lte" }),
        __metadata("design:type", String)
    ], IpamAggregatesListQueryParams.prototype, "createdLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_added" }),
        __metadata("design:type", String)
    ], IpamAggregatesListQueryParams.prototype, "dateAdded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_added__gt" }),
        __metadata("design:type", String)
    ], IpamAggregatesListQueryParams.prototype, "dateAddedGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_added__gte" }),
        __metadata("design:type", String)
    ], IpamAggregatesListQueryParams.prototype, "dateAddedGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_added__lt" }),
        __metadata("design:type", String)
    ], IpamAggregatesListQueryParams.prototype, "dateAddedLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_added__lte" }),
        __metadata("design:type", String)
    ], IpamAggregatesListQueryParams.prototype, "dateAddedLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_added__n" }),
        __metadata("design:type", String)
    ], IpamAggregatesListQueryParams.prototype, "dateAddedN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=family" }),
        __metadata("design:type", Number)
    ], IpamAggregatesListQueryParams.prototype, "family", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], IpamAggregatesListQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gt" }),
        __metadata("design:type", String)
    ], IpamAggregatesListQueryParams.prototype, "idGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gte" }),
        __metadata("design:type", String)
    ], IpamAggregatesListQueryParams.prototype, "idGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lt" }),
        __metadata("design:type", String)
    ], IpamAggregatesListQueryParams.prototype, "idLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lte" }),
        __metadata("design:type", String)
    ], IpamAggregatesListQueryParams.prototype, "idLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__n" }),
        __metadata("design:type", String)
    ], IpamAggregatesListQueryParams.prototype, "idN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated" }),
        __metadata("design:type", String)
    ], IpamAggregatesListQueryParams.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated__gte" }),
        __metadata("design:type", String)
    ], IpamAggregatesListQueryParams.prototype, "lastUpdatedGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated__lte" }),
        __metadata("design:type", String)
    ], IpamAggregatesListQueryParams.prototype, "lastUpdatedLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], IpamAggregatesListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], IpamAggregatesListQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prefix" }),
        __metadata("design:type", String)
    ], IpamAggregatesListQueryParams.prototype, "prefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], IpamAggregatesListQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rir" }),
        __metadata("design:type", String)
    ], IpamAggregatesListQueryParams.prototype, "rir", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rir__n" }),
        __metadata("design:type", String)
    ], IpamAggregatesListQueryParams.prototype, "rirN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rir_id" }),
        __metadata("design:type", String)
    ], IpamAggregatesListQueryParams.prototype, "rirId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rir_id__n" }),
        __metadata("design:type", String)
    ], IpamAggregatesListQueryParams.prototype, "rirIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], IpamAggregatesListQueryParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag__n" }),
        __metadata("design:type", String)
    ], IpamAggregatesListQueryParams.prototype, "tagN", void 0);
    return IpamAggregatesListQueryParams;
}(SpeakeasyBase));
export { IpamAggregatesListQueryParams };
var IpamAggregatesList200ApplicationJson = /** @class */ (function (_super) {
    __extends(IpamAggregatesList200ApplicationJson, _super);
    function IpamAggregatesList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], IpamAggregatesList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], IpamAggregatesList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], IpamAggregatesList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Aggregate }),
        __metadata("design:type", Array)
    ], IpamAggregatesList200ApplicationJson.prototype, "results", void 0);
    return IpamAggregatesList200ApplicationJson;
}(SpeakeasyBase));
export { IpamAggregatesList200ApplicationJson };
var IpamAggregatesListRequest = /** @class */ (function (_super) {
    __extends(IpamAggregatesListRequest, _super);
    function IpamAggregatesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IpamAggregatesListQueryParams)
    ], IpamAggregatesListRequest.prototype, "queryParams", void 0);
    return IpamAggregatesListRequest;
}(SpeakeasyBase));
export { IpamAggregatesListRequest };
var IpamAggregatesListResponse = /** @class */ (function (_super) {
    __extends(IpamAggregatesListResponse, _super);
    function IpamAggregatesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IpamAggregatesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IpamAggregatesListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IpamAggregatesList200ApplicationJson)
    ], IpamAggregatesListResponse.prototype, "ipamAggregatesList200ApplicationJsonObject", void 0);
    return IpamAggregatesListResponse;
}(SpeakeasyBase));
export { IpamAggregatesListResponse };
