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
var TagmanagerAccountsContainersTriggersGetPathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersTriggersGetPathParams, _super);
    function TagmanagerAccountsContainersTriggersGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTriggersGetPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=containerId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTriggersGetPathParams.prototype, "containerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=triggerId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTriggersGetPathParams.prototype, "triggerId", void 0);
    return TagmanagerAccountsContainersTriggersGetPathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersTriggersGetPathParams };
var TagmanagerAccountsContainersTriggersGetQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersTriggersGetQueryParams, _super);
    function TagmanagerAccountsContainersTriggersGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTriggersGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTriggersGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTriggersGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTriggersGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTriggersGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTriggersGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTriggersGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersTriggersGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTriggersGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTriggersGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTriggersGetQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersTriggersGetQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersTriggersGetQueryParams };
var TagmanagerAccountsContainersTriggersGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersTriggersGetSecurityOption1, _super);
    function TagmanagerAccountsContainersTriggersGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersTriggersGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersTriggersGetSecurityOption1.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersTriggersGetSecurityOption1;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersTriggersGetSecurityOption1 };
var TagmanagerAccountsContainersTriggersGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersTriggersGetSecurityOption2, _super);
    function TagmanagerAccountsContainersTriggersGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersTriggersGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersTriggersGetSecurityOption2.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersTriggersGetSecurityOption2;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersTriggersGetSecurityOption2 };
var TagmanagerAccountsContainersTriggersGetSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersTriggersGetSecurity, _super);
    function TagmanagerAccountsContainersTriggersGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersTriggersGetSecurityOption1)
    ], TagmanagerAccountsContainersTriggersGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersTriggersGetSecurityOption2)
    ], TagmanagerAccountsContainersTriggersGetSecurity.prototype, "option2", void 0);
    return TagmanagerAccountsContainersTriggersGetSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersTriggersGetSecurity };
var TagmanagerAccountsContainersTriggersGetRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersTriggersGetRequest, _super);
    function TagmanagerAccountsContainersTriggersGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersTriggersGetPathParams)
    ], TagmanagerAccountsContainersTriggersGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersTriggersGetQueryParams)
    ], TagmanagerAccountsContainersTriggersGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersTriggersGetSecurity)
    ], TagmanagerAccountsContainersTriggersGetRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersTriggersGetRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersTriggersGetRequest };
var TagmanagerAccountsContainersTriggersGetResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersTriggersGetResponse, _super);
    function TagmanagerAccountsContainersTriggersGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersTriggersGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersTriggersGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Trigger)
    ], TagmanagerAccountsContainersTriggersGetResponse.prototype, "trigger", void 0);
    return TagmanagerAccountsContainersTriggersGetResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersTriggersGetResponse };
