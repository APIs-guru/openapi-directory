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
var CloudresourcemanagerProjectsGetAncestryPathParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetAncestryPathParams, _super);
    function CloudresourcemanagerProjectsGetAncestryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetAncestryPathParams.prototype, "projectId", void 0);
    return CloudresourcemanagerProjectsGetAncestryPathParams;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetAncestryPathParams };
var CloudresourcemanagerProjectsGetAncestryQueryParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetAncestryQueryParams, _super);
    function CloudresourcemanagerProjectsGetAncestryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetAncestryQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetAncestryQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetAncestryQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetAncestryQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetAncestryQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetAncestryQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetAncestryQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerProjectsGetAncestryQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetAncestryQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetAncestryQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetAncestryQueryParams.prototype, "uploadProtocol", void 0);
    return CloudresourcemanagerProjectsGetAncestryQueryParams;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetAncestryQueryParams };
var CloudresourcemanagerProjectsGetAncestrySecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetAncestrySecurityOption1, _super);
    function CloudresourcemanagerProjectsGetAncestrySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerProjectsGetAncestrySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerProjectsGetAncestrySecurityOption1.prototype, "oauth2c", void 0);
    return CloudresourcemanagerProjectsGetAncestrySecurityOption1;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetAncestrySecurityOption1 };
var CloudresourcemanagerProjectsGetAncestrySecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetAncestrySecurityOption2, _super);
    function CloudresourcemanagerProjectsGetAncestrySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerProjectsGetAncestrySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerProjectsGetAncestrySecurityOption2.prototype, "oauth2c", void 0);
    return CloudresourcemanagerProjectsGetAncestrySecurityOption2;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetAncestrySecurityOption2 };
var CloudresourcemanagerProjectsGetAncestrySecurity = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetAncestrySecurity, _super);
    function CloudresourcemanagerProjectsGetAncestrySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerProjectsGetAncestrySecurityOption1)
    ], CloudresourcemanagerProjectsGetAncestrySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerProjectsGetAncestrySecurityOption2)
    ], CloudresourcemanagerProjectsGetAncestrySecurity.prototype, "option2", void 0);
    return CloudresourcemanagerProjectsGetAncestrySecurity;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetAncestrySecurity };
var CloudresourcemanagerProjectsGetAncestryRequest = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetAncestryRequest, _super);
    function CloudresourcemanagerProjectsGetAncestryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerProjectsGetAncestryPathParams)
    ], CloudresourcemanagerProjectsGetAncestryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerProjectsGetAncestryQueryParams)
    ], CloudresourcemanagerProjectsGetAncestryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], CloudresourcemanagerProjectsGetAncestryRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerProjectsGetAncestrySecurity)
    ], CloudresourcemanagerProjectsGetAncestryRequest.prototype, "security", void 0);
    return CloudresourcemanagerProjectsGetAncestryRequest;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetAncestryRequest };
var CloudresourcemanagerProjectsGetAncestryResponse = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetAncestryResponse, _super);
    function CloudresourcemanagerProjectsGetAncestryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetAncestryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetAncestryResponse)
    ], CloudresourcemanagerProjectsGetAncestryResponse.prototype, "getAncestryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudresourcemanagerProjectsGetAncestryResponse.prototype, "statusCode", void 0);
    return CloudresourcemanagerProjectsGetAncestryResponse;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetAncestryResponse };
