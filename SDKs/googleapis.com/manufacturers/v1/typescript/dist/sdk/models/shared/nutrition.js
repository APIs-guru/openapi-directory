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
import { FloatUnit } from "./floatunit";
import { VoluntaryNutritionFact } from "./voluntarynutritionfact";
var Nutrition = /** @class */ (function (_super) {
    __extends(Nutrition, _super);
    function Nutrition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addedSugars" }),
        __metadata("design:type", FloatUnit)
    ], Nutrition.prototype, "addedSugars", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addedSugarsDailyPercentage" }),
        __metadata("design:type", Number)
    ], Nutrition.prototype, "addedSugarsDailyPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=calcium" }),
        __metadata("design:type", FloatUnit)
    ], Nutrition.prototype, "calcium", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=calciumDailyPercentage" }),
        __metadata("design:type", Number)
    ], Nutrition.prototype, "calciumDailyPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cholesterol" }),
        __metadata("design:type", FloatUnit)
    ], Nutrition.prototype, "cholesterol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cholesterolDailyPercentage" }),
        __metadata("design:type", Number)
    ], Nutrition.prototype, "cholesterolDailyPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dietaryFiber" }),
        __metadata("design:type", FloatUnit)
    ], Nutrition.prototype, "dietaryFiber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dietaryFiberDailyPercentage" }),
        __metadata("design:type", Number)
    ], Nutrition.prototype, "dietaryFiberDailyPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=energy" }),
        __metadata("design:type", FloatUnit)
    ], Nutrition.prototype, "energy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=energyFromFat" }),
        __metadata("design:type", FloatUnit)
    ], Nutrition.prototype, "energyFromFat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=folateDailyPercentage" }),
        __metadata("design:type", Number)
    ], Nutrition.prototype, "folateDailyPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=folateFolicAcid" }),
        __metadata("design:type", FloatUnit)
    ], Nutrition.prototype, "folateFolicAcid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=folateMcgDfe" }),
        __metadata("design:type", Number)
    ], Nutrition.prototype, "folateMcgDfe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iron" }),
        __metadata("design:type", FloatUnit)
    ], Nutrition.prototype, "iron", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ironDailyPercentage" }),
        __metadata("design:type", Number)
    ], Nutrition.prototype, "ironDailyPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monounsaturatedFat" }),
        __metadata("design:type", FloatUnit)
    ], Nutrition.prototype, "monounsaturatedFat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nutritionFactMeasure" }),
        __metadata("design:type", String)
    ], Nutrition.prototype, "nutritionFactMeasure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=polyols" }),
        __metadata("design:type", FloatUnit)
    ], Nutrition.prototype, "polyols", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=polyunsaturatedFat" }),
        __metadata("design:type", FloatUnit)
    ], Nutrition.prototype, "polyunsaturatedFat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=potassium" }),
        __metadata("design:type", FloatUnit)
    ], Nutrition.prototype, "potassium", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=potassiumDailyPercentage" }),
        __metadata("design:type", Number)
    ], Nutrition.prototype, "potassiumDailyPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preparedSizeDescription" }),
        __metadata("design:type", String)
    ], Nutrition.prototype, "preparedSizeDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protein" }),
        __metadata("design:type", FloatUnit)
    ], Nutrition.prototype, "protein", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proteinDailyPercentage" }),
        __metadata("design:type", Number)
    ], Nutrition.prototype, "proteinDailyPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=saturatedFat" }),
        __metadata("design:type", FloatUnit)
    ], Nutrition.prototype, "saturatedFat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=saturatedFatDailyPercentage" }),
        __metadata("design:type", Number)
    ], Nutrition.prototype, "saturatedFatDailyPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servingSizeDescription" }),
        __metadata("design:type", String)
    ], Nutrition.prototype, "servingSizeDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servingSizeMeasure" }),
        __metadata("design:type", FloatUnit)
    ], Nutrition.prototype, "servingSizeMeasure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servingsPerContainer" }),
        __metadata("design:type", String)
    ], Nutrition.prototype, "servingsPerContainer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sodium" }),
        __metadata("design:type", FloatUnit)
    ], Nutrition.prototype, "sodium", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sodiumDailyPercentage" }),
        __metadata("design:type", Number)
    ], Nutrition.prototype, "sodiumDailyPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starch" }),
        __metadata("design:type", FloatUnit)
    ], Nutrition.prototype, "starch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCarbohydrate" }),
        __metadata("design:type", FloatUnit)
    ], Nutrition.prototype, "totalCarbohydrate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCarbohydrateDailyPercentage" }),
        __metadata("design:type", Number)
    ], Nutrition.prototype, "totalCarbohydrateDailyPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalFat" }),
        __metadata("design:type", FloatUnit)
    ], Nutrition.prototype, "totalFat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalFatDailyPercentage" }),
        __metadata("design:type", Number)
    ], Nutrition.prototype, "totalFatDailyPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalSugars" }),
        __metadata("design:type", FloatUnit)
    ], Nutrition.prototype, "totalSugars", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalSugarsDailyPercentage" }),
        __metadata("design:type", Number)
    ], Nutrition.prototype, "totalSugarsDailyPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transFat" }),
        __metadata("design:type", FloatUnit)
    ], Nutrition.prototype, "transFat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transFatDailyPercentage" }),
        __metadata("design:type", Number)
    ], Nutrition.prototype, "transFatDailyPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vitaminD" }),
        __metadata("design:type", FloatUnit)
    ], Nutrition.prototype, "vitaminD", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vitaminDDailyPercentage" }),
        __metadata("design:type", Number)
    ], Nutrition.prototype, "vitaminDDailyPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voluntaryNutritionFact", elemType: VoluntaryNutritionFact }),
        __metadata("design:type", Array)
    ], Nutrition.prototype, "voluntaryNutritionFact", void 0);
    return Nutrition;
}(SpeakeasyBase));
export { Nutrition };
