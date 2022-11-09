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
var PubsubProjectsTopicsListPathParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsListPathParams, _super);
    function PubsubProjectsTopicsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsListPathParams.prototype, "project", void 0);
    return PubsubProjectsTopicsListPathParams;
}(SpeakeasyBase));
export { PubsubProjectsTopicsListPathParams };
var PubsubProjectsTopicsListQueryParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsListQueryParams, _super);
    function PubsubProjectsTopicsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], PubsubProjectsTopicsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubProjectsTopicsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsListQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubProjectsTopicsListQueryParams;
}(SpeakeasyBase));
export { PubsubProjectsTopicsListQueryParams };
var PubsubProjectsTopicsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsListSecurityOption1, _super);
    function PubsubProjectsTopicsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsTopicsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsTopicsListSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubProjectsTopicsListSecurityOption1;
}(SpeakeasyBase));
export { PubsubProjectsTopicsListSecurityOption1 };
var PubsubProjectsTopicsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsListSecurityOption2, _super);
    function PubsubProjectsTopicsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsTopicsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsTopicsListSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubProjectsTopicsListSecurityOption2;
}(SpeakeasyBase));
export { PubsubProjectsTopicsListSecurityOption2 };
var PubsubProjectsTopicsListSecurity = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsListSecurity, _super);
    function PubsubProjectsTopicsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsTopicsListSecurityOption1)
    ], PubsubProjectsTopicsListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsTopicsListSecurityOption2)
    ], PubsubProjectsTopicsListSecurity.prototype, "option2", void 0);
    return PubsubProjectsTopicsListSecurity;
}(SpeakeasyBase));
export { PubsubProjectsTopicsListSecurity };
var PubsubProjectsTopicsListRequest = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsListRequest, _super);
    function PubsubProjectsTopicsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubProjectsTopicsListPathParams)
    ], PubsubProjectsTopicsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubProjectsTopicsListQueryParams)
    ], PubsubProjectsTopicsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubProjectsTopicsListSecurity)
    ], PubsubProjectsTopicsListRequest.prototype, "security", void 0);
    return PubsubProjectsTopicsListRequest;
}(SpeakeasyBase));
export { PubsubProjectsTopicsListRequest };
var PubsubProjectsTopicsListResponse = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsListResponse, _super);
    function PubsubProjectsTopicsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListTopicsResponse)
    ], PubsubProjectsTopicsListResponse.prototype, "listTopicsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PubsubProjectsTopicsListResponse.prototype, "statusCode", void 0);
    return PubsubProjectsTopicsListResponse;
}(SpeakeasyBase));
export { PubsubProjectsTopicsListResponse };
