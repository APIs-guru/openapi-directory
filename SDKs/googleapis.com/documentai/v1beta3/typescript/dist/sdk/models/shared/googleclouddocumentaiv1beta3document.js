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
import { GoogleCloudDocumentaiV1beta3DocumentEntity } from "./googleclouddocumentaiv1beta3documententity";
import { GoogleCloudDocumentaiV1beta3DocumentEntityRelation } from "./googleclouddocumentaiv1beta3documententityrelation";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudDocumentaiV1beta3DocumentPage } from "./googleclouddocumentaiv1beta3documentpage";
import { GoogleCloudDocumentaiV1beta3DocumentRevision } from "./googleclouddocumentaiv1beta3documentrevision";
import { GoogleCloudDocumentaiV1beta3DocumentShardInfo } from "./googleclouddocumentaiv1beta3documentshardinfo";
import { GoogleCloudDocumentaiV1beta3DocumentTextChange } from "./googleclouddocumentaiv1beta3documenttextchange";
import { GoogleCloudDocumentaiV1beta3DocumentStyle } from "./googleclouddocumentaiv1beta3documentstyle";
// GoogleCloudDocumentaiV1beta3Document
/**
 * Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality.
**/
var GoogleCloudDocumentaiV1beta3Document = /** @class */ (function (_super) {
    __extends(GoogleCloudDocumentaiV1beta3Document, _super);
    function GoogleCloudDocumentaiV1beta3Document() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1beta3Document.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entities", elemType: GoogleCloudDocumentaiV1beta3DocumentEntity }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta3Document.prototype, "entities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityRelations", elemType: GoogleCloudDocumentaiV1beta3DocumentEntityRelation }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta3Document.prototype, "entityRelations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", GoogleRpcStatus)
    ], GoogleCloudDocumentaiV1beta3Document.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mimeType" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1beta3Document.prototype, "mimeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages", elemType: GoogleCloudDocumentaiV1beta3DocumentPage }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta3Document.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisions", elemType: GoogleCloudDocumentaiV1beta3DocumentRevision }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta3Document.prototype, "revisions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shardInfo" }),
        __metadata("design:type", GoogleCloudDocumentaiV1beta3DocumentShardInfo)
    ], GoogleCloudDocumentaiV1beta3Document.prototype, "shardInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1beta3Document.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textChanges", elemType: GoogleCloudDocumentaiV1beta3DocumentTextChange }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta3Document.prototype, "textChanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textStyles", elemType: GoogleCloudDocumentaiV1beta3DocumentStyle }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta3Document.prototype, "textStyles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1beta3Document.prototype, "uri", void 0);
    return GoogleCloudDocumentaiV1beta3Document;
}(SpeakeasyBase));
export { GoogleCloudDocumentaiV1beta3Document };
