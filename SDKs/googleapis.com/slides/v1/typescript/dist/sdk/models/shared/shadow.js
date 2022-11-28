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
import { Dimension } from "./dimension";
import { OpaqueColor } from "./opaquecolor";
import { AffineTransform } from "./affinetransform";
export var ShadowAlignmentEnum;
(function (ShadowAlignmentEnum) {
    ShadowAlignmentEnum["RectanglePositionUnspecified"] = "RECTANGLE_POSITION_UNSPECIFIED";
    ShadowAlignmentEnum["TopLeft"] = "TOP_LEFT";
    ShadowAlignmentEnum["TopCenter"] = "TOP_CENTER";
    ShadowAlignmentEnum["TopRight"] = "TOP_RIGHT";
    ShadowAlignmentEnum["LeftCenter"] = "LEFT_CENTER";
    ShadowAlignmentEnum["Center"] = "CENTER";
    ShadowAlignmentEnum["RightCenter"] = "RIGHT_CENTER";
    ShadowAlignmentEnum["BottomLeft"] = "BOTTOM_LEFT";
    ShadowAlignmentEnum["BottomCenter"] = "BOTTOM_CENTER";
    ShadowAlignmentEnum["BottomRight"] = "BOTTOM_RIGHT";
})(ShadowAlignmentEnum || (ShadowAlignmentEnum = {}));
export var ShadowPropertyStateEnum;
(function (ShadowPropertyStateEnum) {
    ShadowPropertyStateEnum["Rendered"] = "RENDERED";
    ShadowPropertyStateEnum["NotRendered"] = "NOT_RENDERED";
    ShadowPropertyStateEnum["Inherit"] = "INHERIT";
})(ShadowPropertyStateEnum || (ShadowPropertyStateEnum = {}));
export var ShadowTypeEnum;
(function (ShadowTypeEnum) {
    ShadowTypeEnum["ShadowTypeUnspecified"] = "SHADOW_TYPE_UNSPECIFIED";
    ShadowTypeEnum["Outer"] = "OUTER";
})(ShadowTypeEnum || (ShadowTypeEnum = {}));
// Shadow
/**
 * The shadow properties of a page element. If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind.
**/
var Shadow = /** @class */ (function (_super) {
    __extends(Shadow, _super);
    function Shadow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alignment" }),
        __metadata("design:type", String)
    ], Shadow.prototype, "alignment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alpha" }),
        __metadata("design:type", Number)
    ], Shadow.prototype, "alpha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blurRadius" }),
        __metadata("design:type", Dimension)
    ], Shadow.prototype, "blurRadius", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", OpaqueColor)
    ], Shadow.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=propertyState" }),
        __metadata("design:type", String)
    ], Shadow.prototype, "propertyState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rotateWithShape" }),
        __metadata("design:type", Boolean)
    ], Shadow.prototype, "rotateWithShape", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transform" }),
        __metadata("design:type", AffineTransform)
    ], Shadow.prototype, "transform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Shadow.prototype, "type", void 0);
    return Shadow;
}(SpeakeasyBase));
export { Shadow };
