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
// PersonalNameGeoOut
/**
 * Classified geo names
**/
var PersonalNameGeoOut = /** @class */ (function (_super) {
    __extends(PersonalNameGeoOut, _super);
    function PersonalNameGeoOut() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=countriesTop" }),
        __metadata("design:type", Array)
    ], PersonalNameGeoOut.prototype, "countriesTop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], PersonalNameGeoOut.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=countryAlt" }),
        __metadata("design:type", String)
    ], PersonalNameGeoOut.prototype, "countryAlt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PersonalNameGeoOut.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PersonalNameGeoOut.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=probabilityAltCalibrated" }),
        __metadata("design:type", Number)
    ], PersonalNameGeoOut.prototype, "probabilityAltCalibrated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=probabilityCalibrated" }),
        __metadata("design:type", Number)
    ], PersonalNameGeoOut.prototype, "probabilityCalibrated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], PersonalNameGeoOut.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=score" }),
        __metadata("design:type", Number)
    ], PersonalNameGeoOut.prototype, "score", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=script" }),
        __metadata("design:type", String)
    ], PersonalNameGeoOut.prototype, "script", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subRegion" }),
        __metadata("design:type", String)
    ], PersonalNameGeoOut.prototype, "subRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topRegion" }),
        __metadata("design:type", String)
    ], PersonalNameGeoOut.prototype, "topRegion", void 0);
    return PersonalNameGeoOut;
}(SpeakeasyBase));
export { PersonalNameGeoOut };
