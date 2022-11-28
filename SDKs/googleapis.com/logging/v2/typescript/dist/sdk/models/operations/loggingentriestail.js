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
var LoggingEntriesTailQueryParams = /** @class */ (function (_super) {
    __extends(LoggingEntriesTailQueryParams, _super);
    function LoggingEntriesTailQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingEntriesTailQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingEntriesTailQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingEntriesTailQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingEntriesTailQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingEntriesTailQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingEntriesTailQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingEntriesTailQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingEntriesTailQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingEntriesTailQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingEntriesTailQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingEntriesTailQueryParams.prototype, "uploadProtocol", void 0);
    return LoggingEntriesTailQueryParams;
}(SpeakeasyBase));
export { LoggingEntriesTailQueryParams };
var LoggingEntriesTailSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingEntriesTailSecurityOption1, _super);
    function LoggingEntriesTailSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingEntriesTailSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingEntriesTailSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingEntriesTailSecurityOption1;
}(SpeakeasyBase));
export { LoggingEntriesTailSecurityOption1 };
var LoggingEntriesTailSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingEntriesTailSecurityOption2, _super);
    function LoggingEntriesTailSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingEntriesTailSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingEntriesTailSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingEntriesTailSecurityOption2;
}(SpeakeasyBase));
export { LoggingEntriesTailSecurityOption2 };
var LoggingEntriesTailSecurityOption3 = /** @class */ (function (_super) {
    __extends(LoggingEntriesTailSecurityOption3, _super);
    function LoggingEntriesTailSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingEntriesTailSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingEntriesTailSecurityOption3.prototype, "oauth2c", void 0);
    return LoggingEntriesTailSecurityOption3;
}(SpeakeasyBase));
export { LoggingEntriesTailSecurityOption3 };
var LoggingEntriesTailSecurityOption4 = /** @class */ (function (_super) {
    __extends(LoggingEntriesTailSecurityOption4, _super);
    function LoggingEntriesTailSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingEntriesTailSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingEntriesTailSecurityOption4.prototype, "oauth2c", void 0);
    return LoggingEntriesTailSecurityOption4;
}(SpeakeasyBase));
export { LoggingEntriesTailSecurityOption4 };
var LoggingEntriesTailSecurity = /** @class */ (function (_super) {
    __extends(LoggingEntriesTailSecurity, _super);
    function LoggingEntriesTailSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingEntriesTailSecurityOption1)
    ], LoggingEntriesTailSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingEntriesTailSecurityOption2)
    ], LoggingEntriesTailSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingEntriesTailSecurityOption3)
    ], LoggingEntriesTailSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingEntriesTailSecurityOption4)
    ], LoggingEntriesTailSecurity.prototype, "option4", void 0);
    return LoggingEntriesTailSecurity;
}(SpeakeasyBase));
export { LoggingEntriesTailSecurity };
var LoggingEntriesTailRequest = /** @class */ (function (_super) {
    __extends(LoggingEntriesTailRequest, _super);
    function LoggingEntriesTailRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingEntriesTailQueryParams)
    ], LoggingEntriesTailRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TailLogEntriesRequest)
    ], LoggingEntriesTailRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingEntriesTailSecurity)
    ], LoggingEntriesTailRequest.prototype, "security", void 0);
    return LoggingEntriesTailRequest;
}(SpeakeasyBase));
export { LoggingEntriesTailRequest };
var LoggingEntriesTailResponse = /** @class */ (function (_super) {
    __extends(LoggingEntriesTailResponse, _super);
    function LoggingEntriesTailResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LoggingEntriesTailResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LoggingEntriesTailResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TailLogEntriesResponse)
    ], LoggingEntriesTailResponse.prototype, "tailLogEntriesResponse", void 0);
    return LoggingEntriesTailResponse;
}(SpeakeasyBase));
export { LoggingEntriesTailResponse };
