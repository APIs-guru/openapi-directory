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
var DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListPathParams = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListPathParams, _super);
    function DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListPathParams.prototype, "parent", void 0);
    return DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListPathParams;
}(SpeakeasyBase));
export { DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListPathParams };
var DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListQueryParams = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListQueryParams, _super);
    function DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListQueryParams.prototype, "uploadProtocol", void 0);
    return DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListQueryParams;
}(SpeakeasyBase));
export { DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListQueryParams };
var DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListSecurity = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListSecurity, _super);
    function DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListSecurity.prototype, "oauth2c", void 0);
    return DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListSecurity;
}(SpeakeasyBase));
export { DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListSecurity };
var DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListRequest = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListRequest, _super);
    function DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListPathParams)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListQueryParams)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListSecurity)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListRequest.prototype, "security", void 0);
    return DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListRequest;
}(SpeakeasyBase));
export { DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListRequest };
var DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListResponse = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListResponse, _super);
    function DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDatalabelingV1beta1ListExamplesResponse)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListResponse.prototype, "googleCloudDatalabelingV1beta1ListExamplesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListResponse.prototype, "statusCode", void 0);
    return DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListResponse;
}(SpeakeasyBase));
export { DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListResponse };
