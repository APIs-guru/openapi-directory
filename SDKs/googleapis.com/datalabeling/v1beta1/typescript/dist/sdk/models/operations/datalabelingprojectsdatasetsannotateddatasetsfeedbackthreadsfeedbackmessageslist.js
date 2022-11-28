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
var DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListPathParams = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListPathParams, _super);
    function DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListPathParams.prototype, "parent", void 0);
    return DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListPathParams;
}(SpeakeasyBase));
export { DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListPathParams };
var DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListQueryParams = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListQueryParams, _super);
    function DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListQueryParams.prototype, "uploadProtocol", void 0);
    return DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListQueryParams;
}(SpeakeasyBase));
export { DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListQueryParams };
var DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListSecurity = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListSecurity, _super);
    function DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListSecurity.prototype, "oauth2c", void 0);
    return DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListSecurity;
}(SpeakeasyBase));
export { DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListSecurity };
var DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListRequest = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListRequest, _super);
    function DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListPathParams)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListQueryParams)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListSecurity)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListRequest.prototype, "security", void 0);
    return DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListRequest;
}(SpeakeasyBase));
export { DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListRequest };
var DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListResponse = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListResponse, _super);
    function DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListResponse.prototype, "googleCloudDatalabelingV1beta1ListFeedbackMessagesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListResponse.prototype, "statusCode", void 0);
    return DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListResponse;
}(SpeakeasyBase));
export { DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListResponse };
