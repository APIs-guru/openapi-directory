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
import * as shared from "../shared";
import { GoogleTypeExpr } from "./googletypeexpr";
export var GoogleCloudPolicytroubleshooterV1betaBindingExplanationAccessEnum;
(function (GoogleCloudPolicytroubleshooterV1betaBindingExplanationAccessEnum) {
    GoogleCloudPolicytroubleshooterV1betaBindingExplanationAccessEnum["AccessStateUnspecified"] = "ACCESS_STATE_UNSPECIFIED";
    GoogleCloudPolicytroubleshooterV1betaBindingExplanationAccessEnum["Granted"] = "GRANTED";
    GoogleCloudPolicytroubleshooterV1betaBindingExplanationAccessEnum["NotGranted"] = "NOT_GRANTED";
    GoogleCloudPolicytroubleshooterV1betaBindingExplanationAccessEnum["UnknownConditional"] = "UNKNOWN_CONDITIONAL";
    GoogleCloudPolicytroubleshooterV1betaBindingExplanationAccessEnum["UnknownInfoDenied"] = "UNKNOWN_INFO_DENIED";
})(GoogleCloudPolicytroubleshooterV1betaBindingExplanationAccessEnum || (GoogleCloudPolicytroubleshooterV1betaBindingExplanationAccessEnum = {}));
export var GoogleCloudPolicytroubleshooterV1betaBindingExplanationRelevanceEnum;
(function (GoogleCloudPolicytroubleshooterV1betaBindingExplanationRelevanceEnum) {
    GoogleCloudPolicytroubleshooterV1betaBindingExplanationRelevanceEnum["HeuristicRelevanceUnspecified"] = "HEURISTIC_RELEVANCE_UNSPECIFIED";
    GoogleCloudPolicytroubleshooterV1betaBindingExplanationRelevanceEnum["Normal"] = "NORMAL";
    GoogleCloudPolicytroubleshooterV1betaBindingExplanationRelevanceEnum["High"] = "HIGH";
})(GoogleCloudPolicytroubleshooterV1betaBindingExplanationRelevanceEnum || (GoogleCloudPolicytroubleshooterV1betaBindingExplanationRelevanceEnum = {}));
export var GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionEnum;
(function (GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionEnum) {
    GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionEnum["RolePermissionUnspecified"] = "ROLE_PERMISSION_UNSPECIFIED";
    GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionEnum["RolePermissionIncluded"] = "ROLE_PERMISSION_INCLUDED";
    GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionEnum["RolePermissionNotIncluded"] = "ROLE_PERMISSION_NOT_INCLUDED";
    GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionEnum["RolePermissionUnknownInfoDenied"] = "ROLE_PERMISSION_UNKNOWN_INFO_DENIED";
})(GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionEnum || (GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionEnum = {}));
export var GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionRelevanceEnum;
(function (GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionRelevanceEnum) {
    GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionRelevanceEnum["HeuristicRelevanceUnspecified"] = "HEURISTIC_RELEVANCE_UNSPECIFIED";
    GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionRelevanceEnum["Normal"] = "NORMAL";
    GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionRelevanceEnum["High"] = "HIGH";
})(GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionRelevanceEnum || (GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionRelevanceEnum = {}));
// GoogleCloudPolicytroubleshooterV1betaBindingExplanation
/**
 * Details about how a binding in a policy affects a member's ability to use a permission.
**/
var GoogleCloudPolicytroubleshooterV1betaBindingExplanation = /** @class */ (function (_super) {
    __extends(GoogleCloudPolicytroubleshooterV1betaBindingExplanation, _super);
    function GoogleCloudPolicytroubleshooterV1betaBindingExplanation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=access" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicytroubleshooterV1betaBindingExplanation.prototype, "access", void 0);
    __decorate([
        Metadata({ data: "json, name=condition" }),
        __metadata("design:type", GoogleTypeExpr)
    ], GoogleCloudPolicytroubleshooterV1betaBindingExplanation.prototype, "condition", void 0);
    __decorate([
        Metadata({ data: "json, name=memberships", elemType: shared.GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership }),
        __metadata("design:type", Map)
    ], GoogleCloudPolicytroubleshooterV1betaBindingExplanation.prototype, "memberships", void 0);
    __decorate([
        Metadata({ data: "json, name=relevance" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicytroubleshooterV1betaBindingExplanation.prototype, "relevance", void 0);
    __decorate([
        Metadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicytroubleshooterV1betaBindingExplanation.prototype, "role", void 0);
    __decorate([
        Metadata({ data: "json, name=rolePermission" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicytroubleshooterV1betaBindingExplanation.prototype, "rolePermission", void 0);
    __decorate([
        Metadata({ data: "json, name=rolePermissionRelevance" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicytroubleshooterV1betaBindingExplanation.prototype, "rolePermissionRelevance", void 0);
    return GoogleCloudPolicytroubleshooterV1betaBindingExplanation;
}(SpeakeasyBase));
export { GoogleCloudPolicytroubleshooterV1betaBindingExplanation };
