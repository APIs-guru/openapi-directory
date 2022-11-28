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
var OrgpolicyProjectsConstraintsListPathParams = /** @class */ (function (_super) {
    __extends(OrgpolicyProjectsConstraintsListPathParams, _super);
    function OrgpolicyProjectsConstraintsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsConstraintsListPathParams.prototype, "parent", void 0);
    return OrgpolicyProjectsConstraintsListPathParams;
}(SpeakeasyBase));
export { OrgpolicyProjectsConstraintsListPathParams };
var OrgpolicyProjectsConstraintsListQueryParams = /** @class */ (function (_super) {
    __extends(OrgpolicyProjectsConstraintsListQueryParams, _super);
    function OrgpolicyProjectsConstraintsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsConstraintsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsConstraintsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsConstraintsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsConstraintsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsConstraintsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsConstraintsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsConstraintsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], OrgpolicyProjectsConstraintsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsConstraintsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], OrgpolicyProjectsConstraintsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsConstraintsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsConstraintsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsConstraintsListQueryParams.prototype, "uploadProtocol", void 0);
    return OrgpolicyProjectsConstraintsListQueryParams;
}(SpeakeasyBase));
export { OrgpolicyProjectsConstraintsListQueryParams };
var OrgpolicyProjectsConstraintsListSecurity = /** @class */ (function (_super) {
    __extends(OrgpolicyProjectsConstraintsListSecurity, _super);
    function OrgpolicyProjectsConstraintsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OrgpolicyProjectsConstraintsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OrgpolicyProjectsConstraintsListSecurity.prototype, "oauth2c", void 0);
    return OrgpolicyProjectsConstraintsListSecurity;
}(SpeakeasyBase));
export { OrgpolicyProjectsConstraintsListSecurity };
var OrgpolicyProjectsConstraintsListRequest = /** @class */ (function (_super) {
    __extends(OrgpolicyProjectsConstraintsListRequest, _super);
    function OrgpolicyProjectsConstraintsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrgpolicyProjectsConstraintsListPathParams)
    ], OrgpolicyProjectsConstraintsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrgpolicyProjectsConstraintsListQueryParams)
    ], OrgpolicyProjectsConstraintsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrgpolicyProjectsConstraintsListSecurity)
    ], OrgpolicyProjectsConstraintsListRequest.prototype, "security", void 0);
    return OrgpolicyProjectsConstraintsListRequest;
}(SpeakeasyBase));
export { OrgpolicyProjectsConstraintsListRequest };
var OrgpolicyProjectsConstraintsListResponse = /** @class */ (function (_super) {
    __extends(OrgpolicyProjectsConstraintsListResponse, _super);
    function OrgpolicyProjectsConstraintsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OrgpolicyProjectsConstraintsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudOrgpolicyV2ListConstraintsResponse)
    ], OrgpolicyProjectsConstraintsListResponse.prototype, "googleCloudOrgpolicyV2ListConstraintsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OrgpolicyProjectsConstraintsListResponse.prototype, "statusCode", void 0);
    return OrgpolicyProjectsConstraintsListResponse;
}(SpeakeasyBase));
export { OrgpolicyProjectsConstraintsListResponse };
