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
var DatalabelingProjectsAnnotationSpecSetsListPathParams = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsAnnotationSpecSetsListPathParams, _super);
    function DatalabelingProjectsAnnotationSpecSetsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsAnnotationSpecSetsListPathParams.prototype, "parent", void 0);
    return DatalabelingProjectsAnnotationSpecSetsListPathParams;
}(SpeakeasyBase));
export { DatalabelingProjectsAnnotationSpecSetsListPathParams };
var DatalabelingProjectsAnnotationSpecSetsListQueryParams = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsAnnotationSpecSetsListQueryParams, _super);
    function DatalabelingProjectsAnnotationSpecSetsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsAnnotationSpecSetsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsAnnotationSpecSetsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsAnnotationSpecSetsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsAnnotationSpecSetsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsAnnotationSpecSetsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsAnnotationSpecSetsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsAnnotationSpecSetsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsAnnotationSpecSetsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DatalabelingProjectsAnnotationSpecSetsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsAnnotationSpecSetsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatalabelingProjectsAnnotationSpecSetsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsAnnotationSpecSetsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsAnnotationSpecSetsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsAnnotationSpecSetsListQueryParams.prototype, "uploadProtocol", void 0);
    return DatalabelingProjectsAnnotationSpecSetsListQueryParams;
}(SpeakeasyBase));
export { DatalabelingProjectsAnnotationSpecSetsListQueryParams };
var DatalabelingProjectsAnnotationSpecSetsListSecurity = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsAnnotationSpecSetsListSecurity, _super);
    function DatalabelingProjectsAnnotationSpecSetsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatalabelingProjectsAnnotationSpecSetsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatalabelingProjectsAnnotationSpecSetsListSecurity.prototype, "oauth2c", void 0);
    return DatalabelingProjectsAnnotationSpecSetsListSecurity;
}(SpeakeasyBase));
export { DatalabelingProjectsAnnotationSpecSetsListSecurity };
var DatalabelingProjectsAnnotationSpecSetsListRequest = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsAnnotationSpecSetsListRequest, _super);
    function DatalabelingProjectsAnnotationSpecSetsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatalabelingProjectsAnnotationSpecSetsListPathParams)
    ], DatalabelingProjectsAnnotationSpecSetsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatalabelingProjectsAnnotationSpecSetsListQueryParams)
    ], DatalabelingProjectsAnnotationSpecSetsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatalabelingProjectsAnnotationSpecSetsListSecurity)
    ], DatalabelingProjectsAnnotationSpecSetsListRequest.prototype, "security", void 0);
    return DatalabelingProjectsAnnotationSpecSetsListRequest;
}(SpeakeasyBase));
export { DatalabelingProjectsAnnotationSpecSetsListRequest };
var DatalabelingProjectsAnnotationSpecSetsListResponse = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsAnnotationSpecSetsListResponse, _super);
    function DatalabelingProjectsAnnotationSpecSetsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatalabelingProjectsAnnotationSpecSetsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse)
    ], DatalabelingProjectsAnnotationSpecSetsListResponse.prototype, "googleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatalabelingProjectsAnnotationSpecSetsListResponse.prototype, "statusCode", void 0);
    return DatalabelingProjectsAnnotationSpecSetsListResponse;
}(SpeakeasyBase));
export { DatalabelingProjectsAnnotationSpecSetsListResponse };
