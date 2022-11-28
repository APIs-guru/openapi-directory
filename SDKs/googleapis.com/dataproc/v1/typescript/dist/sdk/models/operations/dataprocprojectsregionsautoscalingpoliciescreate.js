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
var DataprocProjectsRegionsAutoscalingPoliciesCreatePathParams = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsAutoscalingPoliciesCreatePathParams, _super);
    function DataprocProjectsRegionsAutoscalingPoliciesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsAutoscalingPoliciesCreatePathParams.prototype, "parent", void 0);
    return DataprocProjectsRegionsAutoscalingPoliciesCreatePathParams;
}(SpeakeasyBase));
export { DataprocProjectsRegionsAutoscalingPoliciesCreatePathParams };
var DataprocProjectsRegionsAutoscalingPoliciesCreateQueryParams = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsAutoscalingPoliciesCreateQueryParams, _super);
    function DataprocProjectsRegionsAutoscalingPoliciesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsAutoscalingPoliciesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsAutoscalingPoliciesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsAutoscalingPoliciesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsAutoscalingPoliciesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsAutoscalingPoliciesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsAutoscalingPoliciesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsAutoscalingPoliciesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataprocProjectsRegionsAutoscalingPoliciesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsAutoscalingPoliciesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsAutoscalingPoliciesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsAutoscalingPoliciesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DataprocProjectsRegionsAutoscalingPoliciesCreateQueryParams;
}(SpeakeasyBase));
export { DataprocProjectsRegionsAutoscalingPoliciesCreateQueryParams };
var DataprocProjectsRegionsAutoscalingPoliciesCreateSecurity = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsAutoscalingPoliciesCreateSecurity, _super);
    function DataprocProjectsRegionsAutoscalingPoliciesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataprocProjectsRegionsAutoscalingPoliciesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataprocProjectsRegionsAutoscalingPoliciesCreateSecurity.prototype, "oauth2c", void 0);
    return DataprocProjectsRegionsAutoscalingPoliciesCreateSecurity;
}(SpeakeasyBase));
export { DataprocProjectsRegionsAutoscalingPoliciesCreateSecurity };
var DataprocProjectsRegionsAutoscalingPoliciesCreateRequest = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsAutoscalingPoliciesCreateRequest, _super);
    function DataprocProjectsRegionsAutoscalingPoliciesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsAutoscalingPoliciesCreatePathParams)
    ], DataprocProjectsRegionsAutoscalingPoliciesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsAutoscalingPoliciesCreateQueryParams)
    ], DataprocProjectsRegionsAutoscalingPoliciesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AutoscalingPolicyInput)
    ], DataprocProjectsRegionsAutoscalingPoliciesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataprocProjectsRegionsAutoscalingPoliciesCreateSecurity)
    ], DataprocProjectsRegionsAutoscalingPoliciesCreateRequest.prototype, "security", void 0);
    return DataprocProjectsRegionsAutoscalingPoliciesCreateRequest;
}(SpeakeasyBase));
export { DataprocProjectsRegionsAutoscalingPoliciesCreateRequest };
var DataprocProjectsRegionsAutoscalingPoliciesCreateResponse = /** @class */ (function (_super) {
    __extends(DataprocProjectsRegionsAutoscalingPoliciesCreateResponse, _super);
    function DataprocProjectsRegionsAutoscalingPoliciesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AutoscalingPolicy)
    ], DataprocProjectsRegionsAutoscalingPoliciesCreateResponse.prototype, "autoscalingPolicy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataprocProjectsRegionsAutoscalingPoliciesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataprocProjectsRegionsAutoscalingPoliciesCreateResponse.prototype, "statusCode", void 0);
    return DataprocProjectsRegionsAutoscalingPoliciesCreateResponse;
}(SpeakeasyBase));
export { DataprocProjectsRegionsAutoscalingPoliciesCreateResponse };
