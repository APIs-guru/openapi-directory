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
// GoogleTypePostalAddress
/**
 * Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478
**/
var GoogleTypePostalAddress = /** @class */ (function (_super) {
    __extends(GoogleTypePostalAddress, _super);
    function GoogleTypePostalAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressLines" }),
        __metadata("design:type", Array)
    ], GoogleTypePostalAddress.prototype, "addressLines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=administrativeArea" }),
        __metadata("design:type", String)
    ], GoogleTypePostalAddress.prototype, "administrativeArea", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleTypePostalAddress.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locality" }),
        __metadata("design:type", String)
    ], GoogleTypePostalAddress.prototype, "locality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization" }),
        __metadata("design:type", String)
    ], GoogleTypePostalAddress.prototype, "organization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postalCode" }),
        __metadata("design:type", String)
    ], GoogleTypePostalAddress.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipients" }),
        __metadata("design:type", Array)
    ], GoogleTypePostalAddress.prototype, "recipients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regionCode" }),
        __metadata("design:type", String)
    ], GoogleTypePostalAddress.prototype, "regionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revision" }),
        __metadata("design:type", Number)
    ], GoogleTypePostalAddress.prototype, "revision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortingCode" }),
        __metadata("design:type", String)
    ], GoogleTypePostalAddress.prototype, "sortingCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sublocality" }),
        __metadata("design:type", String)
    ], GoogleTypePostalAddress.prototype, "sublocality", void 0);
    return GoogleTypePostalAddress;
}(SpeakeasyBase));
export { GoogleTypePostalAddress };
