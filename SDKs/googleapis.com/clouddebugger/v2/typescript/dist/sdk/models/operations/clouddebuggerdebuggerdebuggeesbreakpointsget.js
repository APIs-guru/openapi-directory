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
var ClouddebuggerDebuggerDebuggeesBreakpointsGetPathParams = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesBreakpointsGetPathParams, _super);
    function ClouddebuggerDebuggerDebuggeesBreakpointsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=breakpointId" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsGetPathParams.prototype, "breakpointId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=debuggeeId" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsGetPathParams.prototype, "debuggeeId", void 0);
    return ClouddebuggerDebuggerDebuggeesBreakpointsGetPathParams;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesBreakpointsGetPathParams };
var ClouddebuggerDebuggerDebuggeesBreakpointsGetQueryParams = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesBreakpointsGetQueryParams, _super);
    function ClouddebuggerDebuggerDebuggeesBreakpointsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientVersion" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsGetQueryParams.prototype, "clientVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsGetQueryParams.prototype, "uploadProtocol", void 0);
    return ClouddebuggerDebuggerDebuggeesBreakpointsGetQueryParams;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesBreakpointsGetQueryParams };
var ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption1, _super);
    function ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption1.prototype, "oauth2c", void 0);
    return ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption1;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption1 };
var ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption2, _super);
    function ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption2.prototype, "oauth2c", void 0);
    return ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption2;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption2 };
var ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurity = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurity, _super);
    function ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption1)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption2)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurity.prototype, "option2", void 0);
    return ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurity;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurity };
var ClouddebuggerDebuggerDebuggeesBreakpointsGetRequest = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesBreakpointsGetRequest, _super);
    function ClouddebuggerDebuggerDebuggeesBreakpointsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddebuggerDebuggerDebuggeesBreakpointsGetPathParams)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddebuggerDebuggerDebuggeesBreakpointsGetQueryParams)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurity)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsGetRequest.prototype, "security", void 0);
    return ClouddebuggerDebuggerDebuggeesBreakpointsGetRequest;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesBreakpointsGetRequest };
var ClouddebuggerDebuggerDebuggeesBreakpointsGetResponse = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesBreakpointsGetResponse, _super);
    function ClouddebuggerDebuggerDebuggeesBreakpointsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetBreakpointResponse)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsGetResponse.prototype, "getBreakpointResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsGetResponse.prototype, "statusCode", void 0);
    return ClouddebuggerDebuggerDebuggeesBreakpointsGetResponse;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesBreakpointsGetResponse };
