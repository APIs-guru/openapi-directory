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
var TagmanagerAccountsContainersVersionsLivePathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVersionsLivePathParams, _super);
    function TagmanagerAccountsContainersVersionsLivePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsLivePathParams.prototype, "parent", void 0);
    return TagmanagerAccountsContainersVersionsLivePathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVersionsLivePathParams };
var TagmanagerAccountsContainersVersionsLiveQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVersionsLiveQueryParams, _super);
    function TagmanagerAccountsContainersVersionsLiveQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsLiveQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsLiveQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsLiveQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsLiveQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsLiveQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsLiveQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsLiveQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersVersionsLiveQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsLiveQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsLiveQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsLiveQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersVersionsLiveQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVersionsLiveQueryParams };
var TagmanagerAccountsContainersVersionsLiveSecurityOption1 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVersionsLiveSecurityOption1, _super);
    function TagmanagerAccountsContainersVersionsLiveSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersVersionsLiveSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersVersionsLiveSecurityOption1.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersVersionsLiveSecurityOption1;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVersionsLiveSecurityOption1 };
var TagmanagerAccountsContainersVersionsLiveSecurityOption2 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVersionsLiveSecurityOption2, _super);
    function TagmanagerAccountsContainersVersionsLiveSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersVersionsLiveSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersVersionsLiveSecurityOption2.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersVersionsLiveSecurityOption2;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVersionsLiveSecurityOption2 };
var TagmanagerAccountsContainersVersionsLiveSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVersionsLiveSecurity, _super);
    function TagmanagerAccountsContainersVersionsLiveSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersVersionsLiveSecurityOption1)
    ], TagmanagerAccountsContainersVersionsLiveSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersVersionsLiveSecurityOption2)
    ], TagmanagerAccountsContainersVersionsLiveSecurity.prototype, "option2", void 0);
    return TagmanagerAccountsContainersVersionsLiveSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVersionsLiveSecurity };
var TagmanagerAccountsContainersVersionsLiveRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVersionsLiveRequest, _super);
    function TagmanagerAccountsContainersVersionsLiveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersVersionsLivePathParams)
    ], TagmanagerAccountsContainersVersionsLiveRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersVersionsLiveQueryParams)
    ], TagmanagerAccountsContainersVersionsLiveRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersVersionsLiveSecurity)
    ], TagmanagerAccountsContainersVersionsLiveRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersVersionsLiveRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVersionsLiveRequest };
var TagmanagerAccountsContainersVersionsLiveResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVersionsLiveResponse, _super);
    function TagmanagerAccountsContainersVersionsLiveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ContainerVersion)
    ], TagmanagerAccountsContainersVersionsLiveResponse.prototype, "containerVersion", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsLiveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersVersionsLiveResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersVersionsLiveResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVersionsLiveResponse };
