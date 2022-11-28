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
var CloudsearchQuerySourcesListQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchQuerySourcesListQueryParams, _super);
    function CloudsearchQuerySourcesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchQuerySourcesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchQuerySourcesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchQuerySourcesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchQuerySourcesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchQuerySourcesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchQuerySourcesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchQuerySourcesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudsearchQuerySourcesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchQuerySourcesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchQuerySourcesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestOptions.debugOptions.enableDebugging" }),
        __metadata("design:type", Boolean)
    ], CloudsearchQuerySourcesListQueryParams.prototype, "requestOptionsDebugOptionsEnableDebugging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestOptions.languageCode" }),
        __metadata("design:type", String)
    ], CloudsearchQuerySourcesListQueryParams.prototype, "requestOptionsLanguageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestOptions.searchApplicationId" }),
        __metadata("design:type", String)
    ], CloudsearchQuerySourcesListQueryParams.prototype, "requestOptionsSearchApplicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestOptions.timeZone" }),
        __metadata("design:type", String)
    ], CloudsearchQuerySourcesListQueryParams.prototype, "requestOptionsTimeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchQuerySourcesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchQuerySourcesListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsearchQuerySourcesListQueryParams;
}(SpeakeasyBase));
export { CloudsearchQuerySourcesListQueryParams };
var CloudsearchQuerySourcesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchQuerySourcesListSecurityOption1, _super);
    function CloudsearchQuerySourcesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchQuerySourcesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchQuerySourcesListSecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchQuerySourcesListSecurityOption1;
}(SpeakeasyBase));
export { CloudsearchQuerySourcesListSecurityOption1 };
var CloudsearchQuerySourcesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchQuerySourcesListSecurityOption2, _super);
    function CloudsearchQuerySourcesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchQuerySourcesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchQuerySourcesListSecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchQuerySourcesListSecurityOption2;
}(SpeakeasyBase));
export { CloudsearchQuerySourcesListSecurityOption2 };
var CloudsearchQuerySourcesListSecurity = /** @class */ (function (_super) {
    __extends(CloudsearchQuerySourcesListSecurity, _super);
    function CloudsearchQuerySourcesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchQuerySourcesListSecurityOption1)
    ], CloudsearchQuerySourcesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchQuerySourcesListSecurityOption2)
    ], CloudsearchQuerySourcesListSecurity.prototype, "option2", void 0);
    return CloudsearchQuerySourcesListSecurity;
}(SpeakeasyBase));
export { CloudsearchQuerySourcesListSecurity };
var CloudsearchQuerySourcesListRequest = /** @class */ (function (_super) {
    __extends(CloudsearchQuerySourcesListRequest, _super);
    function CloudsearchQuerySourcesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchQuerySourcesListQueryParams)
    ], CloudsearchQuerySourcesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchQuerySourcesListSecurity)
    ], CloudsearchQuerySourcesListRequest.prototype, "security", void 0);
    return CloudsearchQuerySourcesListRequest;
}(SpeakeasyBase));
export { CloudsearchQuerySourcesListRequest };
var CloudsearchQuerySourcesListResponse = /** @class */ (function (_super) {
    __extends(CloudsearchQuerySourcesListResponse, _super);
    function CloudsearchQuerySourcesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchQuerySourcesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListQuerySourcesResponse)
    ], CloudsearchQuerySourcesListResponse.prototype, "listQuerySourcesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchQuerySourcesListResponse.prototype, "statusCode", void 0);
    return CloudsearchQuerySourcesListResponse;
}(SpeakeasyBase));
export { CloudsearchQuerySourcesListResponse };
