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
var CloudtraceProjectsTraceSinksDeletePathParams = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTraceSinksDeletePathParams, _super);
    function CloudtraceProjectsTraceSinksDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksDeletePathParams.prototype, "name", void 0);
    return CloudtraceProjectsTraceSinksDeletePathParams;
}(SpeakeasyBase));
export { CloudtraceProjectsTraceSinksDeletePathParams };
var CloudtraceProjectsTraceSinksDeleteQueryParams = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTraceSinksDeleteQueryParams, _super);
    function CloudtraceProjectsTraceSinksDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudtraceProjectsTraceSinksDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return CloudtraceProjectsTraceSinksDeleteQueryParams;
}(SpeakeasyBase));
export { CloudtraceProjectsTraceSinksDeleteQueryParams };
var CloudtraceProjectsTraceSinksDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTraceSinksDeleteSecurityOption1, _super);
    function CloudtraceProjectsTraceSinksDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudtraceProjectsTraceSinksDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudtraceProjectsTraceSinksDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return CloudtraceProjectsTraceSinksDeleteSecurityOption1;
}(SpeakeasyBase));
export { CloudtraceProjectsTraceSinksDeleteSecurityOption1 };
var CloudtraceProjectsTraceSinksDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTraceSinksDeleteSecurityOption2, _super);
    function CloudtraceProjectsTraceSinksDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudtraceProjectsTraceSinksDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudtraceProjectsTraceSinksDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return CloudtraceProjectsTraceSinksDeleteSecurityOption2;
}(SpeakeasyBase));
export { CloudtraceProjectsTraceSinksDeleteSecurityOption2 };
var CloudtraceProjectsTraceSinksDeleteSecurity = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTraceSinksDeleteSecurity, _super);
    function CloudtraceProjectsTraceSinksDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudtraceProjectsTraceSinksDeleteSecurityOption1)
    ], CloudtraceProjectsTraceSinksDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudtraceProjectsTraceSinksDeleteSecurityOption2)
    ], CloudtraceProjectsTraceSinksDeleteSecurity.prototype, "option2", void 0);
    return CloudtraceProjectsTraceSinksDeleteSecurity;
}(SpeakeasyBase));
export { CloudtraceProjectsTraceSinksDeleteSecurity };
var CloudtraceProjectsTraceSinksDeleteRequest = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTraceSinksDeleteRequest, _super);
    function CloudtraceProjectsTraceSinksDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudtraceProjectsTraceSinksDeletePathParams)
    ], CloudtraceProjectsTraceSinksDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudtraceProjectsTraceSinksDeleteQueryParams)
    ], CloudtraceProjectsTraceSinksDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudtraceProjectsTraceSinksDeleteSecurity)
    ], CloudtraceProjectsTraceSinksDeleteRequest.prototype, "security", void 0);
    return CloudtraceProjectsTraceSinksDeleteRequest;
}(SpeakeasyBase));
export { CloudtraceProjectsTraceSinksDeleteRequest };
var CloudtraceProjectsTraceSinksDeleteResponse = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTraceSinksDeleteResponse, _super);
    function CloudtraceProjectsTraceSinksDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CloudtraceProjectsTraceSinksDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudtraceProjectsTraceSinksDeleteResponse.prototype, "statusCode", void 0);
    return CloudtraceProjectsTraceSinksDeleteResponse;
}(SpeakeasyBase));
export { CloudtraceProjectsTraceSinksDeleteResponse };
