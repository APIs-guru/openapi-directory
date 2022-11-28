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
export var GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum;
(function (GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum) {
    GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum["ActionTypeUnspecified"] = "ACTION_TYPE_UNSPECIFIED";
    GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum["Allow"] = "ALLOW";
    GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum["Deny"] = "DENY";
})(GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum || (GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum = {}));
export var GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum;
(function (GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum) {
    GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum["MethodTypeUnspecified"] = "METHOD_TYPE_UNSPECIFIED";
    GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum["Create"] = "CREATE";
    GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum["Update"] = "UPDATE";
    GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum["Delete"] = "DELETE";
})(GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum || (GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum = {}));
// GoogleCloudOrgpolicyV2CustomConstraint
/**
 * A custom constraint defined by customers which can *only* be applied to the given resource types and organization. By creating a custom constraint, customers can applied policies of this custom constraint. *Creating a custom constraint itself does NOT apply any policy enforcement*.
**/
var GoogleCloudOrgpolicyV2CustomConstraint = /** @class */ (function (_super) {
    __extends(GoogleCloudOrgpolicyV2CustomConstraint, _super);
    function GoogleCloudOrgpolicyV2CustomConstraint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actionType" }),
        __metadata("design:type", String)
    ], GoogleCloudOrgpolicyV2CustomConstraint.prototype, "actionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=condition" }),
        __metadata("design:type", String)
    ], GoogleCloudOrgpolicyV2CustomConstraint.prototype, "condition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudOrgpolicyV2CustomConstraint.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudOrgpolicyV2CustomConstraint.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=methodTypes" }),
        __metadata("design:type", Array)
    ], GoogleCloudOrgpolicyV2CustomConstraint.prototype, "methodTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudOrgpolicyV2CustomConstraint.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceTypes" }),
        __metadata("design:type", Array)
    ], GoogleCloudOrgpolicyV2CustomConstraint.prototype, "resourceTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudOrgpolicyV2CustomConstraint.prototype, "updateTime", void 0);
    return GoogleCloudOrgpolicyV2CustomConstraint;
}(SpeakeasyBase));
export { GoogleCloudOrgpolicyV2CustomConstraint };
// GoogleCloudOrgpolicyV2CustomConstraintInput
/**
 * A custom constraint defined by customers which can *only* be applied to the given resource types and organization. By creating a custom constraint, customers can applied policies of this custom constraint. *Creating a custom constraint itself does NOT apply any policy enforcement*.
**/
var GoogleCloudOrgpolicyV2CustomConstraintInput = /** @class */ (function (_super) {
    __extends(GoogleCloudOrgpolicyV2CustomConstraintInput, _super);
    function GoogleCloudOrgpolicyV2CustomConstraintInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actionType" }),
        __metadata("design:type", String)
    ], GoogleCloudOrgpolicyV2CustomConstraintInput.prototype, "actionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=condition" }),
        __metadata("design:type", String)
    ], GoogleCloudOrgpolicyV2CustomConstraintInput.prototype, "condition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudOrgpolicyV2CustomConstraintInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudOrgpolicyV2CustomConstraintInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=methodTypes" }),
        __metadata("design:type", Array)
    ], GoogleCloudOrgpolicyV2CustomConstraintInput.prototype, "methodTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudOrgpolicyV2CustomConstraintInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceTypes" }),
        __metadata("design:type", Array)
    ], GoogleCloudOrgpolicyV2CustomConstraintInput.prototype, "resourceTypes", void 0);
    return GoogleCloudOrgpolicyV2CustomConstraintInput;
}(SpeakeasyBase));
export { GoogleCloudOrgpolicyV2CustomConstraintInput };
