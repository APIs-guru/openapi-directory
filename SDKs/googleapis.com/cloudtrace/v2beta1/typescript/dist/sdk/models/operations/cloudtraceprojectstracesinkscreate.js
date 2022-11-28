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
var CloudtraceProjectsTraceSinksCreatePathParams = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTraceSinksCreatePathParams, _super);
    function CloudtraceProjectsTraceSinksCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksCreatePathParams.prototype, "parent", void 0);
    return CloudtraceProjectsTraceSinksCreatePathParams;
}(SpeakeasyBase));
export { CloudtraceProjectsTraceSinksCreatePathParams };
var CloudtraceProjectsTraceSinksCreateQueryParams = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTraceSinksCreateQueryParams, _super);
    function CloudtraceProjectsTraceSinksCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudtraceProjectsTraceSinksCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksCreateQueryParams.prototype, "uploadProtocol", void 0);
    return CloudtraceProjectsTraceSinksCreateQueryParams;
}(SpeakeasyBase));
export { CloudtraceProjectsTraceSinksCreateQueryParams };
var CloudtraceProjectsTraceSinksCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTraceSinksCreateSecurityOption1, _super);
    function CloudtraceProjectsTraceSinksCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudtraceProjectsTraceSinksCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudtraceProjectsTraceSinksCreateSecurityOption1.prototype, "oauth2c", void 0);
    return CloudtraceProjectsTraceSinksCreateSecurityOption1;
}(SpeakeasyBase));
export { CloudtraceProjectsTraceSinksCreateSecurityOption1 };
var CloudtraceProjectsTraceSinksCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTraceSinksCreateSecurityOption2, _super);
    function CloudtraceProjectsTraceSinksCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudtraceProjectsTraceSinksCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudtraceProjectsTraceSinksCreateSecurityOption2.prototype, "oauth2c", void 0);
    return CloudtraceProjectsTraceSinksCreateSecurityOption2;
}(SpeakeasyBase));
export { CloudtraceProjectsTraceSinksCreateSecurityOption2 };
var CloudtraceProjectsTraceSinksCreateSecurity = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTraceSinksCreateSecurity, _super);
    function CloudtraceProjectsTraceSinksCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudtraceProjectsTraceSinksCreateSecurityOption1)
    ], CloudtraceProjectsTraceSinksCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudtraceProjectsTraceSinksCreateSecurityOption2)
    ], CloudtraceProjectsTraceSinksCreateSecurity.prototype, "option2", void 0);
    return CloudtraceProjectsTraceSinksCreateSecurity;
}(SpeakeasyBase));
export { CloudtraceProjectsTraceSinksCreateSecurity };
var CloudtraceProjectsTraceSinksCreateRequest = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTraceSinksCreateRequest, _super);
    function CloudtraceProjectsTraceSinksCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudtraceProjectsTraceSinksCreatePathParams)
    ], CloudtraceProjectsTraceSinksCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudtraceProjectsTraceSinksCreateQueryParams)
    ], CloudtraceProjectsTraceSinksCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TraceSinkInput)
    ], CloudtraceProjectsTraceSinksCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudtraceProjectsTraceSinksCreateSecurity)
    ], CloudtraceProjectsTraceSinksCreateRequest.prototype, "security", void 0);
    return CloudtraceProjectsTraceSinksCreateRequest;
}(SpeakeasyBase));
export { CloudtraceProjectsTraceSinksCreateRequest };
var CloudtraceProjectsTraceSinksCreateResponse = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTraceSinksCreateResponse, _super);
    function CloudtraceProjectsTraceSinksCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudtraceProjectsTraceSinksCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TraceSink)
    ], CloudtraceProjectsTraceSinksCreateResponse.prototype, "traceSink", void 0);
    return CloudtraceProjectsTraceSinksCreateResponse;
}(SpeakeasyBase));
export { CloudtraceProjectsTraceSinksCreateResponse };
