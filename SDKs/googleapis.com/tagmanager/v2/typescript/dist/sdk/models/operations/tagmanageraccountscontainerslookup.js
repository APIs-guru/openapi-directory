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
var TagmanagerAccountsContainersLookupQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersLookupQueryParams, _super);
    function TagmanagerAccountsContainersLookupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersLookupQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersLookupQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersLookupQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersLookupQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destinationId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersLookupQueryParams.prototype, "destinationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersLookupQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersLookupQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersLookupQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersLookupQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersLookupQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersLookupQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersLookupQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersLookupQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersLookupQueryParams };
var TagmanagerAccountsContainersLookupSecurityOption1 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersLookupSecurityOption1, _super);
    function TagmanagerAccountsContainersLookupSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersLookupSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersLookupSecurityOption1.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersLookupSecurityOption1;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersLookupSecurityOption1 };
var TagmanagerAccountsContainersLookupSecurityOption2 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersLookupSecurityOption2, _super);
    function TagmanagerAccountsContainersLookupSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersLookupSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersLookupSecurityOption2.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersLookupSecurityOption2;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersLookupSecurityOption2 };
var TagmanagerAccountsContainersLookupSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersLookupSecurity, _super);
    function TagmanagerAccountsContainersLookupSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersLookupSecurityOption1)
    ], TagmanagerAccountsContainersLookupSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersLookupSecurityOption2)
    ], TagmanagerAccountsContainersLookupSecurity.prototype, "option2", void 0);
    return TagmanagerAccountsContainersLookupSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersLookupSecurity };
var TagmanagerAccountsContainersLookupRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersLookupRequest, _super);
    function TagmanagerAccountsContainersLookupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersLookupQueryParams)
    ], TagmanagerAccountsContainersLookupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersLookupSecurity)
    ], TagmanagerAccountsContainersLookupRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersLookupRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersLookupRequest };
var TagmanagerAccountsContainersLookupResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersLookupResponse, _super);
    function TagmanagerAccountsContainersLookupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Container)
    ], TagmanagerAccountsContainersLookupResponse.prototype, "container", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersLookupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersLookupResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersLookupResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersLookupResponse };
