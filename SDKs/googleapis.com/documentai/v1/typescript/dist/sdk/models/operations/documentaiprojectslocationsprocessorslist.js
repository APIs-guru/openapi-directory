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
var DocumentaiProjectsLocationsProcessorsListPathParams = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsListPathParams, _super);
    function DocumentaiProjectsLocationsProcessorsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsListPathParams.prototype, "parent", void 0);
    return DocumentaiProjectsLocationsProcessorsListPathParams;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsListPathParams };
var DocumentaiProjectsLocationsProcessorsListQueryParams = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsListQueryParams, _super);
    function DocumentaiProjectsLocationsProcessorsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DocumentaiProjectsLocationsProcessorsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DocumentaiProjectsLocationsProcessorsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsListQueryParams.prototype, "uploadProtocol", void 0);
    return DocumentaiProjectsLocationsProcessorsListQueryParams;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsListQueryParams };
var DocumentaiProjectsLocationsProcessorsListSecurity = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsListSecurity, _super);
    function DocumentaiProjectsLocationsProcessorsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DocumentaiProjectsLocationsProcessorsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DocumentaiProjectsLocationsProcessorsListSecurity.prototype, "oauth2c", void 0);
    return DocumentaiProjectsLocationsProcessorsListSecurity;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsListSecurity };
var DocumentaiProjectsLocationsProcessorsListRequest = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsListRequest, _super);
    function DocumentaiProjectsLocationsProcessorsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiProjectsLocationsProcessorsListPathParams)
    ], DocumentaiProjectsLocationsProcessorsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiProjectsLocationsProcessorsListQueryParams)
    ], DocumentaiProjectsLocationsProcessorsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiProjectsLocationsProcessorsListSecurity)
    ], DocumentaiProjectsLocationsProcessorsListRequest.prototype, "security", void 0);
    return DocumentaiProjectsLocationsProcessorsListRequest;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsListRequest };
var DocumentaiProjectsLocationsProcessorsListResponse = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsListResponse, _super);
    function DocumentaiProjectsLocationsProcessorsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDocumentaiV1ListProcessorsResponse)
    ], DocumentaiProjectsLocationsProcessorsListResponse.prototype, "googleCloudDocumentaiV1ListProcessorsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DocumentaiProjectsLocationsProcessorsListResponse.prototype, "statusCode", void 0);
    return DocumentaiProjectsLocationsProcessorsListResponse;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsListResponse };
