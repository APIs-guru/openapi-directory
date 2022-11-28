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
var OrgpolicyProjectsPoliciesDeletePathParams = /** @class */ (function (_super) {
    __extends(OrgpolicyProjectsPoliciesDeletePathParams, _super);
    function OrgpolicyProjectsPoliciesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesDeletePathParams.prototype, "name", void 0);
    return OrgpolicyProjectsPoliciesDeletePathParams;
}(SpeakeasyBase));
export { OrgpolicyProjectsPoliciesDeletePathParams };
var OrgpolicyProjectsPoliciesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(OrgpolicyProjectsPoliciesDeleteQueryParams, _super);
    function OrgpolicyProjectsPoliciesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], OrgpolicyProjectsPoliciesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return OrgpolicyProjectsPoliciesDeleteQueryParams;
}(SpeakeasyBase));
export { OrgpolicyProjectsPoliciesDeleteQueryParams };
var OrgpolicyProjectsPoliciesDeleteSecurity = /** @class */ (function (_super) {
    __extends(OrgpolicyProjectsPoliciesDeleteSecurity, _super);
    function OrgpolicyProjectsPoliciesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OrgpolicyProjectsPoliciesDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OrgpolicyProjectsPoliciesDeleteSecurity.prototype, "oauth2c", void 0);
    return OrgpolicyProjectsPoliciesDeleteSecurity;
}(SpeakeasyBase));
export { OrgpolicyProjectsPoliciesDeleteSecurity };
var OrgpolicyProjectsPoliciesDeleteRequest = /** @class */ (function (_super) {
    __extends(OrgpolicyProjectsPoliciesDeleteRequest, _super);
    function OrgpolicyProjectsPoliciesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrgpolicyProjectsPoliciesDeletePathParams)
    ], OrgpolicyProjectsPoliciesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrgpolicyProjectsPoliciesDeleteQueryParams)
    ], OrgpolicyProjectsPoliciesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrgpolicyProjectsPoliciesDeleteSecurity)
    ], OrgpolicyProjectsPoliciesDeleteRequest.prototype, "security", void 0);
    return OrgpolicyProjectsPoliciesDeleteRequest;
}(SpeakeasyBase));
export { OrgpolicyProjectsPoliciesDeleteRequest };
var OrgpolicyProjectsPoliciesDeleteResponse = /** @class */ (function (_super) {
    __extends(OrgpolicyProjectsPoliciesDeleteResponse, _super);
    function OrgpolicyProjectsPoliciesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], OrgpolicyProjectsPoliciesDeleteResponse.prototype, "googleProtobufEmpty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OrgpolicyProjectsPoliciesDeleteResponse.prototype, "statusCode", void 0);
    return OrgpolicyProjectsPoliciesDeleteResponse;
}(SpeakeasyBase));
export { OrgpolicyProjectsPoliciesDeleteResponse };
