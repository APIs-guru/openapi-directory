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
export var SasPortalInstallationParamsHeightTypeEnum;
(function (SasPortalInstallationParamsHeightTypeEnum) {
    SasPortalInstallationParamsHeightTypeEnum["HeightTypeUnspecified"] = "HEIGHT_TYPE_UNSPECIFIED";
    SasPortalInstallationParamsHeightTypeEnum["HeightTypeAgl"] = "HEIGHT_TYPE_AGL";
    SasPortalInstallationParamsHeightTypeEnum["HeightTypeAmsl"] = "HEIGHT_TYPE_AMSL";
})(SasPortalInstallationParamsHeightTypeEnum || (SasPortalInstallationParamsHeightTypeEnum = {}));
// SasPortalInstallationParams
/**
 * Information about the device installation parameters.
**/
var SasPortalInstallationParams = /** @class */ (function (_super) {
    __extends(SasPortalInstallationParams, _super);
    function SasPortalInstallationParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=antennaAzimuth" }),
        __metadata("design:type", Number)
    ], SasPortalInstallationParams.prototype, "antennaAzimuth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=antennaBeamwidth" }),
        __metadata("design:type", Number)
    ], SasPortalInstallationParams.prototype, "antennaBeamwidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=antennaDowntilt" }),
        __metadata("design:type", Number)
    ], SasPortalInstallationParams.prototype, "antennaDowntilt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=antennaGain" }),
        __metadata("design:type", Number)
    ], SasPortalInstallationParams.prototype, "antennaGain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=antennaModel" }),
        __metadata("design:type", String)
    ], SasPortalInstallationParams.prototype, "antennaModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpeCbsdIndication" }),
        __metadata("design:type", Boolean)
    ], SasPortalInstallationParams.prototype, "cpeCbsdIndication", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eirpCapability" }),
        __metadata("design:type", Number)
    ], SasPortalInstallationParams.prototype, "eirpCapability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], SasPortalInstallationParams.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=heightType" }),
        __metadata("design:type", String)
    ], SasPortalInstallationParams.prototype, "heightType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=horizontalAccuracy" }),
        __metadata("design:type", Number)
    ], SasPortalInstallationParams.prototype, "horizontalAccuracy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indoorDeployment" }),
        __metadata("design:type", Boolean)
    ], SasPortalInstallationParams.prototype, "indoorDeployment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], SasPortalInstallationParams.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], SasPortalInstallationParams.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verticalAccuracy" }),
        __metadata("design:type", Number)
    ], SasPortalInstallationParams.prototype, "verticalAccuracy", void 0);
    return SasPortalInstallationParams;
}(SpeakeasyBase));
export { SasPortalInstallationParams };
