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
export var GoogleCloudAssetV1CustomConstraintActionTypeEnum;
(function (GoogleCloudAssetV1CustomConstraintActionTypeEnum) {
    GoogleCloudAssetV1CustomConstraintActionTypeEnum["ActionTypeUnspecified"] = "ACTION_TYPE_UNSPECIFIED";
    GoogleCloudAssetV1CustomConstraintActionTypeEnum["Allow"] = "ALLOW";
    GoogleCloudAssetV1CustomConstraintActionTypeEnum["Deny"] = "DENY";
})(GoogleCloudAssetV1CustomConstraintActionTypeEnum || (GoogleCloudAssetV1CustomConstraintActionTypeEnum = {}));
export var GoogleCloudAssetV1CustomConstraintMethodTypesEnum;
(function (GoogleCloudAssetV1CustomConstraintMethodTypesEnum) {
    GoogleCloudAssetV1CustomConstraintMethodTypesEnum["MethodTypeUnspecified"] = "METHOD_TYPE_UNSPECIFIED";
    GoogleCloudAssetV1CustomConstraintMethodTypesEnum["Create"] = "CREATE";
    GoogleCloudAssetV1CustomConstraintMethodTypesEnum["Update"] = "UPDATE";
    GoogleCloudAssetV1CustomConstraintMethodTypesEnum["Delete"] = "DELETE";
})(GoogleCloudAssetV1CustomConstraintMethodTypesEnum || (GoogleCloudAssetV1CustomConstraintMethodTypesEnum = {}));
// GoogleCloudAssetV1CustomConstraint
/**
 * The definition of a custom constraint.
**/
var GoogleCloudAssetV1CustomConstraint = /** @class */ (function (_super) {
    __extends(GoogleCloudAssetV1CustomConstraint, _super);
    function GoogleCloudAssetV1CustomConstraint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actionType" }),
        __metadata("design:type", String)
    ], GoogleCloudAssetV1CustomConstraint.prototype, "actionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=condition" }),
        __metadata("design:type", String)
    ], GoogleCloudAssetV1CustomConstraint.prototype, "condition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudAssetV1CustomConstraint.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudAssetV1CustomConstraint.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=methodTypes" }),
        __metadata("design:type", Array)
    ], GoogleCloudAssetV1CustomConstraint.prototype, "methodTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudAssetV1CustomConstraint.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceTypes" }),
        __metadata("design:type", Array)
    ], GoogleCloudAssetV1CustomConstraint.prototype, "resourceTypes", void 0);
    return GoogleCloudAssetV1CustomConstraint;
}(SpeakeasyBase));
export { GoogleCloudAssetV1CustomConstraint };
