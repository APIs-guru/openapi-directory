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
var TagmanagerAccountsContainersVersionsSetLatestPathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVersionsSetLatestPathParams, _super);
    function TagmanagerAccountsContainersVersionsSetLatestPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsSetLatestPathParams.prototype, "path", void 0);
    return TagmanagerAccountsContainersVersionsSetLatestPathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVersionsSetLatestPathParams };
var TagmanagerAccountsContainersVersionsSetLatestQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVersionsSetLatestQueryParams, _super);
    function TagmanagerAccountsContainersVersionsSetLatestQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsSetLatestQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsSetLatestQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsSetLatestQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsSetLatestQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsSetLatestQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsSetLatestQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsSetLatestQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersVersionsSetLatestQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsSetLatestQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsSetLatestQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsSetLatestQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersVersionsSetLatestQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVersionsSetLatestQueryParams };
var TagmanagerAccountsContainersVersionsSetLatestSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVersionsSetLatestSecurity, _super);
    function TagmanagerAccountsContainersVersionsSetLatestSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersVersionsSetLatestSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersVersionsSetLatestSecurity.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersVersionsSetLatestSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVersionsSetLatestSecurity };
var TagmanagerAccountsContainersVersionsSetLatestRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVersionsSetLatestRequest, _super);
    function TagmanagerAccountsContainersVersionsSetLatestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersVersionsSetLatestPathParams)
    ], TagmanagerAccountsContainersVersionsSetLatestRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersVersionsSetLatestQueryParams)
    ], TagmanagerAccountsContainersVersionsSetLatestRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersVersionsSetLatestSecurity)
    ], TagmanagerAccountsContainersVersionsSetLatestRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersVersionsSetLatestRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVersionsSetLatestRequest };
var TagmanagerAccountsContainersVersionsSetLatestResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVersionsSetLatestResponse, _super);
    function TagmanagerAccountsContainersVersionsSetLatestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ContainerVersion)
    ], TagmanagerAccountsContainersVersionsSetLatestResponse.prototype, "containerVersion", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsSetLatestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersVersionsSetLatestResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersVersionsSetLatestResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVersionsSetLatestResponse };
