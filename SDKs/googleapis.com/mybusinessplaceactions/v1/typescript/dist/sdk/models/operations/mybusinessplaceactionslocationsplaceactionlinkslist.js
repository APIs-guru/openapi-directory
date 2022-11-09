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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var MybusinessplaceactionsLocationsPlaceActionLinksListPathParams = /** @class */ (function (_super) {
    __extends(MybusinessplaceactionsLocationsPlaceActionLinksListPathParams, _super);
    function MybusinessplaceactionsLocationsPlaceActionLinksListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], MybusinessplaceactionsLocationsPlaceActionLinksListPathParams.prototype, "parent", void 0);
    return MybusinessplaceactionsLocationsPlaceActionLinksListPathParams;
}(SpeakeasyBase));
export { MybusinessplaceactionsLocationsPlaceActionLinksListPathParams };
var MybusinessplaceactionsLocationsPlaceActionLinksListQueryParams = /** @class */ (function (_super) {
    __extends(MybusinessplaceactionsLocationsPlaceActionLinksListQueryParams, _super);
    function MybusinessplaceactionsLocationsPlaceActionLinksListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MybusinessplaceactionsLocationsPlaceActionLinksListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MybusinessplaceactionsLocationsPlaceActionLinksListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MybusinessplaceactionsLocationsPlaceActionLinksListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MybusinessplaceactionsLocationsPlaceActionLinksListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MybusinessplaceactionsLocationsPlaceActionLinksListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], MybusinessplaceactionsLocationsPlaceActionLinksListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MybusinessplaceactionsLocationsPlaceActionLinksListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MybusinessplaceactionsLocationsPlaceActionLinksListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], MybusinessplaceactionsLocationsPlaceActionLinksListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], MybusinessplaceactionsLocationsPlaceActionLinksListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MybusinessplaceactionsLocationsPlaceActionLinksListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MybusinessplaceactionsLocationsPlaceActionLinksListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MybusinessplaceactionsLocationsPlaceActionLinksListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MybusinessplaceactionsLocationsPlaceActionLinksListQueryParams.prototype, "uploadProtocol", void 0);
    return MybusinessplaceactionsLocationsPlaceActionLinksListQueryParams;
}(SpeakeasyBase));
export { MybusinessplaceactionsLocationsPlaceActionLinksListQueryParams };
var MybusinessplaceactionsLocationsPlaceActionLinksListRequest = /** @class */ (function (_super) {
    __extends(MybusinessplaceactionsLocationsPlaceActionLinksListRequest, _super);
    function MybusinessplaceactionsLocationsPlaceActionLinksListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", MybusinessplaceactionsLocationsPlaceActionLinksListPathParams)
    ], MybusinessplaceactionsLocationsPlaceActionLinksListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", MybusinessplaceactionsLocationsPlaceActionLinksListQueryParams)
    ], MybusinessplaceactionsLocationsPlaceActionLinksListRequest.prototype, "queryParams", void 0);
    return MybusinessplaceactionsLocationsPlaceActionLinksListRequest;
}(SpeakeasyBase));
export { MybusinessplaceactionsLocationsPlaceActionLinksListRequest };
var MybusinessplaceactionsLocationsPlaceActionLinksListResponse = /** @class */ (function (_super) {
    __extends(MybusinessplaceactionsLocationsPlaceActionLinksListResponse, _super);
    function MybusinessplaceactionsLocationsPlaceActionLinksListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], MybusinessplaceactionsLocationsPlaceActionLinksListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListPlaceActionLinksResponse)
    ], MybusinessplaceactionsLocationsPlaceActionLinksListResponse.prototype, "listPlaceActionLinksResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], MybusinessplaceactionsLocationsPlaceActionLinksListResponse.prototype, "statusCode", void 0);
    return MybusinessplaceactionsLocationsPlaceActionLinksListResponse;
}(SpeakeasyBase));
export { MybusinessplaceactionsLocationsPlaceActionLinksListResponse };
