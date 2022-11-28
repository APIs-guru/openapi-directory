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
var UpdateOrganizationBrandingPoliciesPrioritiesPathParams = /** @class */ (function (_super) {
    __extends(UpdateOrganizationBrandingPoliciesPrioritiesPathParams, _super);
    function UpdateOrganizationBrandingPoliciesPrioritiesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], UpdateOrganizationBrandingPoliciesPrioritiesPathParams.prototype, "organizationId", void 0);
    return UpdateOrganizationBrandingPoliciesPrioritiesPathParams;
}(SpeakeasyBase));
export { UpdateOrganizationBrandingPoliciesPrioritiesPathParams };
var UpdateOrganizationBrandingPoliciesPrioritiesRequestBody = /** @class */ (function (_super) {
    __extends(UpdateOrganizationBrandingPoliciesPrioritiesRequestBody, _super);
    function UpdateOrganizationBrandingPoliciesPrioritiesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brandingPolicyIds" }),
        __metadata("design:type", Array)
    ], UpdateOrganizationBrandingPoliciesPrioritiesRequestBody.prototype, "brandingPolicyIds", void 0);
    return UpdateOrganizationBrandingPoliciesPrioritiesRequestBody;
}(SpeakeasyBase));
export { UpdateOrganizationBrandingPoliciesPrioritiesRequestBody };
var UpdateOrganizationBrandingPoliciesPrioritiesRequest = /** @class */ (function (_super) {
    __extends(UpdateOrganizationBrandingPoliciesPrioritiesRequest, _super);
    function UpdateOrganizationBrandingPoliciesPrioritiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateOrganizationBrandingPoliciesPrioritiesPathParams)
    ], UpdateOrganizationBrandingPoliciesPrioritiesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateOrganizationBrandingPoliciesPrioritiesRequestBody)
    ], UpdateOrganizationBrandingPoliciesPrioritiesRequest.prototype, "request", void 0);
    return UpdateOrganizationBrandingPoliciesPrioritiesRequest;
}(SpeakeasyBase));
export { UpdateOrganizationBrandingPoliciesPrioritiesRequest };
var UpdateOrganizationBrandingPoliciesPrioritiesResponse = /** @class */ (function (_super) {
    __extends(UpdateOrganizationBrandingPoliciesPrioritiesResponse, _super);
    function UpdateOrganizationBrandingPoliciesPrioritiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateOrganizationBrandingPoliciesPrioritiesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateOrganizationBrandingPoliciesPrioritiesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateOrganizationBrandingPoliciesPrioritiesResponse.prototype, "updateOrganizationBrandingPoliciesPriorities200ApplicationJsonObject", void 0);
    return UpdateOrganizationBrandingPoliciesPrioritiesResponse;
}(SpeakeasyBase));
export { UpdateOrganizationBrandingPoliciesPrioritiesResponse };
