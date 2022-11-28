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
var DataplexProjectsLocationsLakesContentitemsListPathParams = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesContentitemsListPathParams, _super);
    function DataplexProjectsLocationsLakesContentitemsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesContentitemsListPathParams.prototype, "parent", void 0);
    return DataplexProjectsLocationsLakesContentitemsListPathParams;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesContentitemsListPathParams };
var DataplexProjectsLocationsLakesContentitemsListQueryParams = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesContentitemsListQueryParams, _super);
    function DataplexProjectsLocationsLakesContentitemsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesContentitemsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesContentitemsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesContentitemsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesContentitemsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesContentitemsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesContentitemsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesContentitemsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesContentitemsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DataplexProjectsLocationsLakesContentitemsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesContentitemsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataplexProjectsLocationsLakesContentitemsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesContentitemsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesContentitemsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesContentitemsListQueryParams.prototype, "uploadProtocol", void 0);
    return DataplexProjectsLocationsLakesContentitemsListQueryParams;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesContentitemsListQueryParams };
var DataplexProjectsLocationsLakesContentitemsListSecurity = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesContentitemsListSecurity, _super);
    function DataplexProjectsLocationsLakesContentitemsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataplexProjectsLocationsLakesContentitemsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataplexProjectsLocationsLakesContentitemsListSecurity.prototype, "oauth2c", void 0);
    return DataplexProjectsLocationsLakesContentitemsListSecurity;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesContentitemsListSecurity };
var DataplexProjectsLocationsLakesContentitemsListRequest = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesContentitemsListRequest, _super);
    function DataplexProjectsLocationsLakesContentitemsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataplexProjectsLocationsLakesContentitemsListPathParams)
    ], DataplexProjectsLocationsLakesContentitemsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataplexProjectsLocationsLakesContentitemsListQueryParams)
    ], DataplexProjectsLocationsLakesContentitemsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataplexProjectsLocationsLakesContentitemsListSecurity)
    ], DataplexProjectsLocationsLakesContentitemsListRequest.prototype, "security", void 0);
    return DataplexProjectsLocationsLakesContentitemsListRequest;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesContentitemsListRequest };
var DataplexProjectsLocationsLakesContentitemsListResponse = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesContentitemsListResponse, _super);
    function DataplexProjectsLocationsLakesContentitemsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesContentitemsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDataplexV1ListContentResponse)
    ], DataplexProjectsLocationsLakesContentitemsListResponse.prototype, "googleCloudDataplexV1ListContentResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataplexProjectsLocationsLakesContentitemsListResponse.prototype, "statusCode", void 0);
    return DataplexProjectsLocationsLakesContentitemsListResponse;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesContentitemsListResponse };
