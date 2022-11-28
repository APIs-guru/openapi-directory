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
var ClouddebuggerControllerDebuggeesRegisterQueryParams = /** @class */ (function (_super) {
    __extends(ClouddebuggerControllerDebuggeesRegisterQueryParams, _super);
    function ClouddebuggerControllerDebuggeesRegisterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesRegisterQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesRegisterQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesRegisterQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesRegisterQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesRegisterQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesRegisterQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesRegisterQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClouddebuggerControllerDebuggeesRegisterQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesRegisterQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesRegisterQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesRegisterQueryParams.prototype, "uploadProtocol", void 0);
    return ClouddebuggerControllerDebuggeesRegisterQueryParams;
}(SpeakeasyBase));
export { ClouddebuggerControllerDebuggeesRegisterQueryParams };
var ClouddebuggerControllerDebuggeesRegisterSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClouddebuggerControllerDebuggeesRegisterSecurityOption1, _super);
    function ClouddebuggerControllerDebuggeesRegisterSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClouddebuggerControllerDebuggeesRegisterSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClouddebuggerControllerDebuggeesRegisterSecurityOption1.prototype, "oauth2c", void 0);
    return ClouddebuggerControllerDebuggeesRegisterSecurityOption1;
}(SpeakeasyBase));
export { ClouddebuggerControllerDebuggeesRegisterSecurityOption1 };
var ClouddebuggerControllerDebuggeesRegisterSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClouddebuggerControllerDebuggeesRegisterSecurityOption2, _super);
    function ClouddebuggerControllerDebuggeesRegisterSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClouddebuggerControllerDebuggeesRegisterSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClouddebuggerControllerDebuggeesRegisterSecurityOption2.prototype, "oauth2c", void 0);
    return ClouddebuggerControllerDebuggeesRegisterSecurityOption2;
}(SpeakeasyBase));
export { ClouddebuggerControllerDebuggeesRegisterSecurityOption2 };
var ClouddebuggerControllerDebuggeesRegisterSecurity = /** @class */ (function (_super) {
    __extends(ClouddebuggerControllerDebuggeesRegisterSecurity, _super);
    function ClouddebuggerControllerDebuggeesRegisterSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClouddebuggerControllerDebuggeesRegisterSecurityOption1)
    ], ClouddebuggerControllerDebuggeesRegisterSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClouddebuggerControllerDebuggeesRegisterSecurityOption2)
    ], ClouddebuggerControllerDebuggeesRegisterSecurity.prototype, "option2", void 0);
    return ClouddebuggerControllerDebuggeesRegisterSecurity;
}(SpeakeasyBase));
export { ClouddebuggerControllerDebuggeesRegisterSecurity };
var ClouddebuggerControllerDebuggeesRegisterRequest = /** @class */ (function (_super) {
    __extends(ClouddebuggerControllerDebuggeesRegisterRequest, _super);
    function ClouddebuggerControllerDebuggeesRegisterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddebuggerControllerDebuggeesRegisterQueryParams)
    ], ClouddebuggerControllerDebuggeesRegisterRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RegisterDebuggeeRequest)
    ], ClouddebuggerControllerDebuggeesRegisterRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddebuggerControllerDebuggeesRegisterSecurity)
    ], ClouddebuggerControllerDebuggeesRegisterRequest.prototype, "security", void 0);
    return ClouddebuggerControllerDebuggeesRegisterRequest;
}(SpeakeasyBase));
export { ClouddebuggerControllerDebuggeesRegisterRequest };
var ClouddebuggerControllerDebuggeesRegisterResponse = /** @class */ (function (_super) {
    __extends(ClouddebuggerControllerDebuggeesRegisterResponse, _super);
    function ClouddebuggerControllerDebuggeesRegisterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesRegisterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RegisterDebuggeeResponse)
    ], ClouddebuggerControllerDebuggeesRegisterResponse.prototype, "registerDebuggeeResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClouddebuggerControllerDebuggeesRegisterResponse.prototype, "statusCode", void 0);
    return ClouddebuggerControllerDebuggeesRegisterResponse;
}(SpeakeasyBase));
export { ClouddebuggerControllerDebuggeesRegisterResponse };
