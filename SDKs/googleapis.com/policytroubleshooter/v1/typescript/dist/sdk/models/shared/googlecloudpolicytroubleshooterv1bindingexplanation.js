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
export var GoogleCloudPolicytroubleshooterV1BindingExplanationAccessEnum;
(function (GoogleCloudPolicytroubleshooterV1BindingExplanationAccessEnum) {
    GoogleCloudPolicytroubleshooterV1BindingExplanationAccessEnum["AccessStateUnspecified"] = "ACCESS_STATE_UNSPECIFIED";
    GoogleCloudPolicytroubleshooterV1BindingExplanationAccessEnum["Granted"] = "GRANTED";
    GoogleCloudPolicytroubleshooterV1BindingExplanationAccessEnum["NotGranted"] = "NOT_GRANTED";
    GoogleCloudPolicytroubleshooterV1BindingExplanationAccessEnum["UnknownConditional"] = "UNKNOWN_CONDITIONAL";
    GoogleCloudPolicytroubleshooterV1BindingExplanationAccessEnum["UnknownInfoDenied"] = "UNKNOWN_INFO_DENIED";
})(GoogleCloudPolicytroubleshooterV1BindingExplanationAccessEnum || (GoogleCloudPolicytroubleshooterV1BindingExplanationAccessEnum = {}));
export var GoogleCloudPolicytroubleshooterV1BindingExplanationRelevanceEnum;
(function (GoogleCloudPolicytroubleshooterV1BindingExplanationRelevanceEnum) {
    GoogleCloudPolicytroubleshooterV1BindingExplanationRelevanceEnum["HeuristicRelevanceUnspecified"] = "HEURISTIC_RELEVANCE_UNSPECIFIED";
    GoogleCloudPolicytroubleshooterV1BindingExplanationRelevanceEnum["Normal"] = "NORMAL";
    GoogleCloudPolicytroubleshooterV1BindingExplanationRelevanceEnum["High"] = "HIGH";
})(GoogleCloudPolicytroubleshooterV1BindingExplanationRelevanceEnum || (GoogleCloudPolicytroubleshooterV1BindingExplanationRelevanceEnum = {}));
export var GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionEnum;
(function (GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionEnum) {
    GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionEnum["RolePermissionUnspecified"] = "ROLE_PERMISSION_UNSPECIFIED";
    GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionEnum["RolePermissionIncluded"] = "ROLE_PERMISSION_INCLUDED";
    GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionEnum["RolePermissionNotIncluded"] = "ROLE_PERMISSION_NOT_INCLUDED";
    GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionEnum["RolePermissionUnknownInfoDenied"] = "ROLE_PERMISSION_UNKNOWN_INFO_DENIED";
})(GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionEnum || (GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionEnum = {}));
export var GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionRelevanceEnum;
(function (GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionRelevanceEnum) {
    GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionRelevanceEnum["HeuristicRelevanceUnspecified"] = "HEURISTIC_RELEVANCE_UNSPECIFIED";
    GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionRelevanceEnum["Normal"] = "NORMAL";
    GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionRelevanceEnum["High"] = "HIGH";
})(GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionRelevanceEnum || (GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionRelevanceEnum = {}));
// GoogleCloudPolicytroubleshooterV1BindingExplanation
/**
 * Details about how a binding in a policy affects a principal's ability to use a permission.
**/
var GoogleCloudPolicytroubleshooterV1BindingExplanation = /** @class */ (function (_super) {
    __extends(GoogleCloudPolicytroubleshooterV1BindingExplanation, _super);
    function GoogleCloudPolicytroubleshooterV1BindingExplanation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=access" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicytroubleshooterV1BindingExplanation.prototype, "access", void 0);
    __decorate([
        Metadata({ data: "json, name=condition" }),
        __metadata("design:type", GoogleTypeExpr)
    ], GoogleCloudPolicytroubleshooterV1BindingExplanation.prototype, "condition", void 0);
    __decorate([
        Metadata({ data: "json, name=memberships", elemType: shared.GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership }),
        __metadata("design:type", Map)
    ], GoogleCloudPolicytroubleshooterV1BindingExplanation.prototype, "memberships", void 0);
    __decorate([
        Metadata({ data: "json, name=relevance" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicytroubleshooterV1BindingExplanation.prototype, "relevance", void 0);
    __decorate([
        Metadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicytroubleshooterV1BindingExplanation.prototype, "role", void 0);
    __decorate([
        Metadata({ data: "json, name=rolePermission" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicytroubleshooterV1BindingExplanation.prototype, "rolePermission", void 0);
    __decorate([
        Metadata({ data: "json, name=rolePermissionRelevance" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicytroubleshooterV1BindingExplanation.prototype, "rolePermissionRelevance", void 0);
    return GoogleCloudPolicytroubleshooterV1BindingExplanation;
}(SpeakeasyBase));
export { GoogleCloudPolicytroubleshooterV1BindingExplanation };
