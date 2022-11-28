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
var IpamVlanGroupsListQueryParams = /** @class */ (function (_super) {
    __extends(IpamVlanGroupsListQueryParams, _super);
    function IpamVlanGroupsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], IpamVlanGroupsListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], IpamVlanGroupsListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], IpamVlanGroupsListQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], IpamVlanGroupsListQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id" }),
        __metadata("design:type", String)
    ], IpamVlanGroupsListQueryParams.prototype, "siteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug" }),
        __metadata("design:type", String)
    ], IpamVlanGroupsListQueryParams.prototype, "slug", void 0);
    return IpamVlanGroupsListQueryParams;
}(SpeakeasyBase));
export { IpamVlanGroupsListQueryParams };
var IpamVlanGroupsList200ApplicationJson = /** @class */ (function (_super) {
    __extends(IpamVlanGroupsList200ApplicationJson, _super);
    function IpamVlanGroupsList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], IpamVlanGroupsList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], IpamVlanGroupsList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], IpamVlanGroupsList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.VlanGroup }),
        __metadata("design:type", Array)
    ], IpamVlanGroupsList200ApplicationJson.prototype, "results", void 0);
    return IpamVlanGroupsList200ApplicationJson;
}(SpeakeasyBase));
export { IpamVlanGroupsList200ApplicationJson };
var IpamVlanGroupsListRequest = /** @class */ (function (_super) {
    __extends(IpamVlanGroupsListRequest, _super);
    function IpamVlanGroupsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IpamVlanGroupsListQueryParams)
    ], IpamVlanGroupsListRequest.prototype, "queryParams", void 0);
    return IpamVlanGroupsListRequest;
}(SpeakeasyBase));
export { IpamVlanGroupsListRequest };
var IpamVlanGroupsListResponse = /** @class */ (function (_super) {
    __extends(IpamVlanGroupsListResponse, _super);
    function IpamVlanGroupsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IpamVlanGroupsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IpamVlanGroupsListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IpamVlanGroupsList200ApplicationJson)
    ], IpamVlanGroupsListResponse.prototype, "ipamVlanGroupsList200ApplicationJsonObject", void 0);
    return IpamVlanGroupsListResponse;
}(SpeakeasyBase));
export { IpamVlanGroupsListResponse };
