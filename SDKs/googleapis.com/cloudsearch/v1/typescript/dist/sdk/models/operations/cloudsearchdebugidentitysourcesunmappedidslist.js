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
var CloudsearchDebugIdentitysourcesUnmappedidsListPathParams = /** @class */ (function (_super) {
    __extends(CloudsearchDebugIdentitysourcesUnmappedidsListPathParams, _super);
    function CloudsearchDebugIdentitysourcesUnmappedidsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudsearchDebugIdentitysourcesUnmappedidsListPathParams.prototype, "parent", void 0);
    return CloudsearchDebugIdentitysourcesUnmappedidsListPathParams;
}(SpeakeasyBase));
export { CloudsearchDebugIdentitysourcesUnmappedidsListPathParams };
export var CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnum;
(function (CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnum) {
    CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnum["CodeUnspecified"] = "CODE_UNSPECIFIED";
    CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnum["NotFound"] = "NOT_FOUND";
    CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnum["IdentitySourceNotFound"] = "IDENTITY_SOURCE_NOT_FOUND";
    CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnum["IdentitySourceMisconfigured"] = "IDENTITY_SOURCE_MISCONFIGURED";
    CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnum["TooManyMappingsFound"] = "TOO_MANY_MAPPINGS_FOUND";
    CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnum["InternalError"] = "INTERNAL_ERROR";
})(CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnum || (CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnum = {}));
var CloudsearchDebugIdentitysourcesUnmappedidsListQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchDebugIdentitysourcesUnmappedidsListQueryParams, _super);
    function CloudsearchDebugIdentitysourcesUnmappedidsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchDebugIdentitysourcesUnmappedidsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchDebugIdentitysourcesUnmappedidsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchDebugIdentitysourcesUnmappedidsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchDebugIdentitysourcesUnmappedidsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=debugOptions.enableDebugging" }),
        __metadata("design:type", Boolean)
    ], CloudsearchDebugIdentitysourcesUnmappedidsListQueryParams.prototype, "debugOptionsEnableDebugging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchDebugIdentitysourcesUnmappedidsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchDebugIdentitysourcesUnmappedidsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchDebugIdentitysourcesUnmappedidsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudsearchDebugIdentitysourcesUnmappedidsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudsearchDebugIdentitysourcesUnmappedidsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchDebugIdentitysourcesUnmappedidsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchDebugIdentitysourcesUnmappedidsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resolutionStatusCode" }),
        __metadata("design:type", String)
    ], CloudsearchDebugIdentitysourcesUnmappedidsListQueryParams.prototype, "resolutionStatusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchDebugIdentitysourcesUnmappedidsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchDebugIdentitysourcesUnmappedidsListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsearchDebugIdentitysourcesUnmappedidsListQueryParams;
}(SpeakeasyBase));
export { CloudsearchDebugIdentitysourcesUnmappedidsListQueryParams };
var CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption1, _super);
    function CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption1;
}(SpeakeasyBase));
export { CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption1 };
var CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption2, _super);
    function CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption2;
}(SpeakeasyBase));
export { CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption2 };
var CloudsearchDebugIdentitysourcesUnmappedidsListSecurity = /** @class */ (function (_super) {
    __extends(CloudsearchDebugIdentitysourcesUnmappedidsListSecurity, _super);
    function CloudsearchDebugIdentitysourcesUnmappedidsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption1)
    ], CloudsearchDebugIdentitysourcesUnmappedidsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption2)
    ], CloudsearchDebugIdentitysourcesUnmappedidsListSecurity.prototype, "option2", void 0);
    return CloudsearchDebugIdentitysourcesUnmappedidsListSecurity;
}(SpeakeasyBase));
export { CloudsearchDebugIdentitysourcesUnmappedidsListSecurity };
var CloudsearchDebugIdentitysourcesUnmappedidsListRequest = /** @class */ (function (_super) {
    __extends(CloudsearchDebugIdentitysourcesUnmappedidsListRequest, _super);
    function CloudsearchDebugIdentitysourcesUnmappedidsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchDebugIdentitysourcesUnmappedidsListPathParams)
    ], CloudsearchDebugIdentitysourcesUnmappedidsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchDebugIdentitysourcesUnmappedidsListQueryParams)
    ], CloudsearchDebugIdentitysourcesUnmappedidsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchDebugIdentitysourcesUnmappedidsListSecurity)
    ], CloudsearchDebugIdentitysourcesUnmappedidsListRequest.prototype, "security", void 0);
    return CloudsearchDebugIdentitysourcesUnmappedidsListRequest;
}(SpeakeasyBase));
export { CloudsearchDebugIdentitysourcesUnmappedidsListRequest };
var CloudsearchDebugIdentitysourcesUnmappedidsListResponse = /** @class */ (function (_super) {
    __extends(CloudsearchDebugIdentitysourcesUnmappedidsListResponse, _super);
    function CloudsearchDebugIdentitysourcesUnmappedidsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchDebugIdentitysourcesUnmappedidsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListUnmappedIdentitiesResponse)
    ], CloudsearchDebugIdentitysourcesUnmappedidsListResponse.prototype, "listUnmappedIdentitiesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchDebugIdentitysourcesUnmappedidsListResponse.prototype, "statusCode", void 0);
    return CloudsearchDebugIdentitysourcesUnmappedidsListResponse;
}(SpeakeasyBase));
export { CloudsearchDebugIdentitysourcesUnmappedidsListResponse };
