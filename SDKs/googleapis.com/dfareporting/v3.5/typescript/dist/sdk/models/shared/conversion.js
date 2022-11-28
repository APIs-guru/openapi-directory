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
import { CustomFloodlightVariable } from "./customfloodlightvariable";
// Conversion
/**
 * A Conversion represents when a user successfully performs a desired action after seeing an ad.
**/
var Conversion = /** @class */ (function (_super) {
    __extends(Conversion, _super);
    function Conversion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=childDirectedTreatment" }),
        __metadata("design:type", Boolean)
    ], Conversion.prototype, "childDirectedTreatment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customVariables", elemType: CustomFloodlightVariable }),
        __metadata("design:type", Array)
    ], Conversion.prototype, "customVariables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dclid" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "dclid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptedUserId" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "encryptedUserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptedUserIdCandidates" }),
        __metadata("design:type", Array)
    ], Conversion.prototype, "encryptedUserIdCandidates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floodlightActivityId" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "floodlightActivityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floodlightConfigurationId" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "floodlightConfigurationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gclid" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "gclid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limitAdTracking" }),
        __metadata("design:type", Boolean)
    ], Conversion.prototype, "limitAdTracking", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matchId" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "matchId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobileDeviceId" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "mobileDeviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nonPersonalizedAd" }),
        __metadata("design:type", Boolean)
    ], Conversion.prototype, "nonPersonalizedAd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ordinal" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "ordinal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantity" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "quantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestampMicros" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "timestampMicros", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treatmentForUnderage" }),
        __metadata("design:type", Boolean)
    ], Conversion.prototype, "treatmentForUnderage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], Conversion.prototype, "value", void 0);
    return Conversion;
}(SpeakeasyBase));
export { Conversion };
