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
import { GoogleMapsPlayablelocationsV3SampleAreaFilter } from "./googlemapsplayablelocationsv3sampleareafilter";
import { GoogleMapsPlayablelocationsV3SampleCriterion } from "./googlemapsplayablelocationsv3samplecriterion";
// GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest
/**
 *  Life of a query: - When a game starts in a new location, your game server issues a SamplePlayableLocations request. The request specifies the S2 cell, and contains one or more "criteria" for filtering: - Criterion 0: i locations for long-lived bases, or level 0 monsters, or... - Criterion 1: j locations for short-lived bases, or level 1 monsters, ... - Criterion 2: k locations for random objects. - etc (up to 5 criterion may be specified). `PlayableLocationList` will then contain mutually exclusive lists of `PlayableLocation` objects that satisfy each of the criteria. Think of it as a collection of real-world locations that you can then associate with your game state. Note: These points are impermanent in nature. E.g, parks can close, and places can be removed. The response specifies how long you can expect the playable locations to last. Once they expire, you should query the `samplePlayableLocations` API again to get a fresh view of the real world.
**/
var GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest = /** @class */ (function (_super) {
    __extends(GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest, _super);
    function GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=areaFilter" }),
        __metadata("design:type", GoogleMapsPlayablelocationsV3SampleAreaFilter)
    ], GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest.prototype, "areaFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=criteria", elemType: GoogleMapsPlayablelocationsV3SampleCriterion }),
        __metadata("design:type", Array)
    ], GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest.prototype, "criteria", void 0);
    return GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest;
}(SpeakeasyBase));
export { GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest };
