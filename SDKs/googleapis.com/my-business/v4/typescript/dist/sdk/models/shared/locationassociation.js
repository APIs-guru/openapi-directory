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
export var LocationAssociationCategoryEnum;
(function (LocationAssociationCategoryEnum) {
    LocationAssociationCategoryEnum["CategoryUnspecified"] = "CATEGORY_UNSPECIFIED";
    LocationAssociationCategoryEnum["Cover"] = "COVER";
    LocationAssociationCategoryEnum["Profile"] = "PROFILE";
    LocationAssociationCategoryEnum["Logo"] = "LOGO";
    LocationAssociationCategoryEnum["Exterior"] = "EXTERIOR";
    LocationAssociationCategoryEnum["Interior"] = "INTERIOR";
    LocationAssociationCategoryEnum["Product"] = "PRODUCT";
    LocationAssociationCategoryEnum["AtWork"] = "AT_WORK";
    LocationAssociationCategoryEnum["FoodAndDrink"] = "FOOD_AND_DRINK";
    LocationAssociationCategoryEnum["Menu"] = "MENU";
    LocationAssociationCategoryEnum["CommonArea"] = "COMMON_AREA";
    LocationAssociationCategoryEnum["Rooms"] = "ROOMS";
    LocationAssociationCategoryEnum["Teams"] = "TEAMS";
    LocationAssociationCategoryEnum["Additional"] = "ADDITIONAL";
})(LocationAssociationCategoryEnum || (LocationAssociationCategoryEnum = {}));
// LocationAssociation
/**
 * How the media item is associated with its location.
**/
var LocationAssociation = /** @class */ (function (_super) {
    __extends(LocationAssociation, _super);
    function LocationAssociation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], LocationAssociation.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceListItemId" }),
        __metadata("design:type", String)
    ], LocationAssociation.prototype, "priceListItemId", void 0);
    return LocationAssociation;
}(SpeakeasyBase));
export { LocationAssociation };
