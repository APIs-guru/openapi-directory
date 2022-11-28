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
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug" }),
        __metadata("design:type", String)
    ], VirtualizationClusterGroupsListQueryParams.prototype, "slug", void 0);
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
