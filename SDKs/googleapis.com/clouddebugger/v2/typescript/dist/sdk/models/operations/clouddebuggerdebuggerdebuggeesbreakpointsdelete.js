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
var ClouddebuggerDebuggerDebuggeesBreakpointsDeletePathParams = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesBreakpointsDeletePathParams, _super);
    function ClouddebuggerDebuggerDebuggeesBreakpointsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=breakpointId" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsDeletePathParams.prototype, "breakpointId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=debuggeeId" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsDeletePathParams.prototype, "debuggeeId", void 0);
    return ClouddebuggerDebuggerDebuggeesBreakpointsDeletePathParams;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesBreakpointsDeletePathParams };
var ClouddebuggerDebuggerDebuggeesBreakpointsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesBreakpointsDeleteQueryParams, _super);
    function ClouddebuggerDebuggerDebuggeesBreakpointsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientVersion" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsDeleteQueryParams.prototype, "clientVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return ClouddebuggerDebuggerDebuggeesBreakpointsDeleteQueryParams;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesBreakpointsDeleteQueryParams };
var ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurityOption1, _super);
    function ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurityOption1;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurityOption1 };
var ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurityOption2, _super);
    function ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurityOption2;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurityOption2 };
var ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurity = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurity, _super);
    function ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurityOption1)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurityOption2)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurity.prototype, "option2", void 0);
    return ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurity;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurity };
var ClouddebuggerDebuggerDebuggeesBreakpointsDeleteRequest = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesBreakpointsDeleteRequest, _super);
    function ClouddebuggerDebuggerDebuggeesBreakpointsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddebuggerDebuggerDebuggeesBreakpointsDeletePathParams)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddebuggerDebuggerDebuggeesBreakpointsDeleteQueryParams)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurity)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsDeleteRequest.prototype, "security", void 0);
    return ClouddebuggerDebuggerDebuggeesBreakpointsDeleteRequest;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesBreakpointsDeleteRequest };
var ClouddebuggerDebuggerDebuggeesBreakpointsDeleteResponse = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesBreakpointsDeleteResponse, _super);
    function ClouddebuggerDebuggerDebuggeesBreakpointsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsDeleteResponse.prototype, "statusCode", void 0);
    return ClouddebuggerDebuggerDebuggeesBreakpointsDeleteResponse;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesBreakpointsDeleteResponse };
