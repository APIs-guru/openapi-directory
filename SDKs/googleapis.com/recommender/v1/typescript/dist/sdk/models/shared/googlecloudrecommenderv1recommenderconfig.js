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
import { GoogleCloudRecommenderV1RecommenderGenerationConfig } from "./googlecloudrecommenderv1recommendergenerationconfig";
// GoogleCloudRecommenderV1RecommenderConfig
/**
 * Configuration for a Recommender.
**/
var GoogleCloudRecommenderV1RecommenderConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudRecommenderV1RecommenderConfig, _super);
    function GoogleCloudRecommenderV1RecommenderConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", Map)
    ], GoogleCloudRecommenderV1RecommenderConfig.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommenderV1RecommenderConfig.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommenderV1RecommenderConfig.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommenderV1RecommenderConfig.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommenderGenerationConfig" }),
        __metadata("design:type", GoogleCloudRecommenderV1RecommenderGenerationConfig)
    ], GoogleCloudRecommenderV1RecommenderConfig.prototype, "recommenderGenerationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionId" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommenderV1RecommenderConfig.prototype, "revisionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommenderV1RecommenderConfig.prototype, "updateTime", void 0);
    return GoogleCloudRecommenderV1RecommenderConfig;
}(SpeakeasyBase));
export { GoogleCloudRecommenderV1RecommenderConfig };
// GoogleCloudRecommenderV1RecommenderConfigInput
/**
 * Configuration for a Recommender.
**/
var GoogleCloudRecommenderV1RecommenderConfigInput = /** @class */ (function (_super) {
    __extends(GoogleCloudRecommenderV1RecommenderConfigInput, _super);
    function GoogleCloudRecommenderV1RecommenderConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", Map)
    ], GoogleCloudRecommenderV1RecommenderConfigInput.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommenderV1RecommenderConfigInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommenderV1RecommenderConfigInput.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommenderV1RecommenderConfigInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommenderGenerationConfig" }),
        __metadata("design:type", GoogleCloudRecommenderV1RecommenderGenerationConfig)
    ], GoogleCloudRecommenderV1RecommenderConfigInput.prototype, "recommenderGenerationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommenderV1RecommenderConfigInput.prototype, "updateTime", void 0);
    return GoogleCloudRecommenderV1RecommenderConfigInput;
}(SpeakeasyBase));
export { GoogleCloudRecommenderV1RecommenderConfigInput };
