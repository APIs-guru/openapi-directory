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
export var GoogleCloudDocumentaiV1ProcessorStateEnum;
(function (GoogleCloudDocumentaiV1ProcessorStateEnum) {
    GoogleCloudDocumentaiV1ProcessorStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudDocumentaiV1ProcessorStateEnum["Enabled"] = "ENABLED";
    GoogleCloudDocumentaiV1ProcessorStateEnum["Disabled"] = "DISABLED";
    GoogleCloudDocumentaiV1ProcessorStateEnum["Enabling"] = "ENABLING";
    GoogleCloudDocumentaiV1ProcessorStateEnum["Disabling"] = "DISABLING";
    GoogleCloudDocumentaiV1ProcessorStateEnum["Creating"] = "CREATING";
    GoogleCloudDocumentaiV1ProcessorStateEnum["Failed"] = "FAILED";
    GoogleCloudDocumentaiV1ProcessorStateEnum["Deleting"] = "DELETING";
})(GoogleCloudDocumentaiV1ProcessorStateEnum || (GoogleCloudDocumentaiV1ProcessorStateEnum = {}));
// GoogleCloudDocumentaiV1Processor
/**
 * The first-class citizen for Document AI. Each processor defines how to extract structural information from a document.
**/
var GoogleCloudDocumentaiV1Processor = /** @class */ (function (_super) {
    __extends(GoogleCloudDocumentaiV1Processor, _super);
    function GoogleCloudDocumentaiV1Processor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1Processor.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultProcessorVersion" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1Processor.prototype, "defaultProcessorVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1Processor.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kmsKeyName" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1Processor.prototype, "kmsKeyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1Processor.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processEndpoint" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1Processor.prototype, "processEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1Processor.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1Processor.prototype, "type", void 0);
    return GoogleCloudDocumentaiV1Processor;
}(SpeakeasyBase));
export { GoogleCloudDocumentaiV1Processor };
// GoogleCloudDocumentaiV1ProcessorInput
/**
 * The first-class citizen for Document AI. Each processor defines how to extract structural information from a document.
**/
var GoogleCloudDocumentaiV1ProcessorInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDocumentaiV1ProcessorInput, _super);
    function GoogleCloudDocumentaiV1ProcessorInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1ProcessorInput.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultProcessorVersion" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1ProcessorInput.prototype, "defaultProcessorVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1ProcessorInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kmsKeyName" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1ProcessorInput.prototype, "kmsKeyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1ProcessorInput.prototype, "type", void 0);
    return GoogleCloudDocumentaiV1ProcessorInput;
}(SpeakeasyBase));
export { GoogleCloudDocumentaiV1ProcessorInput };
