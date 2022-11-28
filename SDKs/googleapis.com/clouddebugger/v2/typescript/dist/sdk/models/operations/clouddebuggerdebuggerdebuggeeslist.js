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
var ClouddebuggerDebuggerDebuggeesListQueryParams = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesListQueryParams, _super);
    function ClouddebuggerDebuggerDebuggeesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientVersion" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesListQueryParams.prototype, "clientVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeInactive" }),
        __metadata("design:type", Boolean)
    ], ClouddebuggerDebuggerDebuggeesListQueryParams.prototype, "includeInactive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClouddebuggerDebuggerDebuggeesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=project" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesListQueryParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesListQueryParams.prototype, "uploadProtocol", void 0);
    return ClouddebuggerDebuggerDebuggeesListQueryParams;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesListQueryParams };
var ClouddebuggerDebuggerDebuggeesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesListSecurityOption1, _super);
    function ClouddebuggerDebuggerDebuggeesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClouddebuggerDebuggerDebuggeesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClouddebuggerDebuggerDebuggeesListSecurityOption1.prototype, "oauth2c", void 0);
    return ClouddebuggerDebuggerDebuggeesListSecurityOption1;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesListSecurityOption1 };
var ClouddebuggerDebuggerDebuggeesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesListSecurityOption2, _super);
    function ClouddebuggerDebuggerDebuggeesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClouddebuggerDebuggerDebuggeesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClouddebuggerDebuggerDebuggeesListSecurityOption2.prototype, "oauth2c", void 0);
    return ClouddebuggerDebuggerDebuggeesListSecurityOption2;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesListSecurityOption2 };
var ClouddebuggerDebuggerDebuggeesListSecurity = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesListSecurity, _super);
    function ClouddebuggerDebuggerDebuggeesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClouddebuggerDebuggerDebuggeesListSecurityOption1)
    ], ClouddebuggerDebuggerDebuggeesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ClouddebuggerDebuggerDebuggeesListSecurityOption2)
    ], ClouddebuggerDebuggerDebuggeesListSecurity.prototype, "option2", void 0);
    return ClouddebuggerDebuggerDebuggeesListSecurity;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesListSecurity };
var ClouddebuggerDebuggerDebuggeesListRequest = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesListRequest, _super);
    function ClouddebuggerDebuggerDebuggeesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddebuggerDebuggerDebuggeesListQueryParams)
    ], ClouddebuggerDebuggerDebuggeesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouddebuggerDebuggerDebuggeesListSecurity)
    ], ClouddebuggerDebuggerDebuggeesListRequest.prototype, "security", void 0);
    return ClouddebuggerDebuggerDebuggeesListRequest;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesListRequest };
var ClouddebuggerDebuggerDebuggeesListResponse = /** @class */ (function (_super) {
    __extends(ClouddebuggerDebuggerDebuggeesListResponse, _super);
    function ClouddebuggerDebuggerDebuggeesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClouddebuggerDebuggerDebuggeesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListDebuggeesResponse)
    ], ClouddebuggerDebuggerDebuggeesListResponse.prototype, "listDebuggeesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClouddebuggerDebuggerDebuggeesListResponse.prototype, "statusCode", void 0);
    return ClouddebuggerDebuggerDebuggeesListResponse;
}(SpeakeasyBase));
export { ClouddebuggerDebuggerDebuggeesListResponse };
