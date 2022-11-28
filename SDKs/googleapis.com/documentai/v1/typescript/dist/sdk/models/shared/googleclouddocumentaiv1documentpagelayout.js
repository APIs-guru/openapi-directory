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
import { GoogleCloudDocumentaiV1DocumentTextAnchor } from "./googleclouddocumentaiv1documenttextanchor";
export var GoogleCloudDocumentaiV1DocumentPageLayoutOrientationEnum;
(function (GoogleCloudDocumentaiV1DocumentPageLayoutOrientationEnum) {
    GoogleCloudDocumentaiV1DocumentPageLayoutOrientationEnum["OrientationUnspecified"] = "ORIENTATION_UNSPECIFIED";
    GoogleCloudDocumentaiV1DocumentPageLayoutOrientationEnum["PageUp"] = "PAGE_UP";
    GoogleCloudDocumentaiV1DocumentPageLayoutOrientationEnum["PageRight"] = "PAGE_RIGHT";
    GoogleCloudDocumentaiV1DocumentPageLayoutOrientationEnum["PageDown"] = "PAGE_DOWN";
    GoogleCloudDocumentaiV1DocumentPageLayoutOrientationEnum["PageLeft"] = "PAGE_LEFT";
})(GoogleCloudDocumentaiV1DocumentPageLayoutOrientationEnum || (GoogleCloudDocumentaiV1DocumentPageLayoutOrientationEnum = {}));
// GoogleCloudDocumentaiV1DocumentPageLayout
/**
 * Visual element describing a layout unit on a page.
**/
var GoogleCloudDocumentaiV1DocumentPageLayout = /** @class */ (function (_super) {
    __extends(GoogleCloudDocumentaiV1DocumentPageLayout, _super);
    function GoogleCloudDocumentaiV1DocumentPageLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boundingPoly" }),
        __metadata("design:type", GoogleCloudDocumentaiV1BoundingPoly)
    ], GoogleCloudDocumentaiV1DocumentPageLayout.prototype, "boundingPoly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confidence" }),
        __metadata("design:type", Number)
    ], GoogleCloudDocumentaiV1DocumentPageLayout.prototype, "confidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orientation" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1DocumentPageLayout.prototype, "orientation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textAnchor" }),
        __metadata("design:type", GoogleCloudDocumentaiV1DocumentTextAnchor)
    ], GoogleCloudDocumentaiV1DocumentPageLayout.prototype, "textAnchor", void 0);
    return GoogleCloudDocumentaiV1DocumentPageLayout;
}(SpeakeasyBase));
export { GoogleCloudDocumentaiV1DocumentPageLayout };
