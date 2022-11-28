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
var DfareportingAccountUserProfilesInsertPathParams = /** @class */ (function (_super) {
    __extends(DfareportingAccountUserProfilesInsertPathParams, _super);
    function DfareportingAccountUserProfilesInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesInsertPathParams.prototype, "profileId", void 0);
    return DfareportingAccountUserProfilesInsertPathParams;
}(SpeakeasyBase));
export { DfareportingAccountUserProfilesInsertPathParams };
var DfareportingAccountUserProfilesInsertQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingAccountUserProfilesInsertQueryParams, _super);
    function DfareportingAccountUserProfilesInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingAccountUserProfilesInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesInsertQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingAccountUserProfilesInsertQueryParams;
}(SpeakeasyBase));
export { DfareportingAccountUserProfilesInsertQueryParams };
var DfareportingAccountUserProfilesInsertSecurity = /** @class */ (function (_super) {
    __extends(DfareportingAccountUserProfilesInsertSecurity, _super);
    function DfareportingAccountUserProfilesInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingAccountUserProfilesInsertSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingAccountUserProfilesInsertSecurity.prototype, "oauth2c", void 0);
    return DfareportingAccountUserProfilesInsertSecurity;
}(SpeakeasyBase));
export { DfareportingAccountUserProfilesInsertSecurity };
var DfareportingAccountUserProfilesInsertRequest = /** @class */ (function (_super) {
    __extends(DfareportingAccountUserProfilesInsertRequest, _super);
    function DfareportingAccountUserProfilesInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAccountUserProfilesInsertPathParams)
    ], DfareportingAccountUserProfilesInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAccountUserProfilesInsertQueryParams)
    ], DfareportingAccountUserProfilesInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AccountUserProfile)
    ], DfareportingAccountUserProfilesInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAccountUserProfilesInsertSecurity)
    ], DfareportingAccountUserProfilesInsertRequest.prototype, "security", void 0);
    return DfareportingAccountUserProfilesInsertRequest;
}(SpeakeasyBase));
export { DfareportingAccountUserProfilesInsertRequest };
var DfareportingAccountUserProfilesInsertResponse = /** @class */ (function (_super) {
    __extends(DfareportingAccountUserProfilesInsertResponse, _super);
    function DfareportingAccountUserProfilesInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccountUserProfile)
    ], DfareportingAccountUserProfilesInsertResponse.prototype, "accountUserProfile", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingAccountUserProfilesInsertResponse.prototype, "statusCode", void 0);
    return DfareportingAccountUserProfilesInsertResponse;
}(SpeakeasyBase));
export { DfareportingAccountUserProfilesInsertResponse };
