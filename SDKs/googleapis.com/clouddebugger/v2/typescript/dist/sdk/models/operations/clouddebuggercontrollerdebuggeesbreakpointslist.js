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
var ClouddebuggerControllerDebuggeesBreakpointsListPathParams = /** @class */ (function (_super) {
    __extends(ClouddebuggerControllerDebuggeesBreakpointsListPathParams, _super);
    function ClouddebuggerControllerDebuggeesBreakpointsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=debuggeeId" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesBreakpointsListPathParams.prototype, "debuggeeId", void 0);
    return ClouddebuggerControllerDebuggeesBreakpointsListPathParams;
}(SpeakeasyBase));
export { ClouddebuggerControllerDebuggeesBreakpointsListPathParams };
var ClouddebuggerControllerDebuggeesBreakpointsListQueryParams = /** @class */ (function (_super) {
    __extends(ClouddebuggerControllerDebuggeesBreakpointsListQueryParams, _super);
    function ClouddebuggerControllerDebuggeesBreakpointsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesBreakpointsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesBreakpointsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=agentId" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesBreakpointsListQueryParams.prototype, "agentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesBreakpointsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesBreakpointsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesBreakpointsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesBreakpointsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesBreakpointsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClouddebuggerControllerDebuggeesBreakpointsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesBreakpointsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=successOnTimeout" }),
        __metadata("design:type", Boolean)
    ], ClouddebuggerControllerDebuggeesBreakpointsListQueryParams.prototype, "successOnTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesBreakpointsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesBreakpointsListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=waitToken" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesBreakpointsListQueryParams.prototype, "waitToken", void 0);
    return ClouddebuggerControllerDebuggeesBreakpointsListQueryParams;
}(SpeakeasyBase));
export { ClouddebuggerControllerDebuggeesBreakpointsListQueryParams };
var ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption1, _super);
    function ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption1.prototype, "oauth2c", void 0);
    return ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption1;
}(SpeakeasyBase));
export { ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption1 };
var ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption2, _super);
    function ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption2.prototype, "oauth2c", void 0);
    return ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption2;
}(SpeakeasyBase));
export { ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption2 };
var ClouddebuggerControllerDebuggeesBreakpointsListSecurity = /** @class */ (function (_super) {
    __extends(ClouddebuggerControllerDebuggeesBreakpointsListSecurity, _super);
    function ClouddebuggerControllerDebuggeesBreakpointsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption1)
    ], ClouddebuggerControllerDebuggeesBreakpointsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption2)
    ], ClouddebuggerControllerDebuggeesBreakpointsListSecurity.prototype, "option2", void 0);
    return ClouddebuggerControllerDebuggeesBreakpointsListSecurity;
}(SpeakeasyBase));
export { ClouddebuggerControllerDebuggeesBreakpointsListSecurity };
var ClouddebuggerControllerDebuggeesBreakpointsListRequest = /** @class */ (function (_super) {
    __extends(ClouddebuggerControllerDebuggeesBreakpointsListRequest, _super);
    function ClouddebuggerControllerDebuggeesBreakpointsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddebuggerControllerDebuggeesBreakpointsListPathParams)
    ], ClouddebuggerControllerDebuggeesBreakpointsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddebuggerControllerDebuggeesBreakpointsListQueryParams)
    ], ClouddebuggerControllerDebuggeesBreakpointsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddebuggerControllerDebuggeesBreakpointsListSecurity)
    ], ClouddebuggerControllerDebuggeesBreakpointsListRequest.prototype, "security", void 0);
    return ClouddebuggerControllerDebuggeesBreakpointsListRequest;
}(SpeakeasyBase));
export { ClouddebuggerControllerDebuggeesBreakpointsListRequest };
var ClouddebuggerControllerDebuggeesBreakpointsListResponse = /** @class */ (function (_super) {
    __extends(ClouddebuggerControllerDebuggeesBreakpointsListResponse, _super);
    function ClouddebuggerControllerDebuggeesBreakpointsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesBreakpointsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListActiveBreakpointsResponse)
    ], ClouddebuggerControllerDebuggeesBreakpointsListResponse.prototype, "listActiveBreakpointsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClouddebuggerControllerDebuggeesBreakpointsListResponse.prototype, "statusCode", void 0);
    return ClouddebuggerControllerDebuggeesBreakpointsListResponse;
}(SpeakeasyBase));
export { ClouddebuggerControllerDebuggeesBreakpointsListResponse };
