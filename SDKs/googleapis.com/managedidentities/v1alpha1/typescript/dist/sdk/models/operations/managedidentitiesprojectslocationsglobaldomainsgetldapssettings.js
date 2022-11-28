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
var ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsPathParams = /** @class */ (function (_super) {
    __extends(ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsPathParams, _super);
    function ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsPathParams.prototype, "name", void 0);
    return ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsPathParams;
}(SpeakeasyBase));
export { ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsPathParams };
var ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsQueryParams = /** @class */ (function (_super) {
    __extends(ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsQueryParams, _super);
    function ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsQueryParams.prototype, "uploadProtocol", void 0);
    return ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsQueryParams;
}(SpeakeasyBase));
export { ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsQueryParams };
var ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsSecurity = /** @class */ (function (_super) {
    __extends(ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsSecurity, _super);
    function ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsSecurity.prototype, "oauth2c", void 0);
    return ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsSecurity;
}(SpeakeasyBase));
export { ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsSecurity };
var ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsRequest = /** @class */ (function (_super) {
    __extends(ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsRequest, _super);
    function ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsPathParams)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsQueryParams)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsSecurity)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsRequest.prototype, "security", void 0);
    return ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsRequest;
}(SpeakeasyBase));
export { ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsRequest };
var ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsResponse = /** @class */ (function (_super) {
    __extends(ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsResponse, _super);
    function ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LdapsSettings)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsResponse.prototype, "ldapsSettings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsResponse.prototype, "statusCode", void 0);
    return ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsResponse;
}(SpeakeasyBase));
export { ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsResponse };
