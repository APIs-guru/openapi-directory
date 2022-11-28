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
import { GoogleCloudDataplexV1EntityCompatibilityStatus } from "./googleclouddataplexv1entitycompatibilitystatus";
import { GoogleCloudDataplexV1StorageFormat } from "./googleclouddataplexv1storageformat";
import { GoogleCloudDataplexV1Schema } from "./googleclouddataplexv1schema";
import { GoogleCloudDataplexV1StorageFormatInput } from "./googleclouddataplexv1storageformat";
export var GoogleCloudDataplexV1EntitySystemEnum;
(function (GoogleCloudDataplexV1EntitySystemEnum) {
    GoogleCloudDataplexV1EntitySystemEnum["StorageSystemUnspecified"] = "STORAGE_SYSTEM_UNSPECIFIED";
    GoogleCloudDataplexV1EntitySystemEnum["CloudStorage"] = "CLOUD_STORAGE";
    GoogleCloudDataplexV1EntitySystemEnum["Bigquery"] = "BIGQUERY";
})(GoogleCloudDataplexV1EntitySystemEnum || (GoogleCloudDataplexV1EntitySystemEnum = {}));
export var GoogleCloudDataplexV1EntityTypeEnum;
(function (GoogleCloudDataplexV1EntityTypeEnum) {
    GoogleCloudDataplexV1EntityTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    GoogleCloudDataplexV1EntityTypeEnum["Table"] = "TABLE";
    GoogleCloudDataplexV1EntityTypeEnum["Fileset"] = "FILESET";
})(GoogleCloudDataplexV1EntityTypeEnum || (GoogleCloudDataplexV1EntityTypeEnum = {}));
// GoogleCloudDataplexV1Entity
/**
 * Represents tables and fileset metadata contained within a zone.
**/
var GoogleCloudDataplexV1Entity = /** @class */ (function (_super) {
    __extends(GoogleCloudDataplexV1Entity, _super);
    function GoogleCloudDataplexV1Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=asset" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Entity.prototype, "asset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=catalogEntry" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Entity.prototype, "catalogEntry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compatibility" }),
        __metadata("design:type", GoogleCloudDataplexV1EntityCompatibilityStatus)
    ], GoogleCloudDataplexV1Entity.prototype, "compatibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Entity.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataPath" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Entity.prototype, "dataPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataPathPattern" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Entity.prototype, "dataPathPattern", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Entity.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Entity.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Entity.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", GoogleCloudDataplexV1StorageFormat)
    ], GoogleCloudDataplexV1Entity.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Entity.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Entity.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", GoogleCloudDataplexV1Schema)
    ], GoogleCloudDataplexV1Entity.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=system" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Entity.prototype, "system", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Entity.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Entity.prototype, "updateTime", void 0);
    return GoogleCloudDataplexV1Entity;
}(SpeakeasyBase));
export { GoogleCloudDataplexV1Entity };
// GoogleCloudDataplexV1EntityInput
/**
 * Represents tables and fileset metadata contained within a zone.
**/
var GoogleCloudDataplexV1EntityInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDataplexV1EntityInput, _super);
    function GoogleCloudDataplexV1EntityInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=asset" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1EntityInput.prototype, "asset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compatibility" }),
        __metadata("design:type", GoogleCloudDataplexV1EntityCompatibilityStatus)
    ], GoogleCloudDataplexV1EntityInput.prototype, "compatibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataPath" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1EntityInput.prototype, "dataPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataPathPattern" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1EntityInput.prototype, "dataPathPattern", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1EntityInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1EntityInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1EntityInput.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", GoogleCloudDataplexV1StorageFormatInput)
    ], GoogleCloudDataplexV1EntityInput.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1EntityInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", GoogleCloudDataplexV1Schema)
    ], GoogleCloudDataplexV1EntityInput.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=system" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1EntityInput.prototype, "system", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1EntityInput.prototype, "type", void 0);
    return GoogleCloudDataplexV1EntityInput;
}(SpeakeasyBase));
export { GoogleCloudDataplexV1EntityInput };
