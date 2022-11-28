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
import { GoogleCloudDocumentaiV1beta2BoundingPoly } from "./googleclouddocumentaiv1beta2boundingpoly";
export var GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRefLayoutTypeEnum;
(function (GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRefLayoutTypeEnum) {
    GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRefLayoutTypeEnum["LayoutTypeUnspecified"] = "LAYOUT_TYPE_UNSPECIFIED";
    GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRefLayoutTypeEnum["Block"] = "BLOCK";
    GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRefLayoutTypeEnum["Paragraph"] = "PARAGRAPH";
    GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRefLayoutTypeEnum["Line"] = "LINE";
    GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRefLayoutTypeEnum["Token"] = "TOKEN";
    GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRefLayoutTypeEnum["VisualElement"] = "VISUAL_ELEMENT";
    GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRefLayoutTypeEnum["Table"] = "TABLE";
    GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRefLayoutTypeEnum["FormField"] = "FORM_FIELD";
})(GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRefLayoutTypeEnum || (GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRefLayoutTypeEnum = {}));
// GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef
/**
 * Represents a weak reference to a page element within a document.
**/
var GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef = /** @class */ (function (_super) {
    __extends(GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef, _super);
    function GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boundingPoly" }),
        __metadata("design:type", GoogleCloudDocumentaiV1beta2BoundingPoly)
    ], GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef.prototype, "boundingPoly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confidence" }),
        __metadata("design:type", Number)
    ], GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef.prototype, "confidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=layoutId" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef.prototype, "layoutId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=layoutType" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef.prototype, "layoutType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef.prototype, "page", void 0);
    return GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef;
}(SpeakeasyBase));
export { GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef };
