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
var ClouddebuggerControllerDebuggeesBreakpointsUpdatePathParams = /** @class */ (function (_super) {
    __extends(ClouddebuggerControllerDebuggeesBreakpointsUpdatePathParams, _super);
    function ClouddebuggerControllerDebuggeesBreakpointsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=debuggeeId" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesBreakpointsUpdatePathParams.prototype, "debuggeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesBreakpointsUpdatePathParams.prototype, "id", void 0);
    return ClouddebuggerControllerDebuggeesBreakpointsUpdatePathParams;
}(SpeakeasyBase));
export { ClouddebuggerControllerDebuggeesBreakpointsUpdatePathParams };
var ClouddebuggerControllerDebuggeesBreakpointsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(ClouddebuggerControllerDebuggeesBreakpointsUpdateQueryParams, _super);
    function ClouddebuggerControllerDebuggeesBreakpointsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesBreakpointsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesBreakpointsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesBreakpointsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesBreakpointsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesBreakpointsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesBreakpointsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesBreakpointsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClouddebuggerControllerDebuggeesBreakpointsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesBreakpointsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesBreakpointsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesBreakpointsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return ClouddebuggerControllerDebuggeesBreakpointsUpdateQueryParams;
}(SpeakeasyBase));
export { ClouddebuggerControllerDebuggeesBreakpointsUpdateQueryParams };
var ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption1, _super);
    function ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption1;
}(SpeakeasyBase));
export { ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption1 };
var ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption2, _super);
    function ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption2;
}(SpeakeasyBase));
export { ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption2 };
var ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurity = /** @class */ (function (_super) {
    __extends(ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurity, _super);
    function ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption1)
    ], ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption2)
    ], ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurity.prototype, "option2", void 0);
    return ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurity;
}(SpeakeasyBase));
export { ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurity };
var ClouddebuggerControllerDebuggeesBreakpointsUpdateRequest = /** @class */ (function (_super) {
    __extends(ClouddebuggerControllerDebuggeesBreakpointsUpdateRequest, _super);
    function ClouddebuggerControllerDebuggeesBreakpointsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddebuggerControllerDebuggeesBreakpointsUpdatePathParams)
    ], ClouddebuggerControllerDebuggeesBreakpointsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddebuggerControllerDebuggeesBreakpointsUpdateQueryParams)
    ], ClouddebuggerControllerDebuggeesBreakpointsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateActiveBreakpointRequest)
    ], ClouddebuggerControllerDebuggeesBreakpointsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurity)
    ], ClouddebuggerControllerDebuggeesBreakpointsUpdateRequest.prototype, "security", void 0);
    return ClouddebuggerControllerDebuggeesBreakpointsUpdateRequest;
}(SpeakeasyBase));
export { ClouddebuggerControllerDebuggeesBreakpointsUpdateRequest };
var ClouddebuggerControllerDebuggeesBreakpointsUpdateResponse = /** @class */ (function (_super) {
    __extends(ClouddebuggerControllerDebuggeesBreakpointsUpdateResponse, _super);
    function ClouddebuggerControllerDebuggeesBreakpointsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClouddebuggerControllerDebuggeesBreakpointsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClouddebuggerControllerDebuggeesBreakpointsUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ClouddebuggerControllerDebuggeesBreakpointsUpdateResponse.prototype, "updateActiveBreakpointResponse", void 0);
    return ClouddebuggerControllerDebuggeesBreakpointsUpdateResponse;
}(SpeakeasyBase));
export { ClouddebuggerControllerDebuggeesBreakpointsUpdateResponse };
