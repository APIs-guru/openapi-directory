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
var CloudidentityInboundSamlSsoProfilesIdpCredentialsListPathParams = /** @class */ (function (_super) {
    __extends(CloudidentityInboundSamlSsoProfilesIdpCredentialsListPathParams, _super);
    function CloudidentityInboundSamlSsoProfilesIdpCredentialsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsListPathParams.prototype, "parent", void 0);
    return CloudidentityInboundSamlSsoProfilesIdpCredentialsListPathParams;
}(SpeakeasyBase));
export { CloudidentityInboundSamlSsoProfilesIdpCredentialsListPathParams };
var CloudidentityInboundSamlSsoProfilesIdpCredentialsListQueryParams = /** @class */ (function (_super) {
    __extends(CloudidentityInboundSamlSsoProfilesIdpCredentialsListQueryParams, _super);
    function CloudidentityInboundSamlSsoProfilesIdpCredentialsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudidentityInboundSamlSsoProfilesIdpCredentialsListQueryParams;
}(SpeakeasyBase));
export { CloudidentityInboundSamlSsoProfilesIdpCredentialsListQueryParams };
var CloudidentityInboundSamlSsoProfilesIdpCredentialsListSecurity = /** @class */ (function (_super) {
    __extends(CloudidentityInboundSamlSsoProfilesIdpCredentialsListSecurity, _super);
    function CloudidentityInboundSamlSsoProfilesIdpCredentialsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsListSecurity.prototype, "oauth2c", void 0);
    return CloudidentityInboundSamlSsoProfilesIdpCredentialsListSecurity;
}(SpeakeasyBase));
export { CloudidentityInboundSamlSsoProfilesIdpCredentialsListSecurity };
var CloudidentityInboundSamlSsoProfilesIdpCredentialsListRequest = /** @class */ (function (_super) {
    __extends(CloudidentityInboundSamlSsoProfilesIdpCredentialsListRequest, _super);
    function CloudidentityInboundSamlSsoProfilesIdpCredentialsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudidentityInboundSamlSsoProfilesIdpCredentialsListPathParams)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudidentityInboundSamlSsoProfilesIdpCredentialsListQueryParams)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudidentityInboundSamlSsoProfilesIdpCredentialsListSecurity)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsListRequest.prototype, "security", void 0);
    return CloudidentityInboundSamlSsoProfilesIdpCredentialsListRequest;
}(SpeakeasyBase));
export { CloudidentityInboundSamlSsoProfilesIdpCredentialsListRequest };
var CloudidentityInboundSamlSsoProfilesIdpCredentialsListResponse = /** @class */ (function (_super) {
    __extends(CloudidentityInboundSamlSsoProfilesIdpCredentialsListResponse, _super);
    function CloudidentityInboundSamlSsoProfilesIdpCredentialsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListIdpCredentialsResponse)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsListResponse.prototype, "listIdpCredentialsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudidentityInboundSamlSsoProfilesIdpCredentialsListResponse.prototype, "statusCode", void 0);
    return CloudidentityInboundSamlSsoProfilesIdpCredentialsListResponse;
}(SpeakeasyBase));
export { CloudidentityInboundSamlSsoProfilesIdpCredentialsListResponse };
