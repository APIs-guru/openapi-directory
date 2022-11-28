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
import { NotificationConfig } from "./notificationconfig";
import { FhirNotificationConfig } from "./fhirnotificationconfig";
import { SearchConfig } from "./searchconfig";
import { StreamConfig } from "./streamconfig";
import { ValidationConfig } from "./validationconfig";
export var FhirStoreComplexDataTypeReferenceParsingEnum;
(function (FhirStoreComplexDataTypeReferenceParsingEnum) {
    FhirStoreComplexDataTypeReferenceParsingEnum["ComplexDataTypeReferenceParsingUnspecified"] = "COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED";
    FhirStoreComplexDataTypeReferenceParsingEnum["Disabled"] = "DISABLED";
    FhirStoreComplexDataTypeReferenceParsingEnum["Enabled"] = "ENABLED";
})(FhirStoreComplexDataTypeReferenceParsingEnum || (FhirStoreComplexDataTypeReferenceParsingEnum = {}));
export var FhirStoreVersionEnum;
(function (FhirStoreVersionEnum) {
    FhirStoreVersionEnum["VersionUnspecified"] = "VERSION_UNSPECIFIED";
    FhirStoreVersionEnum["Dstu2"] = "DSTU2";
    FhirStoreVersionEnum["Stu3"] = "STU3";
    FhirStoreVersionEnum["R4"] = "R4";
})(FhirStoreVersionEnum || (FhirStoreVersionEnum = {}));
// FhirStore
/**
 * Represents a FHIR store.
**/
var FhirStore = /** @class */ (function (_super) {
    __extends(FhirStore, _super);
    function FhirStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=complexDataTypeReferenceParsing" }),
        __metadata("design:type", String)
    ], FhirStore.prototype, "complexDataTypeReferenceParsing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultSearchHandlingStrict" }),
        __metadata("design:type", Boolean)
    ], FhirStore.prototype, "defaultSearchHandlingStrict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableReferentialIntegrity" }),
        __metadata("design:type", Boolean)
    ], FhirStore.prototype, "disableReferentialIntegrity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableResourceVersioning" }),
        __metadata("design:type", Boolean)
    ], FhirStore.prototype, "disableResourceVersioning", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableUpdateCreate" }),
        __metadata("design:type", Boolean)
    ], FhirStore.prototype, "enableUpdateCreate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], FhirStore.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], FhirStore.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationConfig" }),
        __metadata("design:type", NotificationConfig)
    ], FhirStore.prototype, "notificationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationConfigs", elemType: FhirNotificationConfig }),
        __metadata("design:type", Array)
    ], FhirStore.prototype, "notificationConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchConfig" }),
        __metadata("design:type", SearchConfig)
    ], FhirStore.prototype, "searchConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=streamConfigs", elemType: StreamConfig }),
        __metadata("design:type", Array)
    ], FhirStore.prototype, "streamConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validationConfig" }),
        __metadata("design:type", ValidationConfig)
    ], FhirStore.prototype, "validationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], FhirStore.prototype, "version", void 0);
    return FhirStore;
}(SpeakeasyBase));
export { FhirStore };
