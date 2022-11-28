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
import { Placeholder } from "./placeholder";
import { ShapeProperties } from "./shapeproperties";
import { TextContent } from "./textcontent";
export var ShapeShapeTypeEnum;
(function (ShapeShapeTypeEnum) {
    ShapeShapeTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    ShapeShapeTypeEnum["TextBox"] = "TEXT_BOX";
    ShapeShapeTypeEnum["Rectangle"] = "RECTANGLE";
    ShapeShapeTypeEnum["RoundRectangle"] = "ROUND_RECTANGLE";
    ShapeShapeTypeEnum["Ellipse"] = "ELLIPSE";
    ShapeShapeTypeEnum["Arc"] = "ARC";
    ShapeShapeTypeEnum["BentArrow"] = "BENT_ARROW";
    ShapeShapeTypeEnum["BentUpArrow"] = "BENT_UP_ARROW";
    ShapeShapeTypeEnum["Bevel"] = "BEVEL";
    ShapeShapeTypeEnum["BlockArc"] = "BLOCK_ARC";
    ShapeShapeTypeEnum["BracePair"] = "BRACE_PAIR";
    ShapeShapeTypeEnum["BracketPair"] = "BRACKET_PAIR";
    ShapeShapeTypeEnum["Can"] = "CAN";
    ShapeShapeTypeEnum["Chevron"] = "CHEVRON";
    ShapeShapeTypeEnum["Chord"] = "CHORD";
    ShapeShapeTypeEnum["Cloud"] = "CLOUD";
    ShapeShapeTypeEnum["Corner"] = "CORNER";
    ShapeShapeTypeEnum["Cube"] = "CUBE";
    ShapeShapeTypeEnum["CurvedDownArrow"] = "CURVED_DOWN_ARROW";
    ShapeShapeTypeEnum["CurvedLeftArrow"] = "CURVED_LEFT_ARROW";
    ShapeShapeTypeEnum["CurvedRightArrow"] = "CURVED_RIGHT_ARROW";
    ShapeShapeTypeEnum["CurvedUpArrow"] = "CURVED_UP_ARROW";
    ShapeShapeTypeEnum["Decagon"] = "DECAGON";
    ShapeShapeTypeEnum["DiagonalStripe"] = "DIAGONAL_STRIPE";
    ShapeShapeTypeEnum["Diamond"] = "DIAMOND";
    ShapeShapeTypeEnum["Dodecagon"] = "DODECAGON";
    ShapeShapeTypeEnum["Donut"] = "DONUT";
    ShapeShapeTypeEnum["DoubleWave"] = "DOUBLE_WAVE";
    ShapeShapeTypeEnum["DownArrow"] = "DOWN_ARROW";
    ShapeShapeTypeEnum["DownArrowCallout"] = "DOWN_ARROW_CALLOUT";
    ShapeShapeTypeEnum["FoldedCorner"] = "FOLDED_CORNER";
    ShapeShapeTypeEnum["Frame"] = "FRAME";
    ShapeShapeTypeEnum["HalfFrame"] = "HALF_FRAME";
    ShapeShapeTypeEnum["Heart"] = "HEART";
    ShapeShapeTypeEnum["Heptagon"] = "HEPTAGON";
    ShapeShapeTypeEnum["Hexagon"] = "HEXAGON";
    ShapeShapeTypeEnum["HomePlate"] = "HOME_PLATE";
    ShapeShapeTypeEnum["HorizontalScroll"] = "HORIZONTAL_SCROLL";
    ShapeShapeTypeEnum["IrregularSeal1"] = "IRREGULAR_SEAL_1";
    ShapeShapeTypeEnum["IrregularSeal2"] = "IRREGULAR_SEAL_2";
    ShapeShapeTypeEnum["LeftArrow"] = "LEFT_ARROW";
    ShapeShapeTypeEnum["LeftArrowCallout"] = "LEFT_ARROW_CALLOUT";
    ShapeShapeTypeEnum["LeftBrace"] = "LEFT_BRACE";
    ShapeShapeTypeEnum["LeftBracket"] = "LEFT_BRACKET";
    ShapeShapeTypeEnum["LeftRightArrow"] = "LEFT_RIGHT_ARROW";
    ShapeShapeTypeEnum["LeftRightArrowCallout"] = "LEFT_RIGHT_ARROW_CALLOUT";
    ShapeShapeTypeEnum["LeftRightUpArrow"] = "LEFT_RIGHT_UP_ARROW";
    ShapeShapeTypeEnum["LeftUpArrow"] = "LEFT_UP_ARROW";
    ShapeShapeTypeEnum["LightningBolt"] = "LIGHTNING_BOLT";
    ShapeShapeTypeEnum["MathDivide"] = "MATH_DIVIDE";
    ShapeShapeTypeEnum["MathEqual"] = "MATH_EQUAL";
    ShapeShapeTypeEnum["MathMinus"] = "MATH_MINUS";
    ShapeShapeTypeEnum["MathMultiply"] = "MATH_MULTIPLY";
    ShapeShapeTypeEnum["MathNotEqual"] = "MATH_NOT_EQUAL";
    ShapeShapeTypeEnum["MathPlus"] = "MATH_PLUS";
    ShapeShapeTypeEnum["Moon"] = "MOON";
    ShapeShapeTypeEnum["NoSmoking"] = "NO_SMOKING";
    ShapeShapeTypeEnum["NotchedRightArrow"] = "NOTCHED_RIGHT_ARROW";
    ShapeShapeTypeEnum["Octagon"] = "OCTAGON";
    ShapeShapeTypeEnum["Parallelogram"] = "PARALLELOGRAM";
    ShapeShapeTypeEnum["Pentagon"] = "PENTAGON";
    ShapeShapeTypeEnum["Pie"] = "PIE";
    ShapeShapeTypeEnum["Plaque"] = "PLAQUE";
    ShapeShapeTypeEnum["Plus"] = "PLUS";
    ShapeShapeTypeEnum["QuadArrow"] = "QUAD_ARROW";
    ShapeShapeTypeEnum["QuadArrowCallout"] = "QUAD_ARROW_CALLOUT";
    ShapeShapeTypeEnum["Ribbon"] = "RIBBON";
    ShapeShapeTypeEnum["Ribbon2"] = "RIBBON_2";
    ShapeShapeTypeEnum["RightArrow"] = "RIGHT_ARROW";
    ShapeShapeTypeEnum["RightArrowCallout"] = "RIGHT_ARROW_CALLOUT";
    ShapeShapeTypeEnum["RightBrace"] = "RIGHT_BRACE";
    ShapeShapeTypeEnum["RightBracket"] = "RIGHT_BRACKET";
    ShapeShapeTypeEnum["Round1Rectangle"] = "ROUND_1_RECTANGLE";
    ShapeShapeTypeEnum["Round2DiagonalRectangle"] = "ROUND_2_DIAGONAL_RECTANGLE";
    ShapeShapeTypeEnum["Round2SameRectangle"] = "ROUND_2_SAME_RECTANGLE";
    ShapeShapeTypeEnum["RightTriangle"] = "RIGHT_TRIANGLE";
    ShapeShapeTypeEnum["SmileyFace"] = "SMILEY_FACE";
    ShapeShapeTypeEnum["Snip1Rectangle"] = "SNIP_1_RECTANGLE";
    ShapeShapeTypeEnum["Snip2DiagonalRectangle"] = "SNIP_2_DIAGONAL_RECTANGLE";
    ShapeShapeTypeEnum["Snip2SameRectangle"] = "SNIP_2_SAME_RECTANGLE";
    ShapeShapeTypeEnum["SnipRoundRectangle"] = "SNIP_ROUND_RECTANGLE";
    ShapeShapeTypeEnum["Star10"] = "STAR_10";
    ShapeShapeTypeEnum["Star12"] = "STAR_12";
    ShapeShapeTypeEnum["Star16"] = "STAR_16";
    ShapeShapeTypeEnum["Star24"] = "STAR_24";
    ShapeShapeTypeEnum["Star32"] = "STAR_32";
    ShapeShapeTypeEnum["Star4"] = "STAR_4";
    ShapeShapeTypeEnum["Star5"] = "STAR_5";
    ShapeShapeTypeEnum["Star6"] = "STAR_6";
    ShapeShapeTypeEnum["Star7"] = "STAR_7";
    ShapeShapeTypeEnum["Star8"] = "STAR_8";
    ShapeShapeTypeEnum["StripedRightArrow"] = "STRIPED_RIGHT_ARROW";
    ShapeShapeTypeEnum["Sun"] = "SUN";
    ShapeShapeTypeEnum["Trapezoid"] = "TRAPEZOID";
    ShapeShapeTypeEnum["Triangle"] = "TRIANGLE";
    ShapeShapeTypeEnum["UpArrow"] = "UP_ARROW";
    ShapeShapeTypeEnum["UpArrowCallout"] = "UP_ARROW_CALLOUT";
    ShapeShapeTypeEnum["UpDownArrow"] = "UP_DOWN_ARROW";
    ShapeShapeTypeEnum["UturnArrow"] = "UTURN_ARROW";
    ShapeShapeTypeEnum["VerticalScroll"] = "VERTICAL_SCROLL";
    ShapeShapeTypeEnum["Wave"] = "WAVE";
    ShapeShapeTypeEnum["WedgeEllipseCallout"] = "WEDGE_ELLIPSE_CALLOUT";
    ShapeShapeTypeEnum["WedgeRectangleCallout"] = "WEDGE_RECTANGLE_CALLOUT";
    ShapeShapeTypeEnum["WedgeRoundRectangleCallout"] = "WEDGE_ROUND_RECTANGLE_CALLOUT";
    ShapeShapeTypeEnum["FlowChartAlternateProcess"] = "FLOW_CHART_ALTERNATE_PROCESS";
    ShapeShapeTypeEnum["FlowChartCollate"] = "FLOW_CHART_COLLATE";
    ShapeShapeTypeEnum["FlowChartConnector"] = "FLOW_CHART_CONNECTOR";
    ShapeShapeTypeEnum["FlowChartDecision"] = "FLOW_CHART_DECISION";
    ShapeShapeTypeEnum["FlowChartDelay"] = "FLOW_CHART_DELAY";
    ShapeShapeTypeEnum["FlowChartDisplay"] = "FLOW_CHART_DISPLAY";
    ShapeShapeTypeEnum["FlowChartDocument"] = "FLOW_CHART_DOCUMENT";
    ShapeShapeTypeEnum["FlowChartExtract"] = "FLOW_CHART_EXTRACT";
    ShapeShapeTypeEnum["FlowChartInputOutput"] = "FLOW_CHART_INPUT_OUTPUT";
    ShapeShapeTypeEnum["FlowChartInternalStorage"] = "FLOW_CHART_INTERNAL_STORAGE";
    ShapeShapeTypeEnum["FlowChartMagneticDisk"] = "FLOW_CHART_MAGNETIC_DISK";
    ShapeShapeTypeEnum["FlowChartMagneticDrum"] = "FLOW_CHART_MAGNETIC_DRUM";
    ShapeShapeTypeEnum["FlowChartMagneticTape"] = "FLOW_CHART_MAGNETIC_TAPE";
    ShapeShapeTypeEnum["FlowChartManualInput"] = "FLOW_CHART_MANUAL_INPUT";
    ShapeShapeTypeEnum["FlowChartManualOperation"] = "FLOW_CHART_MANUAL_OPERATION";
    ShapeShapeTypeEnum["FlowChartMerge"] = "FLOW_CHART_MERGE";
    ShapeShapeTypeEnum["FlowChartMultidocument"] = "FLOW_CHART_MULTIDOCUMENT";
    ShapeShapeTypeEnum["FlowChartOfflineStorage"] = "FLOW_CHART_OFFLINE_STORAGE";
    ShapeShapeTypeEnum["FlowChartOffpageConnector"] = "FLOW_CHART_OFFPAGE_CONNECTOR";
    ShapeShapeTypeEnum["FlowChartOnlineStorage"] = "FLOW_CHART_ONLINE_STORAGE";
    ShapeShapeTypeEnum["FlowChartOr"] = "FLOW_CHART_OR";
    ShapeShapeTypeEnum["FlowChartPredefinedProcess"] = "FLOW_CHART_PREDEFINED_PROCESS";
    ShapeShapeTypeEnum["FlowChartPreparation"] = "FLOW_CHART_PREPARATION";
    ShapeShapeTypeEnum["FlowChartProcess"] = "FLOW_CHART_PROCESS";
    ShapeShapeTypeEnum["FlowChartPunchedCard"] = "FLOW_CHART_PUNCHED_CARD";
    ShapeShapeTypeEnum["FlowChartPunchedTape"] = "FLOW_CHART_PUNCHED_TAPE";
    ShapeShapeTypeEnum["FlowChartSort"] = "FLOW_CHART_SORT";
    ShapeShapeTypeEnum["FlowChartSummingJunction"] = "FLOW_CHART_SUMMING_JUNCTION";
    ShapeShapeTypeEnum["FlowChartTerminator"] = "FLOW_CHART_TERMINATOR";
    ShapeShapeTypeEnum["ArrowEast"] = "ARROW_EAST";
    ShapeShapeTypeEnum["ArrowNorthEast"] = "ARROW_NORTH_EAST";
    ShapeShapeTypeEnum["ArrowNorth"] = "ARROW_NORTH";
    ShapeShapeTypeEnum["Speech"] = "SPEECH";
    ShapeShapeTypeEnum["Starburst"] = "STARBURST";
    ShapeShapeTypeEnum["Teardrop"] = "TEARDROP";
    ShapeShapeTypeEnum["EllipseRibbon"] = "ELLIPSE_RIBBON";
    ShapeShapeTypeEnum["EllipseRibbon2"] = "ELLIPSE_RIBBON_2";
    ShapeShapeTypeEnum["CloudCallout"] = "CLOUD_CALLOUT";
    ShapeShapeTypeEnum["Custom"] = "CUSTOM";
})(ShapeShapeTypeEnum || (ShapeShapeTypeEnum = {}));
// Shape
/**
 * A PageElement kind representing a generic shape that does not have a more specific classification.
**/
var Shape = /** @class */ (function (_super) {
    __extends(Shape, _super);
    function Shape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placeholder" }),
        __metadata("design:type", Placeholder)
    ], Shape.prototype, "placeholder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shapeProperties" }),
        __metadata("design:type", ShapeProperties)
    ], Shape.prototype, "shapeProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shapeType" }),
        __metadata("design:type", String)
    ], Shape.prototype, "shapeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", TextContent)
    ], Shape.prototype, "text", void 0);
    return Shape;
}(SpeakeasyBase));
export { Shape };
