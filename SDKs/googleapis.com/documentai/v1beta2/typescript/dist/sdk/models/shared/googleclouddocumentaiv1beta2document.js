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
import { GoogleCloudDocumentaiV1beta2DocumentEntity } from "./googleclouddocumentaiv1beta2documententity";
import { GoogleCloudDocumentaiV1beta2DocumentEntityRelation } from "./googleclouddocumentaiv1beta2documententityrelation";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudDocumentaiV1beta2DocumentLabel } from "./googleclouddocumentaiv1beta2documentlabel";
import { GoogleCloudDocumentaiV1beta2DocumentPage } from "./googleclouddocumentaiv1beta2documentpage";
import { GoogleCloudDocumentaiV1beta2DocumentRevision } from "./googleclouddocumentaiv1beta2documentrevision";
import { GoogleCloudDocumentaiV1beta2DocumentShardInfo } from "./googleclouddocumentaiv1beta2documentshardinfo";
import { GoogleCloudDocumentaiV1beta2DocumentTextChange } from "./googleclouddocumentaiv1beta2documenttextchange";
import { GoogleCloudDocumentaiV1beta2DocumentStyle } from "./googleclouddocumentaiv1beta2documentstyle";
// GoogleCloudDocumentaiV1beta2Document
/**
 * Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality.
**/
var GoogleCloudDocumentaiV1beta2Document = /** @class */ (function (_super) {
    __extends(GoogleCloudDocumentaiV1beta2Document, _super);
    function GoogleCloudDocumentaiV1beta2Document() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1beta2Document.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entities", elemType: GoogleCloudDocumentaiV1beta2DocumentEntity }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta2Document.prototype, "entities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityRelations", elemType: GoogleCloudDocumentaiV1beta2DocumentEntityRelation }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta2Document.prototype, "entityRelations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", GoogleRpcStatus)
    ], GoogleCloudDocumentaiV1beta2Document.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels", elemType: GoogleCloudDocumentaiV1beta2DocumentLabel }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta2Document.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mimeType" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1beta2Document.prototype, "mimeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages", elemType: GoogleCloudDocumentaiV1beta2DocumentPage }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta2Document.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisions", elemType: GoogleCloudDocumentaiV1beta2DocumentRevision }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta2Document.prototype, "revisions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shardInfo" }),
        __metadata("design:type", GoogleCloudDocumentaiV1beta2DocumentShardInfo)
    ], GoogleCloudDocumentaiV1beta2Document.prototype, "shardInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1beta2Document.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textChanges", elemType: GoogleCloudDocumentaiV1beta2DocumentTextChange }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta2Document.prototype, "textChanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textStyles", elemType: GoogleCloudDocumentaiV1beta2DocumentStyle }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta2Document.prototype, "textStyles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1beta2Document.prototype, "uri", void 0);
    return GoogleCloudDocumentaiV1beta2Document;
}(SpeakeasyBase));
export { GoogleCloudDocumentaiV1beta2Document };
