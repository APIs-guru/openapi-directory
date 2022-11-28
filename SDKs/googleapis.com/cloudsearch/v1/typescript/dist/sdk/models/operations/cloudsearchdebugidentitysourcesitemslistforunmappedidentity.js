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
var CloudsearchDebugIdentitysourcesItemsListForunmappedidentityPathParams = /** @class */ (function (_super) {
    __extends(CloudsearchDebugIdentitysourcesItemsListForunmappedidentityPathParams, _super);
    function CloudsearchDebugIdentitysourcesItemsListForunmappedidentityPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudsearchDebugIdentitysourcesItemsListForunmappedidentityPathParams.prototype, "parent", void 0);
    return CloudsearchDebugIdentitysourcesItemsListForunmappedidentityPathParams;
}(SpeakeasyBase));
export { CloudsearchDebugIdentitysourcesItemsListForunmappedidentityPathParams };
var CloudsearchDebugIdentitysourcesItemsListForunmappedidentityQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchDebugIdentitysourcesItemsListForunmappedidentityQueryParams, _super);
    function CloudsearchDebugIdentitysourcesItemsListForunmappedidentityQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchDebugIdentitysourcesItemsListForunmappedidentityQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchDebugIdentitysourcesItemsListForunmappedidentityQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchDebugIdentitysourcesItemsListForunmappedidentityQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchDebugIdentitysourcesItemsListForunmappedidentityQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=debugOptions.enableDebugging" }),
        __metadata("design:type", Boolean)
    ], CloudsearchDebugIdentitysourcesItemsListForunmappedidentityQueryParams.prototype, "debugOptionsEnableDebugging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchDebugIdentitysourcesItemsListForunmappedidentityQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupResourceName" }),
        __metadata("design:type", String)
    ], CloudsearchDebugIdentitysourcesItemsListForunmappedidentityQueryParams.prototype, "groupResourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchDebugIdentitysourcesItemsListForunmappedidentityQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchDebugIdentitysourcesItemsListForunmappedidentityQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudsearchDebugIdentitysourcesItemsListForunmappedidentityQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudsearchDebugIdentitysourcesItemsListForunmappedidentityQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchDebugIdentitysourcesItemsListForunmappedidentityQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchDebugIdentitysourcesItemsListForunmappedidentityQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchDebugIdentitysourcesItemsListForunmappedidentityQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchDebugIdentitysourcesItemsListForunmappedidentityQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userResourceName" }),
        __metadata("design:type", String)
    ], CloudsearchDebugIdentitysourcesItemsListForunmappedidentityQueryParams.prototype, "userResourceName", void 0);
    return CloudsearchDebugIdentitysourcesItemsListForunmappedidentityQueryParams;
}(SpeakeasyBase));
export { CloudsearchDebugIdentitysourcesItemsListForunmappedidentityQueryParams };
var CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption1, _super);
    function CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption1;
}(SpeakeasyBase));
export { CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption1 };
var CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption2, _super);
    function CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption2;
}(SpeakeasyBase));
export { CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption2 };
var CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurity = /** @class */ (function (_super) {
    __extends(CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurity, _super);
    function CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption1)
    ], CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption2)
    ], CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurity.prototype, "option2", void 0);
    return CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurity;
}(SpeakeasyBase));
export { CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurity };
var CloudsearchDebugIdentitysourcesItemsListForunmappedidentityRequest = /** @class */ (function (_super) {
    __extends(CloudsearchDebugIdentitysourcesItemsListForunmappedidentityRequest, _super);
    function CloudsearchDebugIdentitysourcesItemsListForunmappedidentityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchDebugIdentitysourcesItemsListForunmappedidentityPathParams)
    ], CloudsearchDebugIdentitysourcesItemsListForunmappedidentityRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchDebugIdentitysourcesItemsListForunmappedidentityQueryParams)
    ], CloudsearchDebugIdentitysourcesItemsListForunmappedidentityRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurity)
    ], CloudsearchDebugIdentitysourcesItemsListForunmappedidentityRequest.prototype, "security", void 0);
    return CloudsearchDebugIdentitysourcesItemsListForunmappedidentityRequest;
}(SpeakeasyBase));
export { CloudsearchDebugIdentitysourcesItemsListForunmappedidentityRequest };
var CloudsearchDebugIdentitysourcesItemsListForunmappedidentityResponse = /** @class */ (function (_super) {
    __extends(CloudsearchDebugIdentitysourcesItemsListForunmappedidentityResponse, _super);
    function CloudsearchDebugIdentitysourcesItemsListForunmappedidentityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchDebugIdentitysourcesItemsListForunmappedidentityResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListItemNamesForUnmappedIdentityResponse)
    ], CloudsearchDebugIdentitysourcesItemsListForunmappedidentityResponse.prototype, "listItemNamesForUnmappedIdentityResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchDebugIdentitysourcesItemsListForunmappedidentityResponse.prototype, "statusCode", void 0);
    return CloudsearchDebugIdentitysourcesItemsListForunmappedidentityResponse;
}(SpeakeasyBase));
export { CloudsearchDebugIdentitysourcesItemsListForunmappedidentityResponse };
