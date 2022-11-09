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
var OrgpolicyProjectsPoliciesPatchPathParams = /** @class */ (function (_super) {
    __extends(OrgpolicyProjectsPoliciesPatchPathParams, _super);
    function OrgpolicyProjectsPoliciesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesPatchPathParams.prototype, "name", void 0);
    return OrgpolicyProjectsPoliciesPatchPathParams;
}(SpeakeasyBase));
export { OrgpolicyProjectsPoliciesPatchPathParams };
var OrgpolicyProjectsPoliciesPatchQueryParams = /** @class */ (function (_super) {
    __extends(OrgpolicyProjectsPoliciesPatchQueryParams, _super);
    function OrgpolicyProjectsPoliciesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], OrgpolicyProjectsPoliciesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return OrgpolicyProjectsPoliciesPatchQueryParams;
}(SpeakeasyBase));
export { OrgpolicyProjectsPoliciesPatchQueryParams };
var OrgpolicyProjectsPoliciesPatchSecurity = /** @class */ (function (_super) {
    __extends(OrgpolicyProjectsPoliciesPatchSecurity, _super);
    function OrgpolicyProjectsPoliciesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OrgpolicyProjectsPoliciesPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OrgpolicyProjectsPoliciesPatchSecurity.prototype, "oauth2c", void 0);
    return OrgpolicyProjectsPoliciesPatchSecurity;
}(SpeakeasyBase));
export { OrgpolicyProjectsPoliciesPatchSecurity };
var OrgpolicyProjectsPoliciesPatchRequest = /** @class */ (function (_super) {
    __extends(OrgpolicyProjectsPoliciesPatchRequest, _super);
    function OrgpolicyProjectsPoliciesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", OrgpolicyProjectsPoliciesPatchPathParams)
    ], OrgpolicyProjectsPoliciesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OrgpolicyProjectsPoliciesPatchQueryParams)
    ], OrgpolicyProjectsPoliciesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudOrgpolicyV2Policy)
    ], OrgpolicyProjectsPoliciesPatchRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OrgpolicyProjectsPoliciesPatchSecurity)
    ], OrgpolicyProjectsPoliciesPatchRequest.prototype, "security", void 0);
    return OrgpolicyProjectsPoliciesPatchRequest;
}(SpeakeasyBase));
export { OrgpolicyProjectsPoliciesPatchRequest };
var OrgpolicyProjectsPoliciesPatchResponse = /** @class */ (function (_super) {
    __extends(OrgpolicyProjectsPoliciesPatchResponse, _super);
    function OrgpolicyProjectsPoliciesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleCloudOrgpolicyV2Policy)
    ], OrgpolicyProjectsPoliciesPatchResponse.prototype, "googleCloudOrgpolicyV2Policy", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], OrgpolicyProjectsPoliciesPatchResponse.prototype, "statusCode", void 0);
    return OrgpolicyProjectsPoliciesPatchResponse;
}(SpeakeasyBase));
export { OrgpolicyProjectsPoliciesPatchResponse };
