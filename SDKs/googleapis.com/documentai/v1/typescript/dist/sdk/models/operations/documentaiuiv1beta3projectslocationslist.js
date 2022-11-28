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
var DocumentaiUiv1beta3ProjectsLocationsListPathParams = /** @class */ (function (_super) {
    __extends(DocumentaiUiv1beta3ProjectsLocationsListPathParams, _super);
    function DocumentaiUiv1beta3ProjectsLocationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DocumentaiUiv1beta3ProjectsLocationsListPathParams.prototype, "name", void 0);
    return DocumentaiUiv1beta3ProjectsLocationsListPathParams;
}(SpeakeasyBase));
export { DocumentaiUiv1beta3ProjectsLocationsListPathParams };
var DocumentaiUiv1beta3ProjectsLocationsListQueryParams = /** @class */ (function (_super) {
    __extends(DocumentaiUiv1beta3ProjectsLocationsListQueryParams, _super);
    function DocumentaiUiv1beta3ProjectsLocationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DocumentaiUiv1beta3ProjectsLocationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DocumentaiUiv1beta3ProjectsLocationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DocumentaiUiv1beta3ProjectsLocationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DocumentaiUiv1beta3ProjectsLocationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DocumentaiUiv1beta3ProjectsLocationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DocumentaiUiv1beta3ProjectsLocationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DocumentaiUiv1beta3ProjectsLocationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DocumentaiUiv1beta3ProjectsLocationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DocumentaiUiv1beta3ProjectsLocationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DocumentaiUiv1beta3ProjectsLocationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DocumentaiUiv1beta3ProjectsLocationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DocumentaiUiv1beta3ProjectsLocationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DocumentaiUiv1beta3ProjectsLocationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DocumentaiUiv1beta3ProjectsLocationsListQueryParams.prototype, "uploadProtocol", void 0);
    return DocumentaiUiv1beta3ProjectsLocationsListQueryParams;
}(SpeakeasyBase));
export { DocumentaiUiv1beta3ProjectsLocationsListQueryParams };
var DocumentaiUiv1beta3ProjectsLocationsListSecurity = /** @class */ (function (_super) {
    __extends(DocumentaiUiv1beta3ProjectsLocationsListSecurity, _super);
    function DocumentaiUiv1beta3ProjectsLocationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DocumentaiUiv1beta3ProjectsLocationsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DocumentaiUiv1beta3ProjectsLocationsListSecurity.prototype, "oauth2c", void 0);
    return DocumentaiUiv1beta3ProjectsLocationsListSecurity;
}(SpeakeasyBase));
export { DocumentaiUiv1beta3ProjectsLocationsListSecurity };
var DocumentaiUiv1beta3ProjectsLocationsListRequest = /** @class */ (function (_super) {
    __extends(DocumentaiUiv1beta3ProjectsLocationsListRequest, _super);
    function DocumentaiUiv1beta3ProjectsLocationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiUiv1beta3ProjectsLocationsListPathParams)
    ], DocumentaiUiv1beta3ProjectsLocationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiUiv1beta3ProjectsLocationsListQueryParams)
    ], DocumentaiUiv1beta3ProjectsLocationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiUiv1beta3ProjectsLocationsListSecurity)
    ], DocumentaiUiv1beta3ProjectsLocationsListRequest.prototype, "security", void 0);
    return DocumentaiUiv1beta3ProjectsLocationsListRequest;
}(SpeakeasyBase));
export { DocumentaiUiv1beta3ProjectsLocationsListRequest };
var DocumentaiUiv1beta3ProjectsLocationsListResponse = /** @class */ (function (_super) {
    __extends(DocumentaiUiv1beta3ProjectsLocationsListResponse, _super);
    function DocumentaiUiv1beta3ProjectsLocationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DocumentaiUiv1beta3ProjectsLocationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudLocationListLocationsResponse)
    ], DocumentaiUiv1beta3ProjectsLocationsListResponse.prototype, "googleCloudLocationListLocationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DocumentaiUiv1beta3ProjectsLocationsListResponse.prototype, "statusCode", void 0);
    return DocumentaiUiv1beta3ProjectsLocationsListResponse;
}(SpeakeasyBase));
export { DocumentaiUiv1beta3ProjectsLocationsListResponse };
