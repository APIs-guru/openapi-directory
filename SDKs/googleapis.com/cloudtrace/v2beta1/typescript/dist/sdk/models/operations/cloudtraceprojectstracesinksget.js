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
var CloudtraceProjectsTraceSinksGetPathParams = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTraceSinksGetPathParams, _super);
    function CloudtraceProjectsTraceSinksGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksGetPathParams.prototype, "name", void 0);
    return CloudtraceProjectsTraceSinksGetPathParams;
}(SpeakeasyBase));
export { CloudtraceProjectsTraceSinksGetPathParams };
var CloudtraceProjectsTraceSinksGetQueryParams = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTraceSinksGetQueryParams, _super);
    function CloudtraceProjectsTraceSinksGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudtraceProjectsTraceSinksGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksGetQueryParams.prototype, "uploadProtocol", void 0);
    return CloudtraceProjectsTraceSinksGetQueryParams;
}(SpeakeasyBase));
export { CloudtraceProjectsTraceSinksGetQueryParams };
var CloudtraceProjectsTraceSinksGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTraceSinksGetSecurityOption1, _super);
    function CloudtraceProjectsTraceSinksGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudtraceProjectsTraceSinksGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudtraceProjectsTraceSinksGetSecurityOption1.prototype, "oauth2c", void 0);
    return CloudtraceProjectsTraceSinksGetSecurityOption1;
}(SpeakeasyBase));
export { CloudtraceProjectsTraceSinksGetSecurityOption1 };
var CloudtraceProjectsTraceSinksGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTraceSinksGetSecurityOption2, _super);
    function CloudtraceProjectsTraceSinksGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudtraceProjectsTraceSinksGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudtraceProjectsTraceSinksGetSecurityOption2.prototype, "oauth2c", void 0);
    return CloudtraceProjectsTraceSinksGetSecurityOption2;
}(SpeakeasyBase));
export { CloudtraceProjectsTraceSinksGetSecurityOption2 };
var CloudtraceProjectsTraceSinksGetSecurity = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTraceSinksGetSecurity, _super);
    function CloudtraceProjectsTraceSinksGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudtraceProjectsTraceSinksGetSecurityOption1)
    ], CloudtraceProjectsTraceSinksGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudtraceProjectsTraceSinksGetSecurityOption2)
    ], CloudtraceProjectsTraceSinksGetSecurity.prototype, "option2", void 0);
    return CloudtraceProjectsTraceSinksGetSecurity;
}(SpeakeasyBase));
export { CloudtraceProjectsTraceSinksGetSecurity };
var CloudtraceProjectsTraceSinksGetRequest = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTraceSinksGetRequest, _super);
    function CloudtraceProjectsTraceSinksGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudtraceProjectsTraceSinksGetPathParams)
    ], CloudtraceProjectsTraceSinksGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudtraceProjectsTraceSinksGetQueryParams)
    ], CloudtraceProjectsTraceSinksGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudtraceProjectsTraceSinksGetSecurity)
    ], CloudtraceProjectsTraceSinksGetRequest.prototype, "security", void 0);
    return CloudtraceProjectsTraceSinksGetRequest;
}(SpeakeasyBase));
export { CloudtraceProjectsTraceSinksGetRequest };
var CloudtraceProjectsTraceSinksGetResponse = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTraceSinksGetResponse, _super);
    function CloudtraceProjectsTraceSinksGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudtraceProjectsTraceSinksGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudtraceProjectsTraceSinksGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TraceSink)
    ], CloudtraceProjectsTraceSinksGetResponse.prototype, "traceSink", void 0);
    return CloudtraceProjectsTraceSinksGetResponse;
}(SpeakeasyBase));
export { CloudtraceProjectsTraceSinksGetResponse };
