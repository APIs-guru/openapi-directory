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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var NetworksecurityProjectsLocationsClientTlsPoliciesCreatePathParams = /** @class */ (function (_super) {
    __extends(NetworksecurityProjectsLocationsClientTlsPoliciesCreatePathParams, _super);
    function NetworksecurityProjectsLocationsClientTlsPoliciesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsClientTlsPoliciesCreatePathParams.prototype, "parent", void 0);
    return NetworksecurityProjectsLocationsClientTlsPoliciesCreatePathParams;
}(SpeakeasyBase));
export { NetworksecurityProjectsLocationsClientTlsPoliciesCreatePathParams };
var NetworksecurityProjectsLocationsClientTlsPoliciesCreateQueryParams = /** @class */ (function (_super) {
    __extends(NetworksecurityProjectsLocationsClientTlsPoliciesCreateQueryParams, _super);
    function NetworksecurityProjectsLocationsClientTlsPoliciesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsClientTlsPoliciesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsClientTlsPoliciesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsClientTlsPoliciesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsClientTlsPoliciesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=clientTlsPolicyId" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsClientTlsPoliciesCreateQueryParams.prototype, "clientTlsPolicyId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsClientTlsPoliciesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsClientTlsPoliciesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsClientTlsPoliciesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NetworksecurityProjectsLocationsClientTlsPoliciesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsClientTlsPoliciesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsClientTlsPoliciesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsClientTlsPoliciesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return NetworksecurityProjectsLocationsClientTlsPoliciesCreateQueryParams;
}(SpeakeasyBase));
export { NetworksecurityProjectsLocationsClientTlsPoliciesCreateQueryParams };
var NetworksecurityProjectsLocationsClientTlsPoliciesCreateSecurity = /** @class */ (function (_super) {
    __extends(NetworksecurityProjectsLocationsClientTlsPoliciesCreateSecurity, _super);
    function NetworksecurityProjectsLocationsClientTlsPoliciesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NetworksecurityProjectsLocationsClientTlsPoliciesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NetworksecurityProjectsLocationsClientTlsPoliciesCreateSecurity.prototype, "oauth2c", void 0);
    return NetworksecurityProjectsLocationsClientTlsPoliciesCreateSecurity;
}(SpeakeasyBase));
export { NetworksecurityProjectsLocationsClientTlsPoliciesCreateSecurity };
var NetworksecurityProjectsLocationsClientTlsPoliciesCreateRequest = /** @class */ (function (_super) {
    __extends(NetworksecurityProjectsLocationsClientTlsPoliciesCreateRequest, _super);
    function NetworksecurityProjectsLocationsClientTlsPoliciesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", NetworksecurityProjectsLocationsClientTlsPoliciesCreatePathParams)
    ], NetworksecurityProjectsLocationsClientTlsPoliciesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NetworksecurityProjectsLocationsClientTlsPoliciesCreateQueryParams)
    ], NetworksecurityProjectsLocationsClientTlsPoliciesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ClientTlsPolicy)
    ], NetworksecurityProjectsLocationsClientTlsPoliciesCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NetworksecurityProjectsLocationsClientTlsPoliciesCreateSecurity)
    ], NetworksecurityProjectsLocationsClientTlsPoliciesCreateRequest.prototype, "security", void 0);
    return NetworksecurityProjectsLocationsClientTlsPoliciesCreateRequest;
}(SpeakeasyBase));
export { NetworksecurityProjectsLocationsClientTlsPoliciesCreateRequest };
var NetworksecurityProjectsLocationsClientTlsPoliciesCreateResponse = /** @class */ (function (_super) {
    __extends(NetworksecurityProjectsLocationsClientTlsPoliciesCreateResponse, _super);
    function NetworksecurityProjectsLocationsClientTlsPoliciesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsClientTlsPoliciesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], NetworksecurityProjectsLocationsClientTlsPoliciesCreateResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], NetworksecurityProjectsLocationsClientTlsPoliciesCreateResponse.prototype, "statusCode", void 0);
    return NetworksecurityProjectsLocationsClientTlsPoliciesCreateResponse;
}(SpeakeasyBase));
export { NetworksecurityProjectsLocationsClientTlsPoliciesCreateResponse };
