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
var SecuritycenterOrganizationsOperationsDeletePathParams = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsOperationsDeletePathParams, _super);
    function SecuritycenterOrganizationsOperationsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsOperationsDeletePathParams.prototype, "name", void 0);
    return SecuritycenterOrganizationsOperationsDeletePathParams;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsOperationsDeletePathParams };
var SecuritycenterOrganizationsOperationsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsOperationsDeleteQueryParams, _super);
    function SecuritycenterOrganizationsOperationsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsOperationsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsOperationsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsOperationsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsOperationsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsOperationsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsOperationsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsOperationsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SecuritycenterOrganizationsOperationsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsOperationsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsOperationsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsOperationsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return SecuritycenterOrganizationsOperationsDeleteQueryParams;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsOperationsDeleteQueryParams };
var SecuritycenterOrganizationsOperationsDeleteSecurity = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsOperationsDeleteSecurity, _super);
    function SecuritycenterOrganizationsOperationsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SecuritycenterOrganizationsOperationsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SecuritycenterOrganizationsOperationsDeleteSecurity.prototype, "oauth2c", void 0);
    return SecuritycenterOrganizationsOperationsDeleteSecurity;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsOperationsDeleteSecurity };
var SecuritycenterOrganizationsOperationsDeleteRequest = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsOperationsDeleteRequest, _super);
    function SecuritycenterOrganizationsOperationsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterOrganizationsOperationsDeletePathParams)
    ], SecuritycenterOrganizationsOperationsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterOrganizationsOperationsDeleteQueryParams)
    ], SecuritycenterOrganizationsOperationsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterOrganizationsOperationsDeleteSecurity)
    ], SecuritycenterOrganizationsOperationsDeleteRequest.prototype, "security", void 0);
    return SecuritycenterOrganizationsOperationsDeleteRequest;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsOperationsDeleteRequest };
var SecuritycenterOrganizationsOperationsDeleteResponse = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsOperationsDeleteResponse, _super);
    function SecuritycenterOrganizationsOperationsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsOperationsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], SecuritycenterOrganizationsOperationsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SecuritycenterOrganizationsOperationsDeleteResponse.prototype, "statusCode", void 0);
    return SecuritycenterOrganizationsOperationsDeleteResponse;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsOperationsDeleteResponse };
