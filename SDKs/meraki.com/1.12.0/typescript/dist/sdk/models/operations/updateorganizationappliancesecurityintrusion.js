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
var UpdateOrganizationApplianceSecurityIntrusionPathParams = /** @class */ (function (_super) {
    __extends(UpdateOrganizationApplianceSecurityIntrusionPathParams, _super);
    function UpdateOrganizationApplianceSecurityIntrusionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], UpdateOrganizationApplianceSecurityIntrusionPathParams.prototype, "organizationId", void 0);
    return UpdateOrganizationApplianceSecurityIntrusionPathParams;
}(SpeakeasyBase));
export { UpdateOrganizationApplianceSecurityIntrusionPathParams };
var UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules = /** @class */ (function (_super) {
    __extends(UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules, _super);
    function UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ruleId" }),
        __metadata("design:type", String)
    ], UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules.prototype, "ruleId", void 0);
    return UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules;
}(SpeakeasyBase));
export { UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules };
var UpdateOrganizationApplianceSecurityIntrusionRequestBody = /** @class */ (function (_super) {
    __extends(UpdateOrganizationApplianceSecurityIntrusionRequestBody, _super);
    function UpdateOrganizationApplianceSecurityIntrusionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedRules", elemType: UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules }),
        __metadata("design:type", Array)
    ], UpdateOrganizationApplianceSecurityIntrusionRequestBody.prototype, "allowedRules", void 0);
    return UpdateOrganizationApplianceSecurityIntrusionRequestBody;
}(SpeakeasyBase));
export { UpdateOrganizationApplianceSecurityIntrusionRequestBody };
var UpdateOrganizationApplianceSecurityIntrusionRequest = /** @class */ (function (_super) {
    __extends(UpdateOrganizationApplianceSecurityIntrusionRequest, _super);
    function UpdateOrganizationApplianceSecurityIntrusionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateOrganizationApplianceSecurityIntrusionPathParams)
    ], UpdateOrganizationApplianceSecurityIntrusionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateOrganizationApplianceSecurityIntrusionRequestBody)
    ], UpdateOrganizationApplianceSecurityIntrusionRequest.prototype, "request", void 0);
    return UpdateOrganizationApplianceSecurityIntrusionRequest;
}(SpeakeasyBase));
export { UpdateOrganizationApplianceSecurityIntrusionRequest };
var UpdateOrganizationApplianceSecurityIntrusionResponse = /** @class */ (function (_super) {
    __extends(UpdateOrganizationApplianceSecurityIntrusionResponse, _super);
    function UpdateOrganizationApplianceSecurityIntrusionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateOrganizationApplianceSecurityIntrusionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateOrganizationApplianceSecurityIntrusionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateOrganizationApplianceSecurityIntrusionResponse.prototype, "updateOrganizationApplianceSecurityIntrusion200ApplicationJsonObject", void 0);
    return UpdateOrganizationApplianceSecurityIntrusionResponse;
}(SpeakeasyBase));
export { UpdateOrganizationApplianceSecurityIntrusionResponse };
