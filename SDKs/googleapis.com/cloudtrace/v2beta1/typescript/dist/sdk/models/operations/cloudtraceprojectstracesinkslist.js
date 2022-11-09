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
var CloudtraceProjectsTraceSinksListPathParams = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTraceSinksListPathParams, _super);
    function CloudtraceProjectsTraceSinksListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksListPathParams.prototype, "parent", void 0);
    return CloudtraceProjectsTraceSinksListPathParams;
}(SpeakeasyBase));
export { CloudtraceProjectsTraceSinksListPathParams };
var CloudtraceProjectsTraceSinksListQueryParams = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTraceSinksListQueryParams, _super);
    function CloudtraceProjectsTraceSinksListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudtraceProjectsTraceSinksListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudtraceProjectsTraceSinksListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudtraceProjectsTraceSinksListQueryParams;
}(SpeakeasyBase));
export { CloudtraceProjectsTraceSinksListQueryParams };
var CloudtraceProjectsTraceSinksListSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTraceSinksListSecurityOption1, _super);
    function CloudtraceProjectsTraceSinksListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudtraceProjectsTraceSinksListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudtraceProjectsTraceSinksListSecurityOption1.prototype, "oauth2c", void 0);
    return CloudtraceProjectsTraceSinksListSecurityOption1;
}(SpeakeasyBase));
export { CloudtraceProjectsTraceSinksListSecurityOption1 };
var CloudtraceProjectsTraceSinksListSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTraceSinksListSecurityOption2, _super);
    function CloudtraceProjectsTraceSinksListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudtraceProjectsTraceSinksListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudtraceProjectsTraceSinksListSecurityOption2.prototype, "oauth2c", void 0);
    return CloudtraceProjectsTraceSinksListSecurityOption2;
}(SpeakeasyBase));
export { CloudtraceProjectsTraceSinksListSecurityOption2 };
var CloudtraceProjectsTraceSinksListSecurity = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTraceSinksListSecurity, _super);
    function CloudtraceProjectsTraceSinksListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudtraceProjectsTraceSinksListSecurityOption1)
    ], CloudtraceProjectsTraceSinksListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudtraceProjectsTraceSinksListSecurityOption2)
    ], CloudtraceProjectsTraceSinksListSecurity.prototype, "option2", void 0);
    return CloudtraceProjectsTraceSinksListSecurity;
}(SpeakeasyBase));
export { CloudtraceProjectsTraceSinksListSecurity };
var CloudtraceProjectsTraceSinksListRequest = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTraceSinksListRequest, _super);
    function CloudtraceProjectsTraceSinksListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudtraceProjectsTraceSinksListPathParams)
    ], CloudtraceProjectsTraceSinksListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudtraceProjectsTraceSinksListQueryParams)
    ], CloudtraceProjectsTraceSinksListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudtraceProjectsTraceSinksListSecurity)
    ], CloudtraceProjectsTraceSinksListRequest.prototype, "security", void 0);
    return CloudtraceProjectsTraceSinksListRequest;
}(SpeakeasyBase));
export { CloudtraceProjectsTraceSinksListRequest };
var CloudtraceProjectsTraceSinksListResponse = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTraceSinksListResponse, _super);
    function CloudtraceProjectsTraceSinksListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListTraceSinksResponse)
    ], CloudtraceProjectsTraceSinksListResponse.prototype, "listTraceSinksResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudtraceProjectsTraceSinksListResponse.prototype, "statusCode", void 0);
    return CloudtraceProjectsTraceSinksListResponse;
}(SpeakeasyBase));
export { CloudtraceProjectsTraceSinksListResponse };
