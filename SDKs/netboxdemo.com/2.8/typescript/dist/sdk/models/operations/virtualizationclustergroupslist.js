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
var VirtualizationClusterGroupsListQueryParams = /** @class */ (function (_super) {
    __extends(VirtualizationClusterGroupsListQueryParams, _super);
    function VirtualizationClusterGroupsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__ic" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "descriptionIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__ie" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "descriptionIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__iew" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "descriptionIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__isw" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "descriptionIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__n" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "descriptionN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__nic" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "descriptionNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__nie" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "descriptionNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__niew" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "descriptionNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__nisw" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "descriptionNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gt" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "idGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gte" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "idGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lt" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "idLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lte" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "idLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__n" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "idN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ic" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "nameIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ie" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "nameIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__iew" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "nameIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__isw" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "nameIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__n" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "nameN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nic" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "nameNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nie" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "nameNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__niew" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "nameNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nisw" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "nameNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "slug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__ic" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "slugIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__ie" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "slugIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__iew" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "slugIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__isw" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "slugIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__n" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "slugN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__nic" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "slugNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__nie" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "slugNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__niew" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "slugNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__nisw" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "slugNisw", void 0);
    return VirtualizationClusterGroupsListQueryParams;
}(SpeakeasyBase));
export { VirtualizationClusterGroupsListQueryParams };
var VirtualizationClusterGroupsList200ApplicationJson = /** @class */ (function (_super) {
    __extends(VirtualizationClusterGroupsList200ApplicationJson, _super);
    function VirtualizationClusterGroupsList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], VirtualizationClusterGroupsList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.ClusterGroup }),
        __metadata("design:type", Array)
    ], VirtualizationClusterGroupsList200ApplicationJson.prototype, "results", void 0);
    return VirtualizationClusterGroupsList200ApplicationJson;
}(SpeakeasyBase));
export { VirtualizationClusterGroupsList200ApplicationJson };
var VirtualizationClusterGroupsListRequest = /** @class */ (function (_super) {
    __extends(VirtualizationClusterGroupsListRequest, _super);
    function VirtualizationClusterGroupsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VirtualizationClusterGroupsListQueryParams)
    ], VirtualizationClusterGroupsListRequest.prototype, "queryParams", void 0);
    return VirtualizationClusterGroupsListRequest;
}(SpeakeasyBase));
export { VirtualizationClusterGroupsListRequest };
var VirtualizationClusterGroupsListResponse = /** @class */ (function (_super) {
    __extends(VirtualizationClusterGroupsListResponse, _super);
    function VirtualizationClusterGroupsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VirtualizationClusterGroupsListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VirtualizationClusterGroupsList200ApplicationJson)
    ], VirtualizationClusterGroupsListResponse.prototype, "virtualizationClusterGroupsList200ApplicationJsonObject", void 0);
    return VirtualizationClusterGroupsListResponse;
}(SpeakeasyBase));
export { VirtualizationClusterGroupsListResponse };
