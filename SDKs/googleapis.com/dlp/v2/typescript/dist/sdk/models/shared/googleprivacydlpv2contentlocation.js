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
import { GooglePrivacyDlpV2DocumentLocation } from "./googleprivacydlpv2documentlocation";
import { GooglePrivacyDlpV2ImageLocation } from "./googleprivacydlpv2imagelocation";
import { GooglePrivacyDlpV2MetadataLocation } from "./googleprivacydlpv2metadatalocation";
import { GooglePrivacyDlpV2RecordLocation } from "./googleprivacydlpv2recordlocation";
// GooglePrivacyDlpV2ContentLocation
/**
 * Precise location of the finding within a document, record, image, or metadata container.
**/
var GooglePrivacyDlpV2ContentLocation = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2ContentLocation, _super);
    function GooglePrivacyDlpV2ContentLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerName" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2ContentLocation.prototype, "containerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerTimestamp" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2ContentLocation.prototype, "containerTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerVersion" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2ContentLocation.prototype, "containerVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentLocation" }),
        __metadata("design:type", GooglePrivacyDlpV2DocumentLocation)
    ], GooglePrivacyDlpV2ContentLocation.prototype, "documentLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageLocation" }),
        __metadata("design:type", GooglePrivacyDlpV2ImageLocation)
    ], GooglePrivacyDlpV2ContentLocation.prototype, "imageLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadataLocation" }),
        __metadata("design:type", GooglePrivacyDlpV2MetadataLocation)
    ], GooglePrivacyDlpV2ContentLocation.prototype, "metadataLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recordLocation" }),
        __metadata("design:type", GooglePrivacyDlpV2RecordLocation)
    ], GooglePrivacyDlpV2ContentLocation.prototype, "recordLocation", void 0);
    return GooglePrivacyDlpV2ContentLocation;
}(SpeakeasyBase));
export { GooglePrivacyDlpV2ContentLocation };
