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
import { GoogleCloudDocumentaiV1ProcessorTypeLocationInfo } from "./googleclouddocumentaiv1processortypelocationinfo";
export var GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnum;
(function (GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnum) {
    GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnum["LaunchStageUnspecified"] = "LAUNCH_STAGE_UNSPECIFIED";
    GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnum["Unimplemented"] = "UNIMPLEMENTED";
    GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnum["Prelaunch"] = "PRELAUNCH";
    GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnum["EarlyAccess"] = "EARLY_ACCESS";
    GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnum["Alpha"] = "ALPHA";
    GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnum["Beta"] = "BETA";
    GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnum["Ga"] = "GA";
    GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnum["Deprecated"] = "DEPRECATED";
})(GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnum || (GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnum = {}));
// GoogleCloudDocumentaiV1ProcessorType
/**
 * A processor type is responsible for performing a certain document understanding task on a certain type of document.
**/
var GoogleCloudDocumentaiV1ProcessorType = /** @class */ (function (_super) {
    __extends(GoogleCloudDocumentaiV1ProcessorType, _super);
    function GoogleCloudDocumentaiV1ProcessorType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowCreation" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDocumentaiV1ProcessorType.prototype, "allowCreation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableLocations", elemType: GoogleCloudDocumentaiV1ProcessorTypeLocationInfo }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1ProcessorType.prototype, "availableLocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1ProcessorType.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=launchStage" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1ProcessorType.prototype, "launchStage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1ProcessorType.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1ProcessorType.prototype, "type", void 0);
    return GoogleCloudDocumentaiV1ProcessorType;
}(SpeakeasyBase));
export { GoogleCloudDocumentaiV1ProcessorType };
