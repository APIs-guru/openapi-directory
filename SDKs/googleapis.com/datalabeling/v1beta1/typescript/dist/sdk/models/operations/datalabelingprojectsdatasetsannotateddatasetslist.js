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
var DatalabelingProjectsDatasetsAnnotatedDatasetsListPathParams = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsDatasetsAnnotatedDatasetsListPathParams, _super);
    function DatalabelingProjectsDatasetsAnnotatedDatasetsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsListPathParams.prototype, "parent", void 0);
    return DatalabelingProjectsDatasetsAnnotatedDatasetsListPathParams;
}(SpeakeasyBase));
export { DatalabelingProjectsDatasetsAnnotatedDatasetsListPathParams };
var DatalabelingProjectsDatasetsAnnotatedDatasetsListQueryParams = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsDatasetsAnnotatedDatasetsListQueryParams, _super);
    function DatalabelingProjectsDatasetsAnnotatedDatasetsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsListQueryParams.prototype, "uploadProtocol", void 0);
    return DatalabelingProjectsDatasetsAnnotatedDatasetsListQueryParams;
}(SpeakeasyBase));
export { DatalabelingProjectsDatasetsAnnotatedDatasetsListQueryParams };
var DatalabelingProjectsDatasetsAnnotatedDatasetsListSecurity = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsDatasetsAnnotatedDatasetsListSecurity, _super);
    function DatalabelingProjectsDatasetsAnnotatedDatasetsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsListSecurity.prototype, "oauth2c", void 0);
    return DatalabelingProjectsDatasetsAnnotatedDatasetsListSecurity;
}(SpeakeasyBase));
export { DatalabelingProjectsDatasetsAnnotatedDatasetsListSecurity };
var DatalabelingProjectsDatasetsAnnotatedDatasetsListRequest = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsDatasetsAnnotatedDatasetsListRequest, _super);
    function DatalabelingProjectsDatasetsAnnotatedDatasetsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatalabelingProjectsDatasetsAnnotatedDatasetsListPathParams)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatalabelingProjectsDatasetsAnnotatedDatasetsListQueryParams)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatalabelingProjectsDatasetsAnnotatedDatasetsListSecurity)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsListRequest.prototype, "security", void 0);
    return DatalabelingProjectsDatasetsAnnotatedDatasetsListRequest;
}(SpeakeasyBase));
export { DatalabelingProjectsDatasetsAnnotatedDatasetsListRequest };
var DatalabelingProjectsDatasetsAnnotatedDatasetsListResponse = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsDatasetsAnnotatedDatasetsListResponse, _super);
    function DatalabelingProjectsDatasetsAnnotatedDatasetsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsListResponse.prototype, "googleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsListResponse.prototype, "statusCode", void 0);
    return DatalabelingProjectsDatasetsAnnotatedDatasetsListResponse;
}(SpeakeasyBase));
export { DatalabelingProjectsDatasetsAnnotatedDatasetsListResponse };
