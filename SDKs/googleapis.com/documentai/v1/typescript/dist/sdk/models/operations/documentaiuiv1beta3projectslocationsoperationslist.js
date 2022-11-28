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
var DocumentaiUiv1beta3ProjectsLocationsOperationsListPathParams = /** @class */ (function (_super) {
    __extends(DocumentaiUiv1beta3ProjectsLocationsOperationsListPathParams, _super);
    function DocumentaiUiv1beta3ProjectsLocationsOperationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DocumentaiUiv1beta3ProjectsLocationsOperationsListPathParams.prototype, "name", void 0);
    return DocumentaiUiv1beta3ProjectsLocationsOperationsListPathParams;
}(SpeakeasyBase));
export { DocumentaiUiv1beta3ProjectsLocationsOperationsListPathParams };
var DocumentaiUiv1beta3ProjectsLocationsOperationsListQueryParams = /** @class */ (function (_super) {
    __extends(DocumentaiUiv1beta3ProjectsLocationsOperationsListQueryParams, _super);
    function DocumentaiUiv1beta3ProjectsLocationsOperationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DocumentaiUiv1beta3ProjectsLocationsOperationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DocumentaiUiv1beta3ProjectsLocationsOperationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DocumentaiUiv1beta3ProjectsLocationsOperationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DocumentaiUiv1beta3ProjectsLocationsOperationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DocumentaiUiv1beta3ProjectsLocationsOperationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DocumentaiUiv1beta3ProjectsLocationsOperationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DocumentaiUiv1beta3ProjectsLocationsOperationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DocumentaiUiv1beta3ProjectsLocationsOperationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DocumentaiUiv1beta3ProjectsLocationsOperationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DocumentaiUiv1beta3ProjectsLocationsOperationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DocumentaiUiv1beta3ProjectsLocationsOperationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DocumentaiUiv1beta3ProjectsLocationsOperationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DocumentaiUiv1beta3ProjectsLocationsOperationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DocumentaiUiv1beta3ProjectsLocationsOperationsListQueryParams.prototype, "uploadProtocol", void 0);
    return DocumentaiUiv1beta3ProjectsLocationsOperationsListQueryParams;
}(SpeakeasyBase));
export { DocumentaiUiv1beta3ProjectsLocationsOperationsListQueryParams };
var DocumentaiUiv1beta3ProjectsLocationsOperationsListSecurity = /** @class */ (function (_super) {
    __extends(DocumentaiUiv1beta3ProjectsLocationsOperationsListSecurity, _super);
    function DocumentaiUiv1beta3ProjectsLocationsOperationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DocumentaiUiv1beta3ProjectsLocationsOperationsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DocumentaiUiv1beta3ProjectsLocationsOperationsListSecurity.prototype, "oauth2c", void 0);
    return DocumentaiUiv1beta3ProjectsLocationsOperationsListSecurity;
}(SpeakeasyBase));
export { DocumentaiUiv1beta3ProjectsLocationsOperationsListSecurity };
var DocumentaiUiv1beta3ProjectsLocationsOperationsListRequest = /** @class */ (function (_super) {
    __extends(DocumentaiUiv1beta3ProjectsLocationsOperationsListRequest, _super);
    function DocumentaiUiv1beta3ProjectsLocationsOperationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiUiv1beta3ProjectsLocationsOperationsListPathParams)
    ], DocumentaiUiv1beta3ProjectsLocationsOperationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiUiv1beta3ProjectsLocationsOperationsListQueryParams)
    ], DocumentaiUiv1beta3ProjectsLocationsOperationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiUiv1beta3ProjectsLocationsOperationsListSecurity)
    ], DocumentaiUiv1beta3ProjectsLocationsOperationsListRequest.prototype, "security", void 0);
    return DocumentaiUiv1beta3ProjectsLocationsOperationsListRequest;
}(SpeakeasyBase));
export { DocumentaiUiv1beta3ProjectsLocationsOperationsListRequest };
var DocumentaiUiv1beta3ProjectsLocationsOperationsListResponse = /** @class */ (function (_super) {
    __extends(DocumentaiUiv1beta3ProjectsLocationsOperationsListResponse, _super);
    function DocumentaiUiv1beta3ProjectsLocationsOperationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DocumentaiUiv1beta3ProjectsLocationsOperationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningListOperationsResponse)
    ], DocumentaiUiv1beta3ProjectsLocationsOperationsListResponse.prototype, "googleLongrunningListOperationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DocumentaiUiv1beta3ProjectsLocationsOperationsListResponse.prototype, "statusCode", void 0);
    return DocumentaiUiv1beta3ProjectsLocationsOperationsListResponse;
}(SpeakeasyBase));
export { DocumentaiUiv1beta3ProjectsLocationsOperationsListResponse };
