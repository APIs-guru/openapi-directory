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
import { Autofit } from "./autofit";
import { Link } from "./link";
import { Outline } from "./outline";
import { Shadow } from "./shadow";
import { ShapeBackgroundFill } from "./shapebackgroundfill";
export var ShapePropertiesContentAlignmentEnum;
(function (ShapePropertiesContentAlignmentEnum) {
    ShapePropertiesContentAlignmentEnum["ContentAlignmentUnspecified"] = "CONTENT_ALIGNMENT_UNSPECIFIED";
    ShapePropertiesContentAlignmentEnum["ContentAlignmentUnsupported"] = "CONTENT_ALIGNMENT_UNSUPPORTED";
    ShapePropertiesContentAlignmentEnum["Top"] = "TOP";
    ShapePropertiesContentAlignmentEnum["Middle"] = "MIDDLE";
    ShapePropertiesContentAlignmentEnum["Bottom"] = "BOTTOM";
})(ShapePropertiesContentAlignmentEnum || (ShapePropertiesContentAlignmentEnum = {}));
// ShapeProperties
/**
 * The properties of a Shape. If the shape is a placeholder shape as determined by the placeholder field, then these properties may be inherited from a parent placeholder shape. Determining the rendered value of the property depends on the corresponding property_state field value. Any text autofit settings on the shape are automatically deactivated by requests that can impact how text fits in the shape.
**/
var ShapeProperties = /** @class */ (function (_super) {
    __extends(ShapeProperties, _super);
    function ShapeProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autofit" }),
        __metadata("design:type", Autofit)
    ], ShapeProperties.prototype, "autofit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentAlignment" }),
        __metadata("design:type", String)
    ], ShapeProperties.prototype, "contentAlignment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", Link)
    ], ShapeProperties.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outline" }),
        __metadata("design:type", Outline)
    ], ShapeProperties.prototype, "outline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shadow" }),
        __metadata("design:type", Shadow)
    ], ShapeProperties.prototype, "shadow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shapeBackgroundFill" }),
        __metadata("design:type", ShapeBackgroundFill)
    ], ShapeProperties.prototype, "shapeBackgroundFill", void 0);
    return ShapeProperties;
}(SpeakeasyBase));
export { ShapeProperties };
