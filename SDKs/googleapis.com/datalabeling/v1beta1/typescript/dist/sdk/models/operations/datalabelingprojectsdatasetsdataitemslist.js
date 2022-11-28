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
var DatalabelingProjectsDatasetsDataItemsListPathParams = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsDatasetsDataItemsListPathParams, _super);
    function DatalabelingProjectsDatasetsDataItemsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsDataItemsListPathParams.prototype, "parent", void 0);
    return DatalabelingProjectsDatasetsDataItemsListPathParams;
}(SpeakeasyBase));
export { DatalabelingProjectsDatasetsDataItemsListPathParams };
var DatalabelingProjectsDatasetsDataItemsListQueryParams = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsDatasetsDataItemsListQueryParams, _super);
    function DatalabelingProjectsDatasetsDataItemsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsDataItemsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsDataItemsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsDataItemsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsDataItemsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsDataItemsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsDataItemsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsDataItemsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsDataItemsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DatalabelingProjectsDatasetsDataItemsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsDataItemsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatalabelingProjectsDatasetsDataItemsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsDataItemsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsDataItemsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsDataItemsListQueryParams.prototype, "uploadProtocol", void 0);
    return DatalabelingProjectsDatasetsDataItemsListQueryParams;
}(SpeakeasyBase));
export { DatalabelingProjectsDatasetsDataItemsListQueryParams };
var DatalabelingProjectsDatasetsDataItemsListSecurity = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsDatasetsDataItemsListSecurity, _super);
    function DatalabelingProjectsDatasetsDataItemsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatalabelingProjectsDatasetsDataItemsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatalabelingProjectsDatasetsDataItemsListSecurity.prototype, "oauth2c", void 0);
    return DatalabelingProjectsDatasetsDataItemsListSecurity;
}(SpeakeasyBase));
export { DatalabelingProjectsDatasetsDataItemsListSecurity };
var DatalabelingProjectsDatasetsDataItemsListRequest = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsDatasetsDataItemsListRequest, _super);
    function DatalabelingProjectsDatasetsDataItemsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatalabelingProjectsDatasetsDataItemsListPathParams)
    ], DatalabelingProjectsDatasetsDataItemsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatalabelingProjectsDatasetsDataItemsListQueryParams)
    ], DatalabelingProjectsDatasetsDataItemsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatalabelingProjectsDatasetsDataItemsListSecurity)
    ], DatalabelingProjectsDatasetsDataItemsListRequest.prototype, "security", void 0);
    return DatalabelingProjectsDatasetsDataItemsListRequest;
}(SpeakeasyBase));
export { DatalabelingProjectsDatasetsDataItemsListRequest };
var DatalabelingProjectsDatasetsDataItemsListResponse = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsDatasetsDataItemsListResponse, _super);
    function DatalabelingProjectsDatasetsDataItemsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsDataItemsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDatalabelingV1beta1ListDataItemsResponse)
    ], DatalabelingProjectsDatasetsDataItemsListResponse.prototype, "googleCloudDatalabelingV1beta1ListDataItemsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatalabelingProjectsDatasetsDataItemsListResponse.prototype, "statusCode", void 0);
    return DatalabelingProjectsDatasetsDataItemsListResponse;
}(SpeakeasyBase));
export { DatalabelingProjectsDatasetsDataItemsListResponse };
