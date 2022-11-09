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
var GkehubProjectsLocationsMembershipsGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsMembershipsGetIamPolicyPathParams, _super);
    function GkehubProjectsLocationsMembershipsGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGetIamPolicyPathParams.prototype, "resource", void 0);
    return GkehubProjectsLocationsMembershipsGetIamPolicyPathParams;
}(SpeakeasyBase));
export { GkehubProjectsLocationsMembershipsGetIamPolicyPathParams };
var GkehubProjectsLocationsMembershipsGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsMembershipsGetIamPolicyQueryParams, _super);
    function GkehubProjectsLocationsMembershipsGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=options.requestedPolicyVersion" }),
        __metadata("design:type", Number)
    ], GkehubProjectsLocationsMembershipsGetIamPolicyQueryParams.prototype, "optionsRequestedPolicyVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GkehubProjectsLocationsMembershipsGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return GkehubProjectsLocationsMembershipsGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { GkehubProjectsLocationsMembershipsGetIamPolicyQueryParams };
var GkehubProjectsLocationsMembershipsGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsMembershipsGetIamPolicySecurity, _super);
    function GkehubProjectsLocationsMembershipsGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GkehubProjectsLocationsMembershipsGetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GkehubProjectsLocationsMembershipsGetIamPolicySecurity.prototype, "oauth2c", void 0);
    return GkehubProjectsLocationsMembershipsGetIamPolicySecurity;
}(SpeakeasyBase));
export { GkehubProjectsLocationsMembershipsGetIamPolicySecurity };
var GkehubProjectsLocationsMembershipsGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsMembershipsGetIamPolicyRequest, _super);
    function GkehubProjectsLocationsMembershipsGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GkehubProjectsLocationsMembershipsGetIamPolicyPathParams)
    ], GkehubProjectsLocationsMembershipsGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GkehubProjectsLocationsMembershipsGetIamPolicyQueryParams)
    ], GkehubProjectsLocationsMembershipsGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GkehubProjectsLocationsMembershipsGetIamPolicySecurity)
    ], GkehubProjectsLocationsMembershipsGetIamPolicyRequest.prototype, "security", void 0);
    return GkehubProjectsLocationsMembershipsGetIamPolicyRequest;
}(SpeakeasyBase));
export { GkehubProjectsLocationsMembershipsGetIamPolicyRequest };
var GkehubProjectsLocationsMembershipsGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsMembershipsGetIamPolicyResponse, _super);
    function GkehubProjectsLocationsMembershipsGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Policy)
    ], GkehubProjectsLocationsMembershipsGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GkehubProjectsLocationsMembershipsGetIamPolicyResponse.prototype, "statusCode", void 0);
    return GkehubProjectsLocationsMembershipsGetIamPolicyResponse;
}(SpeakeasyBase));
export { GkehubProjectsLocationsMembershipsGetIamPolicyResponse };
