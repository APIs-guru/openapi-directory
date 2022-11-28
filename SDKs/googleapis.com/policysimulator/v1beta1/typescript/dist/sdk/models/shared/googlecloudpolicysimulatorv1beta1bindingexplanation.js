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
import { GoogleTypeExpr } from "./googletypeexpr";
import { GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembership } from "./googlecloudpolicysimulatorv1beta1bindingexplanationannotatedmembership";
export var GoogleCloudPolicysimulatorV1beta1BindingExplanationAccessEnum;
(function (GoogleCloudPolicysimulatorV1beta1BindingExplanationAccessEnum) {
    GoogleCloudPolicysimulatorV1beta1BindingExplanationAccessEnum["AccessStateUnspecified"] = "ACCESS_STATE_UNSPECIFIED";
    GoogleCloudPolicysimulatorV1beta1BindingExplanationAccessEnum["Granted"] = "GRANTED";
    GoogleCloudPolicysimulatorV1beta1BindingExplanationAccessEnum["NotGranted"] = "NOT_GRANTED";
    GoogleCloudPolicysimulatorV1beta1BindingExplanationAccessEnum["UnknownConditional"] = "UNKNOWN_CONDITIONAL";
    GoogleCloudPolicysimulatorV1beta1BindingExplanationAccessEnum["UnknownInfoDenied"] = "UNKNOWN_INFO_DENIED";
})(GoogleCloudPolicysimulatorV1beta1BindingExplanationAccessEnum || (GoogleCloudPolicysimulatorV1beta1BindingExplanationAccessEnum = {}));
export var GoogleCloudPolicysimulatorV1beta1BindingExplanationRelevanceEnum;
(function (GoogleCloudPolicysimulatorV1beta1BindingExplanationRelevanceEnum) {
    GoogleCloudPolicysimulatorV1beta1BindingExplanationRelevanceEnum["HeuristicRelevanceUnspecified"] = "HEURISTIC_RELEVANCE_UNSPECIFIED";
    GoogleCloudPolicysimulatorV1beta1BindingExplanationRelevanceEnum["Normal"] = "NORMAL";
    GoogleCloudPolicysimulatorV1beta1BindingExplanationRelevanceEnum["High"] = "HIGH";
})(GoogleCloudPolicysimulatorV1beta1BindingExplanationRelevanceEnum || (GoogleCloudPolicysimulatorV1beta1BindingExplanationRelevanceEnum = {}));
export var GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionEnum;
(function (GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionEnum) {
    GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionEnum["RolePermissionUnspecified"] = "ROLE_PERMISSION_UNSPECIFIED";
    GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionEnum["RolePermissionIncluded"] = "ROLE_PERMISSION_INCLUDED";
    GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionEnum["RolePermissionNotIncluded"] = "ROLE_PERMISSION_NOT_INCLUDED";
    GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionEnum["RolePermissionUnknownInfoDenied"] = "ROLE_PERMISSION_UNKNOWN_INFO_DENIED";
})(GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionEnum || (GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionEnum = {}));
export var GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionRelevanceEnum;
(function (GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionRelevanceEnum) {
    GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionRelevanceEnum["HeuristicRelevanceUnspecified"] = "HEURISTIC_RELEVANCE_UNSPECIFIED";
    GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionRelevanceEnum["Normal"] = "NORMAL";
    GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionRelevanceEnum["High"] = "HIGH";
})(GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionRelevanceEnum || (GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionRelevanceEnum = {}));
// GoogleCloudPolicysimulatorV1beta1BindingExplanation
/**
 * Details about how a binding in a policy affects a principal's ability to use a permission.
**/
var GoogleCloudPolicysimulatorV1beta1BindingExplanation = /** @class */ (function (_super) {
    __extends(GoogleCloudPolicysimulatorV1beta1BindingExplanation, _super);
    function GoogleCloudPolicysimulatorV1beta1BindingExplanation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=access" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicysimulatorV1beta1BindingExplanation.prototype, "access", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=condition" }),
        __metadata("design:type", GoogleTypeExpr)
    ], GoogleCloudPolicysimulatorV1beta1BindingExplanation.prototype, "condition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memberships", elemType: GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembership }),
        __metadata("design:type", Map)
    ], GoogleCloudPolicysimulatorV1beta1BindingExplanation.prototype, "memberships", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relevance" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicysimulatorV1beta1BindingExplanation.prototype, "relevance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicysimulatorV1beta1BindingExplanation.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rolePermission" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicysimulatorV1beta1BindingExplanation.prototype, "rolePermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rolePermissionRelevance" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicysimulatorV1beta1BindingExplanation.prototype, "rolePermissionRelevance", void 0);
    return GoogleCloudPolicysimulatorV1beta1BindingExplanation;
}(SpeakeasyBase));
export { GoogleCloudPolicysimulatorV1beta1BindingExplanation };
