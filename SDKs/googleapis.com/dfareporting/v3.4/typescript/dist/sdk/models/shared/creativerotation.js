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
import { CreativeAssignment } from "./creativeassignment";
export var CreativeRotationTypeEnum;
(function (CreativeRotationTypeEnum) {
    CreativeRotationTypeEnum["CreativeRotationTypeSequential"] = "CREATIVE_ROTATION_TYPE_SEQUENTIAL";
    CreativeRotationTypeEnum["CreativeRotationTypeRandom"] = "CREATIVE_ROTATION_TYPE_RANDOM";
})(CreativeRotationTypeEnum || (CreativeRotationTypeEnum = {}));
export var CreativeRotationWeightCalculationStrategyEnum;
(function (CreativeRotationWeightCalculationStrategyEnum) {
    CreativeRotationWeightCalculationStrategyEnum["WeightStrategyEqual"] = "WEIGHT_STRATEGY_EQUAL";
    CreativeRotationWeightCalculationStrategyEnum["WeightStrategyCustom"] = "WEIGHT_STRATEGY_CUSTOM";
    CreativeRotationWeightCalculationStrategyEnum["WeightStrategyHighestCtr"] = "WEIGHT_STRATEGY_HIGHEST_CTR";
    CreativeRotationWeightCalculationStrategyEnum["WeightStrategyOptimized"] = "WEIGHT_STRATEGY_OPTIMIZED";
})(CreativeRotationWeightCalculationStrategyEnum || (CreativeRotationWeightCalculationStrategyEnum = {}));
// CreativeRotation
/**
 * Creative Rotation.
**/
var CreativeRotation = /** @class */ (function (_super) {
    __extends(CreativeRotation, _super);
    function CreativeRotation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeAssignments", elemType: CreativeAssignment }),
        __metadata("design:type", Array)
    ], CreativeRotation.prototype, "creativeAssignments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeOptimizationConfigurationId" }),
        __metadata("design:type", String)
    ], CreativeRotation.prototype, "creativeOptimizationConfigurationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreativeRotation.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=weightCalculationStrategy" }),
        __metadata("design:type", String)
    ], CreativeRotation.prototype, "weightCalculationStrategy", void 0);
    return CreativeRotation;
}(SpeakeasyBase));
export { CreativeRotation };
