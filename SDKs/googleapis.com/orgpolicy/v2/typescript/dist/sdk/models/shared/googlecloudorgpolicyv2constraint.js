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
import { GoogleCloudOrgpolicyV2ConstraintListConstraint } from "./googlecloudorgpolicyv2constraintlistconstraint";
export var GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnum;
(function (GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnum) {
    GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnum["ConstraintDefaultUnspecified"] = "CONSTRAINT_DEFAULT_UNSPECIFIED";
    GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnum["Allow"] = "ALLOW";
    GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnum["Deny"] = "DENY";
})(GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnum || (GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnum = {}));
// GoogleCloudOrgpolicyV2Constraint
/**
 * A `constraint` describes a way to restrict resource's configuration. For example, you could enforce a constraint that controls which cloud services can be activated across an organization, or whether a Compute Engine instance can have serial port connections established. `Constraints` can be configured by the organization's policy administrator to fit the needs of the organization by setting a `policy` that includes `constraints` at different locations in the organization's resource hierarchy. Policies are inherited down the resource hierarchy from higher levels, but can also be overridden. For details about the inheritance rules please read about `policies`. `Constraints` have a default behavior determined by the `constraint_default` field, which is the enforcement behavior that is used in the absence of a `policy` being defined or inherited for the resource in question.
**/
var GoogleCloudOrgpolicyV2Constraint = /** @class */ (function (_super) {
    __extends(GoogleCloudOrgpolicyV2Constraint, _super);
    function GoogleCloudOrgpolicyV2Constraint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=booleanConstraint" }),
        __metadata("design:type", Map)
    ], GoogleCloudOrgpolicyV2Constraint.prototype, "booleanConstraint", void 0);
    __decorate([
        Metadata({ data: "json, name=constraintDefault" }),
        __metadata("design:type", String)
    ], GoogleCloudOrgpolicyV2Constraint.prototype, "constraintDefault", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudOrgpolicyV2Constraint.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudOrgpolicyV2Constraint.prototype, "displayName", void 0);
    __decorate([
        Metadata({ data: "json, name=listConstraint" }),
        __metadata("design:type", GoogleCloudOrgpolicyV2ConstraintListConstraint)
    ], GoogleCloudOrgpolicyV2Constraint.prototype, "listConstraint", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudOrgpolicyV2Constraint.prototype, "name", void 0);
    return GoogleCloudOrgpolicyV2Constraint;
}(SpeakeasyBase));
export { GoogleCloudOrgpolicyV2Constraint };
