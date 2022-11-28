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
import { Accessibility } from "./accessibility";
import { Activities } from "./activities";
import { GuestUnitFeatures } from "./guestunitfeatures";
import { Business } from "./business";
import { LivingArea } from "./livingarea";
import { Connectivity } from "./connectivity";
import { Families } from "./families";
import { FoodAndDrink } from "./foodanddrink";
import { GuestUnitType } from "./guestunittype";
import { HealthAndSafety } from "./healthandsafety";
import { Housekeeping } from "./housekeeping";
import { LodgingMetadata } from "./lodgingmetadata";
import { Parking } from "./parking";
import { Pets } from "./pets";
import { Policies } from "./policies";
import { Pools } from "./pools";
import { Property } from "./property";
import { Services } from "./services";
import { Transportation } from "./transportation";
import { Wellness } from "./wellness";
// Lodging
/**
 * Lodging of a location that provides accomodations.
**/
var Lodging = /** @class */ (function (_super) {
    __extends(Lodging, _super);
    function Lodging() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessibility" }),
        __metadata("design:type", Accessibility)
    ], Lodging.prototype, "accessibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activities" }),
        __metadata("design:type", Activities)
    ], Lodging.prototype, "activities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allUnits" }),
        __metadata("design:type", GuestUnitFeatures)
    ], Lodging.prototype, "allUnits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=business" }),
        __metadata("design:type", Business)
    ], Lodging.prototype, "business", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commonLivingArea" }),
        __metadata("design:type", LivingArea)
    ], Lodging.prototype, "commonLivingArea", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectivity" }),
        __metadata("design:type", Connectivity)
    ], Lodging.prototype, "connectivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=families" }),
        __metadata("design:type", Families)
    ], Lodging.prototype, "families", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=foodAndDrink" }),
        __metadata("design:type", FoodAndDrink)
    ], Lodging.prototype, "foodAndDrink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=guestUnits", elemType: GuestUnitType }),
        __metadata("design:type", Array)
    ], Lodging.prototype, "guestUnits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=healthAndSafety" }),
        __metadata("design:type", HealthAndSafety)
    ], Lodging.prototype, "healthAndSafety", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=housekeeping" }),
        __metadata("design:type", Housekeeping)
    ], Lodging.prototype, "housekeeping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", LodgingMetadata)
    ], Lodging.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Lodging.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parking" }),
        __metadata("design:type", Parking)
    ], Lodging.prototype, "parking", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pets" }),
        __metadata("design:type", Pets)
    ], Lodging.prototype, "pets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policies" }),
        __metadata("design:type", Policies)
    ], Lodging.prototype, "policies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pools" }),
        __metadata("design:type", Pools)
    ], Lodging.prototype, "pools", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=property" }),
        __metadata("design:type", Property)
    ], Lodging.prototype, "property", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=services" }),
        __metadata("design:type", Services)
    ], Lodging.prototype, "services", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=someUnits" }),
        __metadata("design:type", GuestUnitFeatures)
    ], Lodging.prototype, "someUnits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transportation" }),
        __metadata("design:type", Transportation)
    ], Lodging.prototype, "transportation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wellness" }),
        __metadata("design:type", Wellness)
    ], Lodging.prototype, "wellness", void 0);
    return Lodging;
}(SpeakeasyBase));
export { Lodging };
