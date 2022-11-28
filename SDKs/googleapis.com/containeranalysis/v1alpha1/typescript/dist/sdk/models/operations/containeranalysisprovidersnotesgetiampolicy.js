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
var ContaineranalysisProvidersNotesGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(ContaineranalysisProvidersNotesGetIamPolicyPathParams, _super);
    function ContaineranalysisProvidersNotesGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesGetIamPolicyPathParams.prototype, "resource", void 0);
    return ContaineranalysisProvidersNotesGetIamPolicyPathParams;
}(SpeakeasyBase));
export { ContaineranalysisProvidersNotesGetIamPolicyPathParams };
var ContaineranalysisProvidersNotesGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(ContaineranalysisProvidersNotesGetIamPolicyQueryParams, _super);
    function ContaineranalysisProvidersNotesGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContaineranalysisProvidersNotesGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return ContaineranalysisProvidersNotesGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { ContaineranalysisProvidersNotesGetIamPolicyQueryParams };
var ContaineranalysisProvidersNotesGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(ContaineranalysisProvidersNotesGetIamPolicySecurity, _super);
    function ContaineranalysisProvidersNotesGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContaineranalysisProvidersNotesGetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContaineranalysisProvidersNotesGetIamPolicySecurity.prototype, "oauth2c", void 0);
    return ContaineranalysisProvidersNotesGetIamPolicySecurity;
}(SpeakeasyBase));
export { ContaineranalysisProvidersNotesGetIamPolicySecurity };
var ContaineranalysisProvidersNotesGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(ContaineranalysisProvidersNotesGetIamPolicyRequest, _super);
    function ContaineranalysisProvidersNotesGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContaineranalysisProvidersNotesGetIamPolicyPathParams)
    ], ContaineranalysisProvidersNotesGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContaineranalysisProvidersNotesGetIamPolicyQueryParams)
    ], ContaineranalysisProvidersNotesGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetIamPolicyRequest)
    ], ContaineranalysisProvidersNotesGetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContaineranalysisProvidersNotesGetIamPolicySecurity)
    ], ContaineranalysisProvidersNotesGetIamPolicyRequest.prototype, "security", void 0);
    return ContaineranalysisProvidersNotesGetIamPolicyRequest;
}(SpeakeasyBase));
export { ContaineranalysisProvidersNotesGetIamPolicyRequest };
var ContaineranalysisProvidersNotesGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(ContaineranalysisProvidersNotesGetIamPolicyResponse, _super);
    function ContaineranalysisProvidersNotesGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], ContaineranalysisProvidersNotesGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContaineranalysisProvidersNotesGetIamPolicyResponse.prototype, "statusCode", void 0);
    return ContaineranalysisProvidersNotesGetIamPolicyResponse;
}(SpeakeasyBase));
export { ContaineranalysisProvidersNotesGetIamPolicyResponse };
