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
var MetastoreProjectsLocationsFederationsListPathParams = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsFederationsListPathParams, _super);
    function MetastoreProjectsLocationsFederationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsFederationsListPathParams.prototype, "parent", void 0);
    return MetastoreProjectsLocationsFederationsListPathParams;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsFederationsListPathParams };
var MetastoreProjectsLocationsFederationsListQueryParams = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsFederationsListQueryParams, _super);
    function MetastoreProjectsLocationsFederationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsFederationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsFederationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsFederationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsFederationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsFederationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsFederationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsFederationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsFederationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsFederationsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], MetastoreProjectsLocationsFederationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsFederationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MetastoreProjectsLocationsFederationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsFederationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsFederationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsFederationsListQueryParams.prototype, "uploadProtocol", void 0);
    return MetastoreProjectsLocationsFederationsListQueryParams;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsFederationsListQueryParams };
var MetastoreProjectsLocationsFederationsListSecurity = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsFederationsListSecurity, _super);
    function MetastoreProjectsLocationsFederationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MetastoreProjectsLocationsFederationsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MetastoreProjectsLocationsFederationsListSecurity.prototype, "oauth2c", void 0);
    return MetastoreProjectsLocationsFederationsListSecurity;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsFederationsListSecurity };
var MetastoreProjectsLocationsFederationsListRequest = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsFederationsListRequest, _super);
    function MetastoreProjectsLocationsFederationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MetastoreProjectsLocationsFederationsListPathParams)
    ], MetastoreProjectsLocationsFederationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MetastoreProjectsLocationsFederationsListQueryParams)
    ], MetastoreProjectsLocationsFederationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MetastoreProjectsLocationsFederationsListSecurity)
    ], MetastoreProjectsLocationsFederationsListRequest.prototype, "security", void 0);
    return MetastoreProjectsLocationsFederationsListRequest;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsFederationsListRequest };
var MetastoreProjectsLocationsFederationsListResponse = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsFederationsListResponse, _super);
    function MetastoreProjectsLocationsFederationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsFederationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListFederationsResponse)
    ], MetastoreProjectsLocationsFederationsListResponse.prototype, "listFederationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MetastoreProjectsLocationsFederationsListResponse.prototype, "statusCode", void 0);
    return MetastoreProjectsLocationsFederationsListResponse;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsFederationsListResponse };
