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
import { OsPolicyAssignmentInstanceFilter } from "./ospolicyassignmentinstancefilter";
import { OsPolicy } from "./ospolicy";
import { OsPolicyAssignmentRollout } from "./ospolicyassignmentrollout";
export var OsPolicyAssignmentRolloutStateEnum;
(function (OsPolicyAssignmentRolloutStateEnum) {
    OsPolicyAssignmentRolloutStateEnum["RolloutStateUnspecified"] = "ROLLOUT_STATE_UNSPECIFIED";
    OsPolicyAssignmentRolloutStateEnum["InProgress"] = "IN_PROGRESS";
    OsPolicyAssignmentRolloutStateEnum["Cancelling"] = "CANCELLING";
    OsPolicyAssignmentRolloutStateEnum["Cancelled"] = "CANCELLED";
    OsPolicyAssignmentRolloutStateEnum["Succeeded"] = "SUCCEEDED";
})(OsPolicyAssignmentRolloutStateEnum || (OsPolicyAssignmentRolloutStateEnum = {}));
// OsPolicyAssignment
/**
 * OS policy assignment is an API resource that is used to apply a set of OS policies to a dynamically targeted group of Compute Engine VM instances. An OS policy is used to define the desired state configuration for a Compute Engine VM instance through a set of configuration resources that provide capabilities such as installing or removing software packages, or executing a script. For more information about the OS policy resource definitions and examples, see [OS policy and OS policy assignment](https://cloud.google.com/compute/docs/os-configuration-management/working-with-os-policies).
**/
var OsPolicyAssignment = /** @class */ (function (_super) {
    __extends(OsPolicyAssignment, _super);
    function OsPolicyAssignment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baseline" }),
        __metadata("design:type", Boolean)
    ], OsPolicyAssignment.prototype, "baseline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], OsPolicyAssignment.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], OsPolicyAssignment.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], OsPolicyAssignment.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceFilter" }),
        __metadata("design:type", OsPolicyAssignmentInstanceFilter)
    ], OsPolicyAssignment.prototype, "instanceFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OsPolicyAssignment.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=osPolicies", elemType: OsPolicy }),
        __metadata("design:type", Array)
    ], OsPolicyAssignment.prototype, "osPolicies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reconciling" }),
        __metadata("design:type", Boolean)
    ], OsPolicyAssignment.prototype, "reconciling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionCreateTime" }),
        __metadata("design:type", String)
    ], OsPolicyAssignment.prototype, "revisionCreateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionId" }),
        __metadata("design:type", String)
    ], OsPolicyAssignment.prototype, "revisionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rollout" }),
        __metadata("design:type", OsPolicyAssignmentRollout)
    ], OsPolicyAssignment.prototype, "rollout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rolloutState" }),
        __metadata("design:type", String)
    ], OsPolicyAssignment.prototype, "rolloutState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], OsPolicyAssignment.prototype, "uid", void 0);
    return OsPolicyAssignment;
}(SpeakeasyBase));
export { OsPolicyAssignment };
// OsPolicyAssignmentInput
/**
 * OS policy assignment is an API resource that is used to apply a set of OS policies to a dynamically targeted group of Compute Engine VM instances. An OS policy is used to define the desired state configuration for a Compute Engine VM instance through a set of configuration resources that provide capabilities such as installing or removing software packages, or executing a script. For more information about the OS policy resource definitions and examples, see [OS policy and OS policy assignment](https://cloud.google.com/compute/docs/os-configuration-management/working-with-os-policies).
**/
var OsPolicyAssignmentInput = /** @class */ (function (_super) {
    __extends(OsPolicyAssignmentInput, _super);
    function OsPolicyAssignmentInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], OsPolicyAssignmentInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], OsPolicyAssignmentInput.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceFilter" }),
        __metadata("design:type", OsPolicyAssignmentInstanceFilter)
    ], OsPolicyAssignmentInput.prototype, "instanceFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OsPolicyAssignmentInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=osPolicies", elemType: OsPolicy }),
        __metadata("design:type", Array)
    ], OsPolicyAssignmentInput.prototype, "osPolicies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rollout" }),
        __metadata("design:type", OsPolicyAssignmentRollout)
    ], OsPolicyAssignmentInput.prototype, "rollout", void 0);
    return OsPolicyAssignmentInput;
}(SpeakeasyBase));
export { OsPolicyAssignmentInput };
