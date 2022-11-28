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
var DfareportingAccountUserProfilesPatchPathParams = /** @class */ (function (_super) {
    __extends(DfareportingAccountUserProfilesPatchPathParams, _super);
    function DfareportingAccountUserProfilesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesPatchPathParams.prototype, "profileId", void 0);
    return DfareportingAccountUserProfilesPatchPathParams;
}(SpeakeasyBase));
export { DfareportingAccountUserProfilesPatchPathParams };
var DfareportingAccountUserProfilesPatchQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingAccountUserProfilesPatchQueryParams, _super);
    function DfareportingAccountUserProfilesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesPatchQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingAccountUserProfilesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingAccountUserProfilesPatchQueryParams;
}(SpeakeasyBase));
export { DfareportingAccountUserProfilesPatchQueryParams };
var DfareportingAccountUserProfilesPatchSecurity = /** @class */ (function (_super) {
    __extends(DfareportingAccountUserProfilesPatchSecurity, _super);
    function DfareportingAccountUserProfilesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingAccountUserProfilesPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingAccountUserProfilesPatchSecurity.prototype, "oauth2c", void 0);
    return DfareportingAccountUserProfilesPatchSecurity;
}(SpeakeasyBase));
export { DfareportingAccountUserProfilesPatchSecurity };
var DfareportingAccountUserProfilesPatchRequest = /** @class */ (function (_super) {
    __extends(DfareportingAccountUserProfilesPatchRequest, _super);
    function DfareportingAccountUserProfilesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAccountUserProfilesPatchPathParams)
    ], DfareportingAccountUserProfilesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAccountUserProfilesPatchQueryParams)
    ], DfareportingAccountUserProfilesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AccountUserProfile)
    ], DfareportingAccountUserProfilesPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAccountUserProfilesPatchSecurity)
    ], DfareportingAccountUserProfilesPatchRequest.prototype, "security", void 0);
    return DfareportingAccountUserProfilesPatchRequest;
}(SpeakeasyBase));
export { DfareportingAccountUserProfilesPatchRequest };
var DfareportingAccountUserProfilesPatchResponse = /** @class */ (function (_super) {
    __extends(DfareportingAccountUserProfilesPatchResponse, _super);
    function DfareportingAccountUserProfilesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccountUserProfile)
    ], DfareportingAccountUserProfilesPatchResponse.prototype, "accountUserProfile", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingAccountUserProfilesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingAccountUserProfilesPatchResponse.prototype, "statusCode", void 0);
    return DfareportingAccountUserProfilesPatchResponse;
}(SpeakeasyBase));
export { DfareportingAccountUserProfilesPatchResponse };
