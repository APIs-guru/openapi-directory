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
var SecuritycenterProjectsSourcesFindingsListPathParams = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsSourcesFindingsListPathParams, _super);
    function SecuritycenterProjectsSourcesFindingsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsListPathParams.prototype, "parent", void 0);
    return SecuritycenterProjectsSourcesFindingsListPathParams;
}(SpeakeasyBase));
export { SecuritycenterProjectsSourcesFindingsListPathParams };
var SecuritycenterProjectsSourcesFindingsListQueryParams = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsSourcesFindingsListQueryParams, _super);
    function SecuritycenterProjectsSourcesFindingsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=compareDuration" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsListQueryParams.prototype, "compareDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fieldMask" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsListQueryParams.prototype, "fieldMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], SecuritycenterProjectsSourcesFindingsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SecuritycenterProjectsSourcesFindingsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=readTime" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsListQueryParams.prototype, "readTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsListQueryParams.prototype, "uploadProtocol", void 0);
    return SecuritycenterProjectsSourcesFindingsListQueryParams;
}(SpeakeasyBase));
export { SecuritycenterProjectsSourcesFindingsListQueryParams };
var SecuritycenterProjectsSourcesFindingsListSecurity = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsSourcesFindingsListSecurity, _super);
    function SecuritycenterProjectsSourcesFindingsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SecuritycenterProjectsSourcesFindingsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SecuritycenterProjectsSourcesFindingsListSecurity.prototype, "oauth2c", void 0);
    return SecuritycenterProjectsSourcesFindingsListSecurity;
}(SpeakeasyBase));
export { SecuritycenterProjectsSourcesFindingsListSecurity };
var SecuritycenterProjectsSourcesFindingsListRequest = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsSourcesFindingsListRequest, _super);
    function SecuritycenterProjectsSourcesFindingsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterProjectsSourcesFindingsListPathParams)
    ], SecuritycenterProjectsSourcesFindingsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterProjectsSourcesFindingsListQueryParams)
    ], SecuritycenterProjectsSourcesFindingsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterProjectsSourcesFindingsListSecurity)
    ], SecuritycenterProjectsSourcesFindingsListRequest.prototype, "security", void 0);
    return SecuritycenterProjectsSourcesFindingsListRequest;
}(SpeakeasyBase));
export { SecuritycenterProjectsSourcesFindingsListRequest };
var SecuritycenterProjectsSourcesFindingsListResponse = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsSourcesFindingsListResponse, _super);
    function SecuritycenterProjectsSourcesFindingsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListFindingsResponse)
    ], SecuritycenterProjectsSourcesFindingsListResponse.prototype, "listFindingsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SecuritycenterProjectsSourcesFindingsListResponse.prototype, "statusCode", void 0);
    return SecuritycenterProjectsSourcesFindingsListResponse;
}(SpeakeasyBase));
export { SecuritycenterProjectsSourcesFindingsListResponse };
