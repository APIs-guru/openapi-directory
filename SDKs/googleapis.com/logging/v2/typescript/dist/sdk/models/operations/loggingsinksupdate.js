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
var LoggingSinksUpdatePathParams = /** @class */ (function (_super) {
    __extends(LoggingSinksUpdatePathParams, _super);
    function LoggingSinksUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sinkName" }),
        __metadata("design:type", String)
    ], LoggingSinksUpdatePathParams.prototype, "sinkName", void 0);
    return LoggingSinksUpdatePathParams;
}(SpeakeasyBase));
export { LoggingSinksUpdatePathParams };
var LoggingSinksUpdateQueryParams = /** @class */ (function (_super) {
    __extends(LoggingSinksUpdateQueryParams, _super);
    function LoggingSinksUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingSinksUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingSinksUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingSinksUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingSinksUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingSinksUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingSinksUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingSinksUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingSinksUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingSinksUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uniqueWriterIdentity" }),
        __metadata("design:type", Boolean)
    ], LoggingSinksUpdateQueryParams.prototype, "uniqueWriterIdentity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], LoggingSinksUpdateQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingSinksUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingSinksUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return LoggingSinksUpdateQueryParams;
}(SpeakeasyBase));
export { LoggingSinksUpdateQueryParams };
var LoggingSinksUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingSinksUpdateSecurityOption1, _super);
    function LoggingSinksUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingSinksUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingSinksUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingSinksUpdateSecurityOption1;
}(SpeakeasyBase));
export { LoggingSinksUpdateSecurityOption1 };
var LoggingSinksUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingSinksUpdateSecurityOption2, _super);
    function LoggingSinksUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingSinksUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingSinksUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingSinksUpdateSecurityOption2;
}(SpeakeasyBase));
export { LoggingSinksUpdateSecurityOption2 };
var LoggingSinksUpdateSecurity = /** @class */ (function (_super) {
    __extends(LoggingSinksUpdateSecurity, _super);
    function LoggingSinksUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingSinksUpdateSecurityOption1)
    ], LoggingSinksUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingSinksUpdateSecurityOption2)
    ], LoggingSinksUpdateSecurity.prototype, "option2", void 0);
    return LoggingSinksUpdateSecurity;
}(SpeakeasyBase));
export { LoggingSinksUpdateSecurity };
var LoggingSinksUpdateRequest = /** @class */ (function (_super) {
    __extends(LoggingSinksUpdateRequest, _super);
    function LoggingSinksUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingSinksUpdatePathParams)
    ], LoggingSinksUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingSinksUpdateQueryParams)
    ], LoggingSinksUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LogSinkInput)
    ], LoggingSinksUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingSinksUpdateSecurity)
    ], LoggingSinksUpdateRequest.prototype, "security", void 0);
    return LoggingSinksUpdateRequest;
}(SpeakeasyBase));
export { LoggingSinksUpdateRequest };
var LoggingSinksUpdateResponse = /** @class */ (function (_super) {
    __extends(LoggingSinksUpdateResponse, _super);
    function LoggingSinksUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LoggingSinksUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LogSink)
    ], LoggingSinksUpdateResponse.prototype, "logSink", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LoggingSinksUpdateResponse.prototype, "statusCode", void 0);
    return LoggingSinksUpdateResponse;
}(SpeakeasyBase));
export { LoggingSinksUpdateResponse };
