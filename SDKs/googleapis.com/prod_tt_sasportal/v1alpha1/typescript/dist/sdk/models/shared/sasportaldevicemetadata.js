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
import { SasPortalNrqzValidation } from "./sasportalnrqzvalidation";
// SasPortalDeviceMetadata
/**
 * Device data overridable by both SAS Portal and registration requests.
**/
var SasPortalDeviceMetadata = /** @class */ (function (_super) {
    __extends(SasPortalDeviceMetadata, _super);
    function SasPortalDeviceMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=antennaModel" }),
        __metadata("design:type", String)
    ], SasPortalDeviceMetadata.prototype, "antennaModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commonChannelGroup" }),
        __metadata("design:type", String)
    ], SasPortalDeviceMetadata.prototype, "commonChannelGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interferenceCoordinationGroup" }),
        __metadata("design:type", String)
    ], SasPortalDeviceMetadata.prototype, "interferenceCoordinationGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nrqzValidated" }),
        __metadata("design:type", Boolean)
    ], SasPortalDeviceMetadata.prototype, "nrqzValidated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nrqzValidation" }),
        __metadata("design:type", SasPortalNrqzValidation)
    ], SasPortalDeviceMetadata.prototype, "nrqzValidation", void 0);
    return SasPortalDeviceMetadata;
}(SpeakeasyBase));
export { SasPortalDeviceMetadata };
// SasPortalDeviceMetadataInput
/**
 * Device data overridable by both SAS Portal and registration requests.
**/
var SasPortalDeviceMetadataInput = /** @class */ (function (_super) {
    __extends(SasPortalDeviceMetadataInput, _super);
    function SasPortalDeviceMetadataInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=antennaModel" }),
        __metadata("design:type", String)
    ], SasPortalDeviceMetadataInput.prototype, "antennaModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commonChannelGroup" }),
        __metadata("design:type", String)
    ], SasPortalDeviceMetadataInput.prototype, "commonChannelGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interferenceCoordinationGroup" }),
        __metadata("design:type", String)
    ], SasPortalDeviceMetadataInput.prototype, "interferenceCoordinationGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nrqzValidation" }),
        __metadata("design:type", SasPortalNrqzValidation)
    ], SasPortalDeviceMetadataInput.prototype, "nrqzValidation", void 0);
    return SasPortalDeviceMetadataInput;
}(SpeakeasyBase));
export { SasPortalDeviceMetadataInput };
