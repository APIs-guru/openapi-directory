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
import { GoogleCloudDocumentaiV1beta2NormalizedVertex } from "./googleclouddocumentaiv1beta2normalizedvertex";
import { GoogleCloudDocumentaiV1beta2Vertex } from "./googleclouddocumentaiv1beta2vertex";
// GoogleCloudDocumentaiV1beta2BoundingPoly
/**
 * A bounding polygon for the detected image annotation.
**/
var GoogleCloudDocumentaiV1beta2BoundingPoly = /** @class */ (function (_super) {
    __extends(GoogleCloudDocumentaiV1beta2BoundingPoly, _super);
    function GoogleCloudDocumentaiV1beta2BoundingPoly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=normalizedVertices", elemType: GoogleCloudDocumentaiV1beta2NormalizedVertex }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta2BoundingPoly.prototype, "normalizedVertices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vertices", elemType: GoogleCloudDocumentaiV1beta2Vertex }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta2BoundingPoly.prototype, "vertices", void 0);
    return GoogleCloudDocumentaiV1beta2BoundingPoly;
}(SpeakeasyBase));
export { GoogleCloudDocumentaiV1beta2BoundingPoly };
