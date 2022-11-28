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
import { SamlSsoInfo } from "./samlssoinfo";
import { SignInBehavior } from "./signinbehavior";
export var InboundSsoAssignmentSsoModeEnum;
(function (InboundSsoAssignmentSsoModeEnum) {
    InboundSsoAssignmentSsoModeEnum["SsoModeUnspecified"] = "SSO_MODE_UNSPECIFIED";
    InboundSsoAssignmentSsoModeEnum["SsoOff"] = "SSO_OFF";
    InboundSsoAssignmentSsoModeEnum["SamlSso"] = "SAML_SSO";
    InboundSsoAssignmentSsoModeEnum["DomainWideSamlIfEnabled"] = "DOMAIN_WIDE_SAML_IF_ENABLED";
})(InboundSsoAssignmentSsoModeEnum || (InboundSsoAssignmentSsoModeEnum = {}));
// InboundSsoAssignment
/**
 * Targets with "set" SSO assignments and their respective assignments.
**/
var InboundSsoAssignment = /** @class */ (function (_super) {
    __extends(InboundSsoAssignment, _super);
    function InboundSsoAssignment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customer" }),
        __metadata("design:type", String)
    ], InboundSsoAssignment.prototype, "customer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], InboundSsoAssignment.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rank" }),
        __metadata("design:type", Number)
    ], InboundSsoAssignment.prototype, "rank", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=samlSsoInfo" }),
        __metadata("design:type", SamlSsoInfo)
    ], InboundSsoAssignment.prototype, "samlSsoInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signInBehavior" }),
        __metadata("design:type", SignInBehavior)
    ], InboundSsoAssignment.prototype, "signInBehavior", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssoMode" }),
        __metadata("design:type", String)
    ], InboundSsoAssignment.prototype, "ssoMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetGroup" }),
        __metadata("design:type", String)
    ], InboundSsoAssignment.prototype, "targetGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetOrgUnit" }),
        __metadata("design:type", String)
    ], InboundSsoAssignment.prototype, "targetOrgUnit", void 0);
    return InboundSsoAssignment;
}(SpeakeasyBase));
export { InboundSsoAssignment };
// InboundSsoAssignmentInput
/**
 * Targets with "set" SSO assignments and their respective assignments.
**/
var InboundSsoAssignmentInput = /** @class */ (function (_super) {
    __extends(InboundSsoAssignmentInput, _super);
    function InboundSsoAssignmentInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customer" }),
        __metadata("design:type", String)
    ], InboundSsoAssignmentInput.prototype, "customer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rank" }),
        __metadata("design:type", Number)
    ], InboundSsoAssignmentInput.prototype, "rank", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=samlSsoInfo" }),
        __metadata("design:type", SamlSsoInfo)
    ], InboundSsoAssignmentInput.prototype, "samlSsoInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signInBehavior" }),
        __metadata("design:type", SignInBehavior)
    ], InboundSsoAssignmentInput.prototype, "signInBehavior", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssoMode" }),
        __metadata("design:type", String)
    ], InboundSsoAssignmentInput.prototype, "ssoMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetGroup" }),
        __metadata("design:type", String)
    ], InboundSsoAssignmentInput.prototype, "targetGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetOrgUnit" }),
        __metadata("design:type", String)
    ], InboundSsoAssignmentInput.prototype, "targetOrgUnit", void 0);
    return InboundSsoAssignmentInput;
}(SpeakeasyBase));
export { InboundSsoAssignmentInput };
