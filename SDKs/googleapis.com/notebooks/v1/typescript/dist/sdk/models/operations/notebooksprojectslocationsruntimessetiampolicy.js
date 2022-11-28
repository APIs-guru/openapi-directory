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
var NotebooksProjectsLocationsRuntimesSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesSetIamPolicyPathParams, _super);
    function NotebooksProjectsLocationsRuntimesSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesSetIamPolicyPathParams.prototype, "resource", void 0);
    return NotebooksProjectsLocationsRuntimesSetIamPolicyPathParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesSetIamPolicyPathParams };
var NotebooksProjectsLocationsRuntimesSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesSetIamPolicyQueryParams, _super);
    function NotebooksProjectsLocationsRuntimesSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesSetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesSetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesSetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NotebooksProjectsLocationsRuntimesSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesSetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return NotebooksProjectsLocationsRuntimesSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesSetIamPolicyQueryParams };
var NotebooksProjectsLocationsRuntimesSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesSetIamPolicySecurity, _super);
    function NotebooksProjectsLocationsRuntimesSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NotebooksProjectsLocationsRuntimesSetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NotebooksProjectsLocationsRuntimesSetIamPolicySecurity.prototype, "oauth2c", void 0);
    return NotebooksProjectsLocationsRuntimesSetIamPolicySecurity;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesSetIamPolicySecurity };
var NotebooksProjectsLocationsRuntimesSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesSetIamPolicyRequest, _super);
    function NotebooksProjectsLocationsRuntimesSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotebooksProjectsLocationsRuntimesSetIamPolicyPathParams)
    ], NotebooksProjectsLocationsRuntimesSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotebooksProjectsLocationsRuntimesSetIamPolicyQueryParams)
    ], NotebooksProjectsLocationsRuntimesSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetIamPolicyRequest)
    ], NotebooksProjectsLocationsRuntimesSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotebooksProjectsLocationsRuntimesSetIamPolicySecurity)
    ], NotebooksProjectsLocationsRuntimesSetIamPolicyRequest.prototype, "security", void 0);
    return NotebooksProjectsLocationsRuntimesSetIamPolicyRequest;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesSetIamPolicyRequest };
var NotebooksProjectsLocationsRuntimesSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesSetIamPolicyResponse, _super);
    function NotebooksProjectsLocationsRuntimesSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], NotebooksProjectsLocationsRuntimesSetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NotebooksProjectsLocationsRuntimesSetIamPolicyResponse.prototype, "statusCode", void 0);
    return NotebooksProjectsLocationsRuntimesSetIamPolicyResponse;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesSetIamPolicyResponse };
