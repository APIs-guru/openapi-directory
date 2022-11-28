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
var CreateOrganizationAdaptivePolicyAclPathParams = /** @class */ (function (_super) {
    __extends(CreateOrganizationAdaptivePolicyAclPathParams, _super);
    function CreateOrganizationAdaptivePolicyAclPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], CreateOrganizationAdaptivePolicyAclPathParams.prototype, "organizationId", void 0);
    return CreateOrganizationAdaptivePolicyAclPathParams;
}(SpeakeasyBase));
export { CreateOrganizationAdaptivePolicyAclPathParams };
export var CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum;
(function (CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum) {
    CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum["Any"] = "any";
    CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum["Ipv4"] = "ipv4";
    CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum["Ipv6"] = "ipv6";
})(CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum || (CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum = {}));
export var CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum;
(function (CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum) {
    CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum["Allow"] = "allow";
    CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum["Deny"] = "deny";
})(CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum || (CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum = {}));
export var CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum;
(function (CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum) {
    CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum["Tcp"] = "tcp";
    CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum["Udp"] = "udp";
    CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum["Icmp"] = "icmp";
    CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum["Any"] = "any";
})(CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum || (CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum = {}));
var CreateOrganizationAdaptivePolicyAclRequestBodyRules = /** @class */ (function (_super) {
    __extends(CreateOrganizationAdaptivePolicyAclRequestBodyRules, _super);
    function CreateOrganizationAdaptivePolicyAclRequestBodyRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dstPort" }),
        __metadata("design:type", String)
    ], CreateOrganizationAdaptivePolicyAclRequestBodyRules.prototype, "dstPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policy" }),
        __metadata("design:type", String)
    ], CreateOrganizationAdaptivePolicyAclRequestBodyRules.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], CreateOrganizationAdaptivePolicyAclRequestBodyRules.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=srcPort" }),
        __metadata("design:type", String)
    ], CreateOrganizationAdaptivePolicyAclRequestBodyRules.prototype, "srcPort", void 0);
    return CreateOrganizationAdaptivePolicyAclRequestBodyRules;
}(SpeakeasyBase));
export { CreateOrganizationAdaptivePolicyAclRequestBodyRules };
var CreateOrganizationAdaptivePolicyAclRequestBody = /** @class */ (function (_super) {
    __extends(CreateOrganizationAdaptivePolicyAclRequestBody, _super);
    function CreateOrganizationAdaptivePolicyAclRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateOrganizationAdaptivePolicyAclRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipVersion" }),
        __metadata("design:type", String)
    ], CreateOrganizationAdaptivePolicyAclRequestBody.prototype, "ipVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateOrganizationAdaptivePolicyAclRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules", elemType: CreateOrganizationAdaptivePolicyAclRequestBodyRules }),
        __metadata("design:type", Array)
    ], CreateOrganizationAdaptivePolicyAclRequestBody.prototype, "rules", void 0);
    return CreateOrganizationAdaptivePolicyAclRequestBody;
}(SpeakeasyBase));
export { CreateOrganizationAdaptivePolicyAclRequestBody };
var CreateOrganizationAdaptivePolicyAclRequest = /** @class */ (function (_super) {
    __extends(CreateOrganizationAdaptivePolicyAclRequest, _super);
    function CreateOrganizationAdaptivePolicyAclRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateOrganizationAdaptivePolicyAclPathParams)
    ], CreateOrganizationAdaptivePolicyAclRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateOrganizationAdaptivePolicyAclRequestBody)
    ], CreateOrganizationAdaptivePolicyAclRequest.prototype, "request", void 0);
    return CreateOrganizationAdaptivePolicyAclRequest;
}(SpeakeasyBase));
export { CreateOrganizationAdaptivePolicyAclRequest };
var CreateOrganizationAdaptivePolicyAclResponse = /** @class */ (function (_super) {
    __extends(CreateOrganizationAdaptivePolicyAclResponse, _super);
    function CreateOrganizationAdaptivePolicyAclResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateOrganizationAdaptivePolicyAclResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateOrganizationAdaptivePolicyAclResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateOrganizationAdaptivePolicyAclResponse.prototype, "createOrganizationAdaptivePolicyAcl200ApplicationJsonObject", void 0);
    return CreateOrganizationAdaptivePolicyAclResponse;
}(SpeakeasyBase));
export { CreateOrganizationAdaptivePolicyAclResponse };
