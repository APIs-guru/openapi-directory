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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var CloudkmsProjectsLocationsKeyRingsListPathParams = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsListPathParams, _super);
    function CloudkmsProjectsLocationsKeyRingsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsListPathParams.prototype, "parent", void 0);
    return CloudkmsProjectsLocationsKeyRingsListPathParams;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsListPathParams };
var CloudkmsProjectsLocationsKeyRingsListQueryParams = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsListQueryParams, _super);
    function CloudkmsProjectsLocationsKeyRingsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudkmsProjectsLocationsKeyRingsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudkmsProjectsLocationsKeyRingsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudkmsProjectsLocationsKeyRingsListQueryParams;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsListQueryParams };
var CloudkmsProjectsLocationsKeyRingsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsListSecurityOption1, _super);
    function CloudkmsProjectsLocationsKeyRingsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudkmsProjectsLocationsKeyRingsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudkmsProjectsLocationsKeyRingsListSecurityOption1.prototype, "oauth2c", void 0);
    return CloudkmsProjectsLocationsKeyRingsListSecurityOption1;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsListSecurityOption1 };
var CloudkmsProjectsLocationsKeyRingsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsListSecurityOption2, _super);
    function CloudkmsProjectsLocationsKeyRingsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudkmsProjectsLocationsKeyRingsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudkmsProjectsLocationsKeyRingsListSecurityOption2.prototype, "oauth2c", void 0);
    return CloudkmsProjectsLocationsKeyRingsListSecurityOption2;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsListSecurityOption2 };
var CloudkmsProjectsLocationsKeyRingsListSecurity = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsListSecurity, _super);
    function CloudkmsProjectsLocationsKeyRingsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsListSecurityOption1)
    ], CloudkmsProjectsLocationsKeyRingsListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsListSecurityOption2)
    ], CloudkmsProjectsLocationsKeyRingsListSecurity.prototype, "option2", void 0);
    return CloudkmsProjectsLocationsKeyRingsListSecurity;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsListSecurity };
var CloudkmsProjectsLocationsKeyRingsListRequest = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsListRequest, _super);
    function CloudkmsProjectsLocationsKeyRingsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsListPathParams)
    ], CloudkmsProjectsLocationsKeyRingsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsListQueryParams)
    ], CloudkmsProjectsLocationsKeyRingsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsListSecurity)
    ], CloudkmsProjectsLocationsKeyRingsListRequest.prototype, "security", void 0);
    return CloudkmsProjectsLocationsKeyRingsListRequest;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsListRequest };
var CloudkmsProjectsLocationsKeyRingsListResponse = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsListResponse, _super);
    function CloudkmsProjectsLocationsKeyRingsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListKeyRingsResponse)
    ], CloudkmsProjectsLocationsKeyRingsListResponse.prototype, "listKeyRingsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudkmsProjectsLocationsKeyRingsListResponse.prototype, "statusCode", void 0);
    return CloudkmsProjectsLocationsKeyRingsListResponse;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsListResponse };
