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
import { LineConnection } from "./lineconnection";
import { LineFill } from "./linefill";
import { Link } from "./link";
import { Dimension } from "./dimension";
export var LinePropertiesDashStyleEnum;
(function (LinePropertiesDashStyleEnum) {
    LinePropertiesDashStyleEnum["DashStyleUnspecified"] = "DASH_STYLE_UNSPECIFIED";
    LinePropertiesDashStyleEnum["Solid"] = "SOLID";
    LinePropertiesDashStyleEnum["Dot"] = "DOT";
    LinePropertiesDashStyleEnum["Dash"] = "DASH";
    LinePropertiesDashStyleEnum["DashDot"] = "DASH_DOT";
    LinePropertiesDashStyleEnum["LongDash"] = "LONG_DASH";
    LinePropertiesDashStyleEnum["LongDashDot"] = "LONG_DASH_DOT";
})(LinePropertiesDashStyleEnum || (LinePropertiesDashStyleEnum = {}));
export var LinePropertiesEndArrowEnum;
(function (LinePropertiesEndArrowEnum) {
    LinePropertiesEndArrowEnum["ArrowStyleUnspecified"] = "ARROW_STYLE_UNSPECIFIED";
    LinePropertiesEndArrowEnum["None"] = "NONE";
    LinePropertiesEndArrowEnum["StealthArrow"] = "STEALTH_ARROW";
    LinePropertiesEndArrowEnum["FillArrow"] = "FILL_ARROW";
    LinePropertiesEndArrowEnum["FillCircle"] = "FILL_CIRCLE";
    LinePropertiesEndArrowEnum["FillSquare"] = "FILL_SQUARE";
    LinePropertiesEndArrowEnum["FillDiamond"] = "FILL_DIAMOND";
    LinePropertiesEndArrowEnum["OpenArrow"] = "OPEN_ARROW";
    LinePropertiesEndArrowEnum["OpenCircle"] = "OPEN_CIRCLE";
    LinePropertiesEndArrowEnum["OpenSquare"] = "OPEN_SQUARE";
    LinePropertiesEndArrowEnum["OpenDiamond"] = "OPEN_DIAMOND";
})(LinePropertiesEndArrowEnum || (LinePropertiesEndArrowEnum = {}));
export var LinePropertiesStartArrowEnum;
(function (LinePropertiesStartArrowEnum) {
    LinePropertiesStartArrowEnum["ArrowStyleUnspecified"] = "ARROW_STYLE_UNSPECIFIED";
    LinePropertiesStartArrowEnum["None"] = "NONE";
    LinePropertiesStartArrowEnum["StealthArrow"] = "STEALTH_ARROW";
    LinePropertiesStartArrowEnum["FillArrow"] = "FILL_ARROW";
    LinePropertiesStartArrowEnum["FillCircle"] = "FILL_CIRCLE";
    LinePropertiesStartArrowEnum["FillSquare"] = "FILL_SQUARE";
    LinePropertiesStartArrowEnum["FillDiamond"] = "FILL_DIAMOND";
    LinePropertiesStartArrowEnum["OpenArrow"] = "OPEN_ARROW";
    LinePropertiesStartArrowEnum["OpenCircle"] = "OPEN_CIRCLE";
    LinePropertiesStartArrowEnum["OpenSquare"] = "OPEN_SQUARE";
    LinePropertiesStartArrowEnum["OpenDiamond"] = "OPEN_DIAMOND";
})(LinePropertiesStartArrowEnum || (LinePropertiesStartArrowEnum = {}));
// LineProperties
/**
 * The properties of the Line. When unset, these fields default to values that match the appearance of new lines created in the Slides editor.
**/
var LineProperties = /** @class */ (function (_super) {
    __extends(LineProperties, _super);
    function LineProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dashStyle" }),
        __metadata("design:type", String)
    ], LineProperties.prototype, "dashStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endArrow" }),
        __metadata("design:type", String)
    ], LineProperties.prototype, "endArrow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endConnection" }),
        __metadata("design:type", LineConnection)
    ], LineProperties.prototype, "endConnection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineFill" }),
        __metadata("design:type", LineFill)
    ], LineProperties.prototype, "lineFill", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", Link)
    ], LineProperties.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startArrow" }),
        __metadata("design:type", String)
    ], LineProperties.prototype, "startArrow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startConnection" }),
        __metadata("design:type", LineConnection)
    ], LineProperties.prototype, "startConnection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=weight" }),
        __metadata("design:type", Dimension)
    ], LineProperties.prototype, "weight", void 0);
    return LineProperties;
}(SpeakeasyBase));
export { LineProperties };
