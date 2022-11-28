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
var OsconfigProjectsGuestPoliciesCreatePathParams = /** @class */ (function (_super) {
    __extends(OsconfigProjectsGuestPoliciesCreatePathParams, _super);
    function OsconfigProjectsGuestPoliciesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], OsconfigProjectsGuestPoliciesCreatePathParams.prototype, "parent", void 0);
    return OsconfigProjectsGuestPoliciesCreatePathParams;
}(SpeakeasyBase));
export { OsconfigProjectsGuestPoliciesCreatePathParams };
var OsconfigProjectsGuestPoliciesCreateQueryParams = /** @class */ (function (_super) {
    __extends(OsconfigProjectsGuestPoliciesCreateQueryParams, _super);
    function OsconfigProjectsGuestPoliciesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], OsconfigProjectsGuestPoliciesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], OsconfigProjectsGuestPoliciesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], OsconfigProjectsGuestPoliciesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], OsconfigProjectsGuestPoliciesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], OsconfigProjectsGuestPoliciesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=guestPolicyId" }),
        __metadata("design:type", String)
    ], OsconfigProjectsGuestPoliciesCreateQueryParams.prototype, "guestPolicyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], OsconfigProjectsGuestPoliciesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], OsconfigProjectsGuestPoliciesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], OsconfigProjectsGuestPoliciesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], OsconfigProjectsGuestPoliciesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], OsconfigProjectsGuestPoliciesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], OsconfigProjectsGuestPoliciesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return OsconfigProjectsGuestPoliciesCreateQueryParams;
}(SpeakeasyBase));
export { OsconfigProjectsGuestPoliciesCreateQueryParams };
var OsconfigProjectsGuestPoliciesCreateSecurity = /** @class */ (function (_super) {
    __extends(OsconfigProjectsGuestPoliciesCreateSecurity, _super);
    function OsconfigProjectsGuestPoliciesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OsconfigProjectsGuestPoliciesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OsconfigProjectsGuestPoliciesCreateSecurity.prototype, "oauth2c", void 0);
    return OsconfigProjectsGuestPoliciesCreateSecurity;
}(SpeakeasyBase));
export { OsconfigProjectsGuestPoliciesCreateSecurity };
var OsconfigProjectsGuestPoliciesCreateRequest = /** @class */ (function (_super) {
    __extends(OsconfigProjectsGuestPoliciesCreateRequest, _super);
    function OsconfigProjectsGuestPoliciesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsGuestPoliciesCreatePathParams)
    ], OsconfigProjectsGuestPoliciesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsGuestPoliciesCreateQueryParams)
    ], OsconfigProjectsGuestPoliciesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GuestPolicyInput)
    ], OsconfigProjectsGuestPoliciesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsGuestPoliciesCreateSecurity)
    ], OsconfigProjectsGuestPoliciesCreateRequest.prototype, "security", void 0);
    return OsconfigProjectsGuestPoliciesCreateRequest;
}(SpeakeasyBase));
export { OsconfigProjectsGuestPoliciesCreateRequest };
var OsconfigProjectsGuestPoliciesCreateResponse = /** @class */ (function (_super) {
    __extends(OsconfigProjectsGuestPoliciesCreateResponse, _super);
    function OsconfigProjectsGuestPoliciesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OsconfigProjectsGuestPoliciesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GuestPolicy)
    ], OsconfigProjectsGuestPoliciesCreateResponse.prototype, "guestPolicy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OsconfigProjectsGuestPoliciesCreateResponse.prototype, "statusCode", void 0);
    return OsconfigProjectsGuestPoliciesCreateResponse;
}(SpeakeasyBase));
export { OsconfigProjectsGuestPoliciesCreateResponse };
