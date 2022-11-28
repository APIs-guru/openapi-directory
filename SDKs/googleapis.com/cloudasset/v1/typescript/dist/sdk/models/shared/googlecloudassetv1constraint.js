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
import { GoogleCloudAssetV1ListConstraint } from "./googlecloudassetv1listconstraint";
export var GoogleCloudAssetV1ConstraintConstraintDefaultEnum;
(function (GoogleCloudAssetV1ConstraintConstraintDefaultEnum) {
    GoogleCloudAssetV1ConstraintConstraintDefaultEnum["ConstraintDefaultUnspecified"] = "CONSTRAINT_DEFAULT_UNSPECIFIED";
    GoogleCloudAssetV1ConstraintConstraintDefaultEnum["Allow"] = "ALLOW";
    GoogleCloudAssetV1ConstraintConstraintDefaultEnum["Deny"] = "DENY";
})(GoogleCloudAssetV1ConstraintConstraintDefaultEnum || (GoogleCloudAssetV1ConstraintConstraintDefaultEnum = {}));
// GoogleCloudAssetV1Constraint
/**
 * The definition of a constraint.
**/
var GoogleCloudAssetV1Constraint = /** @class */ (function (_super) {
    __extends(GoogleCloudAssetV1Constraint, _super);
    function GoogleCloudAssetV1Constraint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=booleanConstraint" }),
        __metadata("design:type", Map)
    ], GoogleCloudAssetV1Constraint.prototype, "booleanConstraint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=constraintDefault" }),
        __metadata("design:type", String)
    ], GoogleCloudAssetV1Constraint.prototype, "constraintDefault", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudAssetV1Constraint.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudAssetV1Constraint.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listConstraint" }),
        __metadata("design:type", GoogleCloudAssetV1ListConstraint)
    ], GoogleCloudAssetV1Constraint.prototype, "listConstraint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudAssetV1Constraint.prototype, "name", void 0);
    return GoogleCloudAssetV1Constraint;
}(SpeakeasyBase));
export { GoogleCloudAssetV1Constraint };
