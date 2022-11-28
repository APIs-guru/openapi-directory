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
var ClouddebuggerDebuggerDebuggeesBreakpointsListPathParams = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesBreakpointsListPathParams, _super);
    function ClouddebuggerDebuggerDebuggeesBreakpointsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=debuggeeId" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsListPathParams.prototype, "debuggeeId", void 0);
    return ClouddebuggerDebuggerDebuggeesBreakpointsListPathParams;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesBreakpointsListPathParams };
export var ClouddebuggerDebuggerDebuggeesBreakpointsListActionValueEnum;
(function (ClouddebuggerDebuggerDebuggeesBreakpointsListActionValueEnum) {
    ClouddebuggerDebuggerDebuggeesBreakpointsListActionValueEnum["Capture"] = "CAPTURE";
    ClouddebuggerDebuggerDebuggeesBreakpointsListActionValueEnum["Log"] = "LOG";
})(ClouddebuggerDebuggerDebuggeesBreakpointsListActionValueEnum || (ClouddebuggerDebuggerDebuggeesBreakpointsListActionValueEnum = {}));
var ClouddebuggerDebuggerDebuggeesBreakpointsListQueryParams = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesBreakpointsListQueryParams, _super);
    function ClouddebuggerDebuggerDebuggeesBreakpointsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action.value" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsListQueryParams.prototype, "actionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientVersion" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsListQueryParams.prototype, "clientVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeAllUsers" }),
        __metadata("design:type", Boolean)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsListQueryParams.prototype, "includeAllUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeInactive" }),
        __metadata("design:type", Boolean)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsListQueryParams.prototype, "includeInactive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stripResults" }),
        __metadata("design:type", Boolean)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsListQueryParams.prototype, "stripResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=waitToken" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsListQueryParams.prototype, "waitToken", void 0);
    return ClouddebuggerDebuggerDebuggeesBreakpointsListQueryParams;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesBreakpointsListQueryParams };
var ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption1, _super);
    function ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption1.prototype, "oauth2c", void 0);
    return ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption1;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption1 };
var ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption2, _super);
    function ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption2.prototype, "oauth2c", void 0);
    return ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption2;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption2 };
var ClouddebuggerDebuggerDebuggeesBreakpointsListSecurity = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesBreakpointsListSecurity, _super);
    function ClouddebuggerDebuggerDebuggeesBreakpointsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption1)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption2)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsListSecurity.prototype, "option2", void 0);
    return ClouddebuggerDebuggerDebuggeesBreakpointsListSecurity;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesBreakpointsListSecurity };
var ClouddebuggerDebuggerDebuggeesBreakpointsListRequest = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesBreakpointsListRequest, _super);
    function ClouddebuggerDebuggerDebuggeesBreakpointsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddebuggerDebuggerDebuggeesBreakpointsListPathParams)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddebuggerDebuggerDebuggeesBreakpointsListQueryParams)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddebuggerDebuggerDebuggeesBreakpointsListSecurity)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsListRequest.prototype, "security", void 0);
    return ClouddebuggerDebuggerDebuggeesBreakpointsListRequest;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesBreakpointsListRequest };
var ClouddebuggerDebuggerDebuggeesBreakpointsListResponse = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesBreakpointsListResponse, _super);
    function ClouddebuggerDebuggerDebuggeesBreakpointsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListBreakpointsResponse)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsListResponse.prototype, "listBreakpointsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClouddebuggerDebuggerDebuggeesBreakpointsListResponse.prototype, "statusCode", void 0);
    return ClouddebuggerDebuggerDebuggeesBreakpointsListResponse;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesBreakpointsListResponse };
