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
export var PetsCatsAllowedExceptionEnum;
(function (PetsCatsAllowedExceptionEnum) {
    PetsCatsAllowedExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PetsCatsAllowedExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PetsCatsAllowedExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PetsCatsAllowedExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PetsCatsAllowedExceptionEnum || (PetsCatsAllowedExceptionEnum = {}));
export var PetsDogsAllowedExceptionEnum;
(function (PetsDogsAllowedExceptionEnum) {
    PetsDogsAllowedExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PetsDogsAllowedExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PetsDogsAllowedExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PetsDogsAllowedExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PetsDogsAllowedExceptionEnum || (PetsDogsAllowedExceptionEnum = {}));
export var PetsPetsAllowedExceptionEnum;
(function (PetsPetsAllowedExceptionEnum) {
    PetsPetsAllowedExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PetsPetsAllowedExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PetsPetsAllowedExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PetsPetsAllowedExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PetsPetsAllowedExceptionEnum || (PetsPetsAllowedExceptionEnum = {}));
export var PetsPetsAllowedFreeExceptionEnum;
(function (PetsPetsAllowedFreeExceptionEnum) {
    PetsPetsAllowedFreeExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PetsPetsAllowedFreeExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PetsPetsAllowedFreeExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PetsPetsAllowedFreeExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PetsPetsAllowedFreeExceptionEnum || (PetsPetsAllowedFreeExceptionEnum = {}));
// Pets
/**
 * Policies regarding guest-owned animals.
**/
var Pets = /** @class */ (function (_super) {
    __extends(Pets, _super);
    function Pets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=catsAllowed" }),
        __metadata("design:type", Boolean)
    ], Pets.prototype, "catsAllowed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=catsAllowedException" }),
        __metadata("design:type", String)
    ], Pets.prototype, "catsAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dogsAllowed" }),
        __metadata("design:type", Boolean)
    ], Pets.prototype, "dogsAllowed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dogsAllowedException" }),
        __metadata("design:type", String)
    ], Pets.prototype, "dogsAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=petsAllowed" }),
        __metadata("design:type", Boolean)
    ], Pets.prototype, "petsAllowed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=petsAllowedException" }),
        __metadata("design:type", String)
    ], Pets.prototype, "petsAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=petsAllowedFree" }),
        __metadata("design:type", Boolean)
    ], Pets.prototype, "petsAllowedFree", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=petsAllowedFreeException" }),
        __metadata("design:type", String)
    ], Pets.prototype, "petsAllowedFreeException", void 0);
    return Pets;
}(SpeakeasyBase));
export { Pets };
