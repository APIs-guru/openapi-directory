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
export var LocationListLocationTypeEnum;
(function (LocationListLocationTypeEnum) {
    LocationListLocationTypeEnum["TargetingLocationTypeUnspecified"] = "TARGETING_LOCATION_TYPE_UNSPECIFIED";
    LocationListLocationTypeEnum["TargetingLocationTypeProximity"] = "TARGETING_LOCATION_TYPE_PROXIMITY";
    LocationListLocationTypeEnum["TargetingLocationTypeRegional"] = "TARGETING_LOCATION_TYPE_REGIONAL";
})(LocationListLocationTypeEnum || (LocationListLocationTypeEnum = {}));
// LocationList
/**
 * A list of locations used for targeting.
**/
var LocationList = /** @class */ (function (_super) {
    __extends(LocationList, _super);
    function LocationList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", String)
    ], LocationList.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], LocationList.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationListId" }),
        __metadata("design:type", String)
    ], LocationList.prototype, "locationListId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationType" }),
        __metadata("design:type", String)
    ], LocationList.prototype, "locationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], LocationList.prototype, "name", void 0);
    return LocationList;
}(SpeakeasyBase));
export { LocationList };
// LocationListInput
/**
 * A list of locations used for targeting.
**/
var LocationListInput = /** @class */ (function (_super) {
    __extends(LocationListInput, _super);
    function LocationListInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", String)
    ], LocationListInput.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], LocationListInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationType" }),
        __metadata("design:type", String)
    ], LocationListInput.prototype, "locationType", void 0);
    return LocationListInput;
}(SpeakeasyBase));
export { LocationListInput };
