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
var NotebooksProjectsLocationsRuntimesGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesGetIamPolicyPathParams, _super);
    function NotebooksProjectsLocationsRuntimesGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesGetIamPolicyPathParams.prototype, "resource", void 0);
    return NotebooksProjectsLocationsRuntimesGetIamPolicyPathParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesGetIamPolicyPathParams };
var NotebooksProjectsLocationsRuntimesGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesGetIamPolicyQueryParams, _super);
    function NotebooksProjectsLocationsRuntimesGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=options.requestedPolicyVersion" }),
        __metadata("design:type", Number)
    ], NotebooksProjectsLocationsRuntimesGetIamPolicyQueryParams.prototype, "optionsRequestedPolicyVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NotebooksProjectsLocationsRuntimesGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return NotebooksProjectsLocationsRuntimesGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesGetIamPolicyQueryParams };
var NotebooksProjectsLocationsRuntimesGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesGetIamPolicySecurity, _super);
    function NotebooksProjectsLocationsRuntimesGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NotebooksProjectsLocationsRuntimesGetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NotebooksProjectsLocationsRuntimesGetIamPolicySecurity.prototype, "oauth2c", void 0);
    return NotebooksProjectsLocationsRuntimesGetIamPolicySecurity;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesGetIamPolicySecurity };
var NotebooksProjectsLocationsRuntimesGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesGetIamPolicyRequest, _super);
    function NotebooksProjectsLocationsRuntimesGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotebooksProjectsLocationsRuntimesGetIamPolicyPathParams)
    ], NotebooksProjectsLocationsRuntimesGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotebooksProjectsLocationsRuntimesGetIamPolicyQueryParams)
    ], NotebooksProjectsLocationsRuntimesGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotebooksProjectsLocationsRuntimesGetIamPolicySecurity)
    ], NotebooksProjectsLocationsRuntimesGetIamPolicyRequest.prototype, "security", void 0);
    return NotebooksProjectsLocationsRuntimesGetIamPolicyRequest;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesGetIamPolicyRequest };
var NotebooksProjectsLocationsRuntimesGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesGetIamPolicyResponse, _super);
    function NotebooksProjectsLocationsRuntimesGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], NotebooksProjectsLocationsRuntimesGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NotebooksProjectsLocationsRuntimesGetIamPolicyResponse.prototype, "statusCode", void 0);
    return NotebooksProjectsLocationsRuntimesGetIamPolicyResponse;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesGetIamPolicyResponse };
