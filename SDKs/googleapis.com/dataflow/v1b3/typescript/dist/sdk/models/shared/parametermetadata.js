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
export var ParameterMetadataParamTypeEnum;
(function (ParameterMetadataParamTypeEnum) {
    ParameterMetadataParamTypeEnum["Default"] = "DEFAULT";
    ParameterMetadataParamTypeEnum["Text"] = "TEXT";
    ParameterMetadataParamTypeEnum["GcsReadBucket"] = "GCS_READ_BUCKET";
    ParameterMetadataParamTypeEnum["GcsWriteBucket"] = "GCS_WRITE_BUCKET";
    ParameterMetadataParamTypeEnum["GcsReadFile"] = "GCS_READ_FILE";
    ParameterMetadataParamTypeEnum["GcsWriteFile"] = "GCS_WRITE_FILE";
    ParameterMetadataParamTypeEnum["GcsReadFolder"] = "GCS_READ_FOLDER";
    ParameterMetadataParamTypeEnum["GcsWriteFolder"] = "GCS_WRITE_FOLDER";
    ParameterMetadataParamTypeEnum["PubsubTopic"] = "PUBSUB_TOPIC";
    ParameterMetadataParamTypeEnum["PubsubSubscription"] = "PUBSUB_SUBSCRIPTION";
})(ParameterMetadataParamTypeEnum || (ParameterMetadataParamTypeEnum = {}));
// ParameterMetadata
/**
 * Metadata for a specific parameter.
**/
var ParameterMetadata = /** @class */ (function (_super) {
    __extends(ParameterMetadata, _super);
    function ParameterMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customMetadata" }),
        __metadata("design:type", Map)
    ], ParameterMetadata.prototype, "customMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=helpText" }),
        __metadata("design:type", String)
    ], ParameterMetadata.prototype, "helpText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isOptional" }),
        __metadata("design:type", Boolean)
    ], ParameterMetadata.prototype, "isOptional", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], ParameterMetadata.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ParameterMetadata.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paramType" }),
        __metadata("design:type", String)
    ], ParameterMetadata.prototype, "paramType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regexes" }),
        __metadata("design:type", Array)
    ], ParameterMetadata.prototype, "regexes", void 0);
    return ParameterMetadata;
}(SpeakeasyBase));
export { ParameterMetadata };
