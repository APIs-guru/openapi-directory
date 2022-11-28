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
import { GoogleCloudDocumentaiV1BoundingPoly } from "./googleclouddocumentaiv1boundingpoly";
export var GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnum;
(function (GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnum) {
    GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnum["LayoutTypeUnspecified"] = "LAYOUT_TYPE_UNSPECIFIED";
    GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnum["Block"] = "BLOCK";
    GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnum["Paragraph"] = "PARAGRAPH";
    GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnum["Line"] = "LINE";
    GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnum["Token"] = "TOKEN";
    GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnum["VisualElement"] = "VISUAL_ELEMENT";
    GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnum["Table"] = "TABLE";
    GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnum["FormField"] = "FORM_FIELD";
})(GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnum || (GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnum = {}));
// GoogleCloudDocumentaiV1DocumentPageAnchorPageRef
/**
 * Represents a weak reference to a page element within a document.
**/
var GoogleCloudDocumentaiV1DocumentPageAnchorPageRef = /** @class */ (function (_super) {
    __extends(GoogleCloudDocumentaiV1DocumentPageAnchorPageRef, _super);
    function GoogleCloudDocumentaiV1DocumentPageAnchorPageRef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boundingPoly" }),
        __metadata("design:type", GoogleCloudDocumentaiV1BoundingPoly)
    ], GoogleCloudDocumentaiV1DocumentPageAnchorPageRef.prototype, "boundingPoly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confidence" }),
        __metadata("design:type", Number)
    ], GoogleCloudDocumentaiV1DocumentPageAnchorPageRef.prototype, "confidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=layoutId" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1DocumentPageAnchorPageRef.prototype, "layoutId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=layoutType" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1DocumentPageAnchorPageRef.prototype, "layoutType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1DocumentPageAnchorPageRef.prototype, "page", void 0);
    return GoogleCloudDocumentaiV1DocumentPageAnchorPageRef;
}(SpeakeasyBase));
export { GoogleCloudDocumentaiV1DocumentPageAnchorPageRef };
