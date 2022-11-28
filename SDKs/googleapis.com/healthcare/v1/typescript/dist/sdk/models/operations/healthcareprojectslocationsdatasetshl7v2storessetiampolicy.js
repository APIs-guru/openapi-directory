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
var HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyPathParams, _super);
    function HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyPathParams.prototype, "resource", void 0);
    return HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyPathParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyPathParams };
var HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyQueryParams, _super);
    function HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyQueryParams };
var HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicySecurity, _super);
    function HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicySecurity.prototype, "oauth2c", void 0);
    return HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicySecurity;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicySecurity };
var HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyRequest, _super);
    function HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyPathParams)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyQueryParams)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetIamPolicyRequest)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicySecurity)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyRequest.prototype, "security", void 0);
    return HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyRequest;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyRequest };
var HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyResponse, _super);
    function HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyResponse.prototype, "statusCode", void 0);
    return HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyResponse;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyResponse };
