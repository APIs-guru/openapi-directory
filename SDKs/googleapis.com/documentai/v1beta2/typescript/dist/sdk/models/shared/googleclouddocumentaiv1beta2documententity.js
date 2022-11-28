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
import { GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue } from "./googleclouddocumentaiv1beta2documententitynormalizedvalue";
import { GoogleCloudDocumentaiV1beta2DocumentPageAnchor } from "./googleclouddocumentaiv1beta2documentpageanchor";
import { GoogleCloudDocumentaiV1beta2DocumentProvenance } from "./googleclouddocumentaiv1beta2documentprovenance";
import { GoogleCloudDocumentaiV1beta2DocumentTextAnchor } from "./googleclouddocumentaiv1beta2documenttextanchor";
// GoogleCloudDocumentaiV1beta2DocumentEntity
/**
 * An entity that could be a phrase in the text or a property that belongs to the document. It is a known entity type, such as a person, an organization, or location.
**/
var GoogleCloudDocumentaiV1beta2DocumentEntity = /** @class */ (function (_super) {
    __extends(GoogleCloudDocumentaiV1beta2DocumentEntity, _super);
    function GoogleCloudDocumentaiV1beta2DocumentEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confidence" }),
        __metadata("design:type", Number)
    ], GoogleCloudDocumentaiV1beta2DocumentEntity.prototype, "confidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1beta2DocumentEntity.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mentionId" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1beta2DocumentEntity.prototype, "mentionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mentionText" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1beta2DocumentEntity.prototype, "mentionText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=normalizedValue" }),
        __metadata("design:type", GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue)
    ], GoogleCloudDocumentaiV1beta2DocumentEntity.prototype, "normalizedValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageAnchor" }),
        __metadata("design:type", GoogleCloudDocumentaiV1beta2DocumentPageAnchor)
    ], GoogleCloudDocumentaiV1beta2DocumentEntity.prototype, "pageAnchor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties", elemType: GoogleCloudDocumentaiV1beta2DocumentEntity }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta2DocumentEntity.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provenance" }),
        __metadata("design:type", GoogleCloudDocumentaiV1beta2DocumentProvenance)
    ], GoogleCloudDocumentaiV1beta2DocumentEntity.prototype, "provenance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redacted" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDocumentaiV1beta2DocumentEntity.prototype, "redacted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textAnchor" }),
        __metadata("design:type", GoogleCloudDocumentaiV1beta2DocumentTextAnchor)
    ], GoogleCloudDocumentaiV1beta2DocumentEntity.prototype, "textAnchor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1beta2DocumentEntity.prototype, "type", void 0);
    return GoogleCloudDocumentaiV1beta2DocumentEntity;
}(SpeakeasyBase));
export { GoogleCloudDocumentaiV1beta2DocumentEntity };
