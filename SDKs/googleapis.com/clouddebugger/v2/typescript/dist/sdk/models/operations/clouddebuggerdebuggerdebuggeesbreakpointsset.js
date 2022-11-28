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
var ClouddebuggerDebuggerDebuggeesBreakpointsSetPathParams = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesBreakpointsSetPathParams, _super);
    function ClouddebuggerDebuggerDebuggeesBreakpointsSetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=debuggeeId" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsSetPathParams.prototype, "debuggeeId", void 0);
    return ClouddebuggerDebuggerDebuggeesBreakpointsSetPathParams;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesBreakpointsSetPathParams };
export var ClouddebuggerDebuggerDebuggeesBreakpointsSetCanaryOptionEnum;
(function (ClouddebuggerDebuggerDebuggeesBreakpointsSetCanaryOptionEnum) {
    ClouddebuggerDebuggerDebuggeesBreakpointsSetCanaryOptionEnum["CanaryOptionUnspecified"] = "CANARY_OPTION_UNSPECIFIED";
    ClouddebuggerDebuggerDebuggeesBreakpointsSetCanaryOptionEnum["CanaryOptionTryEnable"] = "CANARY_OPTION_TRY_ENABLE";
    ClouddebuggerDebuggerDebuggeesBreakpointsSetCanaryOptionEnum["CanaryOptionTryDisable"] = "CANARY_OPTION_TRY_DISABLE";
})(ClouddebuggerDebuggerDebuggeesBreakpointsSetCanaryOptionEnum || (ClouddebuggerDebuggerDebuggeesBreakpointsSetCanaryOptionEnum = {}));
var ClouddebuggerDebuggerDebuggeesBreakpointsSetQueryParams = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesBreakpointsSetQueryParams, _super);
    function ClouddebuggerDebuggerDebuggeesBreakpointsSetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsSetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsSetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsSetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsSetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=canaryOption" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsSetQueryParams.prototype, "canaryOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientVersion" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsSetQueryParams.prototype, "clientVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsSetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsSetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsSetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsSetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsSetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsSetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsSetQueryParams.prototype, "uploadProtocol", void 0);
    return ClouddebuggerDebuggerDebuggeesBreakpointsSetQueryParams;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesBreakpointsSetQueryParams };
var ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption1, _super);
    function ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption1.prototype, "oauth2c", void 0);
    return ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption1;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption1 };
var ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption2, _super);
    function ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption2.prototype, "oauth2c", void 0);
    return ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption2;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption2 };
var ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurity = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurity, _super);
    function ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption1)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption2)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurity.prototype, "option2", void 0);
    return ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurity;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurity };
var ClouddebuggerDebuggerDebuggeesBreakpointsSetRequest = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesBreakpointsSetRequest, _super);
    function ClouddebuggerDebuggerDebuggeesBreakpointsSetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddebuggerDebuggerDebuggeesBreakpointsSetPathParams)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsSetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddebuggerDebuggerDebuggeesBreakpointsSetQueryParams)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsSetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Breakpoint)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsSetRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurity)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsSetRequest.prototype, "security", void 0);
    return ClouddebuggerDebuggerDebuggeesBreakpointsSetRequest;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesBreakpointsSetRequest };
var ClouddebuggerDebuggerDebuggeesBreakpointsSetResponse = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesBreakpointsSetResponse, _super);
    function ClouddebuggerDebuggerDebuggeesBreakpointsSetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsSetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SetBreakpointResponse)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsSetResponse.prototype, "setBreakpointResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsSetResponse.prototype, "statusCode", void 0);
    return ClouddebuggerDebuggerDebuggeesBreakpointsSetResponse;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesBreakpointsSetResponse };
