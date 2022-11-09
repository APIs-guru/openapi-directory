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
var CloudresourcemanagerLiensDeletePathParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerLiensDeletePathParams, _super);
    function CloudresourcemanagerLiensDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerLiensDeletePathParams.prototype, "name", void 0);
    return CloudresourcemanagerLiensDeletePathParams;
}(SpeakeasyBase));
export { CloudresourcemanagerLiensDeletePathParams };
var CloudresourcemanagerLiensDeleteQueryParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerLiensDeleteQueryParams, _super);
    function CloudresourcemanagerLiensDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerLiensDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerLiensDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerLiensDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerLiensDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerLiensDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerLiensDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerLiensDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerLiensDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerLiensDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerLiensDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerLiensDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return CloudresourcemanagerLiensDeleteQueryParams;
}(SpeakeasyBase));
export { CloudresourcemanagerLiensDeleteQueryParams };
var CloudresourcemanagerLiensDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerLiensDeleteSecurityOption1, _super);
    function CloudresourcemanagerLiensDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerLiensDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerLiensDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return CloudresourcemanagerLiensDeleteSecurityOption1;
}(SpeakeasyBase));
export { CloudresourcemanagerLiensDeleteSecurityOption1 };
var CloudresourcemanagerLiensDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerLiensDeleteSecurityOption2, _super);
    function CloudresourcemanagerLiensDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerLiensDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerLiensDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return CloudresourcemanagerLiensDeleteSecurityOption2;
}(SpeakeasyBase));
export { CloudresourcemanagerLiensDeleteSecurityOption2 };
var CloudresourcemanagerLiensDeleteSecurity = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerLiensDeleteSecurity, _super);
    function CloudresourcemanagerLiensDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerLiensDeleteSecurityOption1)
    ], CloudresourcemanagerLiensDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerLiensDeleteSecurityOption2)
    ], CloudresourcemanagerLiensDeleteSecurity.prototype, "option2", void 0);
    return CloudresourcemanagerLiensDeleteSecurity;
}(SpeakeasyBase));
export { CloudresourcemanagerLiensDeleteSecurity };
var CloudresourcemanagerLiensDeleteRequest = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerLiensDeleteRequest, _super);
    function CloudresourcemanagerLiensDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerLiensDeletePathParams)
    ], CloudresourcemanagerLiensDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerLiensDeleteQueryParams)
    ], CloudresourcemanagerLiensDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerLiensDeleteSecurity)
    ], CloudresourcemanagerLiensDeleteRequest.prototype, "security", void 0);
    return CloudresourcemanagerLiensDeleteRequest;
}(SpeakeasyBase));
export { CloudresourcemanagerLiensDeleteRequest };
var CloudresourcemanagerLiensDeleteResponse = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerLiensDeleteResponse, _super);
    function CloudresourcemanagerLiensDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudresourcemanagerLiensDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], CloudresourcemanagerLiensDeleteResponse.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudresourcemanagerLiensDeleteResponse.prototype, "statusCode", void 0);
    return CloudresourcemanagerLiensDeleteResponse;
}(SpeakeasyBase));
export { CloudresourcemanagerLiensDeleteResponse };
