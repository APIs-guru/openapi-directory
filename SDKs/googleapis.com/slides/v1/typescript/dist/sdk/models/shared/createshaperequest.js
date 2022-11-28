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
import { PageElementProperties } from "./pageelementproperties";
export var CreateShapeRequestShapeTypeEnum;
(function (CreateShapeRequestShapeTypeEnum) {
    CreateShapeRequestShapeTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    CreateShapeRequestShapeTypeEnum["TextBox"] = "TEXT_BOX";
    CreateShapeRequestShapeTypeEnum["Rectangle"] = "RECTANGLE";
    CreateShapeRequestShapeTypeEnum["RoundRectangle"] = "ROUND_RECTANGLE";
    CreateShapeRequestShapeTypeEnum["Ellipse"] = "ELLIPSE";
    CreateShapeRequestShapeTypeEnum["Arc"] = "ARC";
    CreateShapeRequestShapeTypeEnum["BentArrow"] = "BENT_ARROW";
    CreateShapeRequestShapeTypeEnum["BentUpArrow"] = "BENT_UP_ARROW";
    CreateShapeRequestShapeTypeEnum["Bevel"] = "BEVEL";
    CreateShapeRequestShapeTypeEnum["BlockArc"] = "BLOCK_ARC";
    CreateShapeRequestShapeTypeEnum["BracePair"] = "BRACE_PAIR";
    CreateShapeRequestShapeTypeEnum["BracketPair"] = "BRACKET_PAIR";
    CreateShapeRequestShapeTypeEnum["Can"] = "CAN";
    CreateShapeRequestShapeTypeEnum["Chevron"] = "CHEVRON";
    CreateShapeRequestShapeTypeEnum["Chord"] = "CHORD";
    CreateShapeRequestShapeTypeEnum["Cloud"] = "CLOUD";
    CreateShapeRequestShapeTypeEnum["Corner"] = "CORNER";
    CreateShapeRequestShapeTypeEnum["Cube"] = "CUBE";
    CreateShapeRequestShapeTypeEnum["CurvedDownArrow"] = "CURVED_DOWN_ARROW";
    CreateShapeRequestShapeTypeEnum["CurvedLeftArrow"] = "CURVED_LEFT_ARROW";
    CreateShapeRequestShapeTypeEnum["CurvedRightArrow"] = "CURVED_RIGHT_ARROW";
    CreateShapeRequestShapeTypeEnum["CurvedUpArrow"] = "CURVED_UP_ARROW";
    CreateShapeRequestShapeTypeEnum["Decagon"] = "DECAGON";
    CreateShapeRequestShapeTypeEnum["DiagonalStripe"] = "DIAGONAL_STRIPE";
    CreateShapeRequestShapeTypeEnum["Diamond"] = "DIAMOND";
    CreateShapeRequestShapeTypeEnum["Dodecagon"] = "DODECAGON";
    CreateShapeRequestShapeTypeEnum["Donut"] = "DONUT";
    CreateShapeRequestShapeTypeEnum["DoubleWave"] = "DOUBLE_WAVE";
    CreateShapeRequestShapeTypeEnum["DownArrow"] = "DOWN_ARROW";
    CreateShapeRequestShapeTypeEnum["DownArrowCallout"] = "DOWN_ARROW_CALLOUT";
    CreateShapeRequestShapeTypeEnum["FoldedCorner"] = "FOLDED_CORNER";
    CreateShapeRequestShapeTypeEnum["Frame"] = "FRAME";
    CreateShapeRequestShapeTypeEnum["HalfFrame"] = "HALF_FRAME";
    CreateShapeRequestShapeTypeEnum["Heart"] = "HEART";
    CreateShapeRequestShapeTypeEnum["Heptagon"] = "HEPTAGON";
    CreateShapeRequestShapeTypeEnum["Hexagon"] = "HEXAGON";
    CreateShapeRequestShapeTypeEnum["HomePlate"] = "HOME_PLATE";
    CreateShapeRequestShapeTypeEnum["HorizontalScroll"] = "HORIZONTAL_SCROLL";
    CreateShapeRequestShapeTypeEnum["IrregularSeal1"] = "IRREGULAR_SEAL_1";
    CreateShapeRequestShapeTypeEnum["IrregularSeal2"] = "IRREGULAR_SEAL_2";
    CreateShapeRequestShapeTypeEnum["LeftArrow"] = "LEFT_ARROW";
    CreateShapeRequestShapeTypeEnum["LeftArrowCallout"] = "LEFT_ARROW_CALLOUT";
    CreateShapeRequestShapeTypeEnum["LeftBrace"] = "LEFT_BRACE";
    CreateShapeRequestShapeTypeEnum["LeftBracket"] = "LEFT_BRACKET";
    CreateShapeRequestShapeTypeEnum["LeftRightArrow"] = "LEFT_RIGHT_ARROW";
    CreateShapeRequestShapeTypeEnum["LeftRightArrowCallout"] = "LEFT_RIGHT_ARROW_CALLOUT";
    CreateShapeRequestShapeTypeEnum["LeftRightUpArrow"] = "LEFT_RIGHT_UP_ARROW";
    CreateShapeRequestShapeTypeEnum["LeftUpArrow"] = "LEFT_UP_ARROW";
    CreateShapeRequestShapeTypeEnum["LightningBolt"] = "LIGHTNING_BOLT";
    CreateShapeRequestShapeTypeEnum["MathDivide"] = "MATH_DIVIDE";
    CreateShapeRequestShapeTypeEnum["MathEqual"] = "MATH_EQUAL";
    CreateShapeRequestShapeTypeEnum["MathMinus"] = "MATH_MINUS";
    CreateShapeRequestShapeTypeEnum["MathMultiply"] = "MATH_MULTIPLY";
    CreateShapeRequestShapeTypeEnum["MathNotEqual"] = "MATH_NOT_EQUAL";
    CreateShapeRequestShapeTypeEnum["MathPlus"] = "MATH_PLUS";
    CreateShapeRequestShapeTypeEnum["Moon"] = "MOON";
    CreateShapeRequestShapeTypeEnum["NoSmoking"] = "NO_SMOKING";
    CreateShapeRequestShapeTypeEnum["NotchedRightArrow"] = "NOTCHED_RIGHT_ARROW";
    CreateShapeRequestShapeTypeEnum["Octagon"] = "OCTAGON";
    CreateShapeRequestShapeTypeEnum["Parallelogram"] = "PARALLELOGRAM";
    CreateShapeRequestShapeTypeEnum["Pentagon"] = "PENTAGON";
    CreateShapeRequestShapeTypeEnum["Pie"] = "PIE";
    CreateShapeRequestShapeTypeEnum["Plaque"] = "PLAQUE";
    CreateShapeRequestShapeTypeEnum["Plus"] = "PLUS";
    CreateShapeRequestShapeTypeEnum["QuadArrow"] = "QUAD_ARROW";
    CreateShapeRequestShapeTypeEnum["QuadArrowCallout"] = "QUAD_ARROW_CALLOUT";
    CreateShapeRequestShapeTypeEnum["Ribbon"] = "RIBBON";
    CreateShapeRequestShapeTypeEnum["Ribbon2"] = "RIBBON_2";
    CreateShapeRequestShapeTypeEnum["RightArrow"] = "RIGHT_ARROW";
    CreateShapeRequestShapeTypeEnum["RightArrowCallout"] = "RIGHT_ARROW_CALLOUT";
    CreateShapeRequestShapeTypeEnum["RightBrace"] = "RIGHT_BRACE";
    CreateShapeRequestShapeTypeEnum["RightBracket"] = "RIGHT_BRACKET";
    CreateShapeRequestShapeTypeEnum["Round1Rectangle"] = "ROUND_1_RECTANGLE";
    CreateShapeRequestShapeTypeEnum["Round2DiagonalRectangle"] = "ROUND_2_DIAGONAL_RECTANGLE";
    CreateShapeRequestShapeTypeEnum["Round2SameRectangle"] = "ROUND_2_SAME_RECTANGLE";
    CreateShapeRequestShapeTypeEnum["RightTriangle"] = "RIGHT_TRIANGLE";
    CreateShapeRequestShapeTypeEnum["SmileyFace"] = "SMILEY_FACE";
    CreateShapeRequestShapeTypeEnum["Snip1Rectangle"] = "SNIP_1_RECTANGLE";
    CreateShapeRequestShapeTypeEnum["Snip2DiagonalRectangle"] = "SNIP_2_DIAGONAL_RECTANGLE";
    CreateShapeRequestShapeTypeEnum["Snip2SameRectangle"] = "SNIP_2_SAME_RECTANGLE";
    CreateShapeRequestShapeTypeEnum["SnipRoundRectangle"] = "SNIP_ROUND_RECTANGLE";
    CreateShapeRequestShapeTypeEnum["Star10"] = "STAR_10";
    CreateShapeRequestShapeTypeEnum["Star12"] = "STAR_12";
    CreateShapeRequestShapeTypeEnum["Star16"] = "STAR_16";
    CreateShapeRequestShapeTypeEnum["Star24"] = "STAR_24";
    CreateShapeRequestShapeTypeEnum["Star32"] = "STAR_32";
    CreateShapeRequestShapeTypeEnum["Star4"] = "STAR_4";
    CreateShapeRequestShapeTypeEnum["Star5"] = "STAR_5";
    CreateShapeRequestShapeTypeEnum["Star6"] = "STAR_6";
    CreateShapeRequestShapeTypeEnum["Star7"] = "STAR_7";
    CreateShapeRequestShapeTypeEnum["Star8"] = "STAR_8";
    CreateShapeRequestShapeTypeEnum["StripedRightArrow"] = "STRIPED_RIGHT_ARROW";
    CreateShapeRequestShapeTypeEnum["Sun"] = "SUN";
    CreateShapeRequestShapeTypeEnum["Trapezoid"] = "TRAPEZOID";
    CreateShapeRequestShapeTypeEnum["Triangle"] = "TRIANGLE";
    CreateShapeRequestShapeTypeEnum["UpArrow"] = "UP_ARROW";
    CreateShapeRequestShapeTypeEnum["UpArrowCallout"] = "UP_ARROW_CALLOUT";
    CreateShapeRequestShapeTypeEnum["UpDownArrow"] = "UP_DOWN_ARROW";
    CreateShapeRequestShapeTypeEnum["UturnArrow"] = "UTURN_ARROW";
    CreateShapeRequestShapeTypeEnum["VerticalScroll"] = "VERTICAL_SCROLL";
    CreateShapeRequestShapeTypeEnum["Wave"] = "WAVE";
    CreateShapeRequestShapeTypeEnum["WedgeEllipseCallout"] = "WEDGE_ELLIPSE_CALLOUT";
    CreateShapeRequestShapeTypeEnum["WedgeRectangleCallout"] = "WEDGE_RECTANGLE_CALLOUT";
    CreateShapeRequestShapeTypeEnum["WedgeRoundRectangleCallout"] = "WEDGE_ROUND_RECTANGLE_CALLOUT";
    CreateShapeRequestShapeTypeEnum["FlowChartAlternateProcess"] = "FLOW_CHART_ALTERNATE_PROCESS";
    CreateShapeRequestShapeTypeEnum["FlowChartCollate"] = "FLOW_CHART_COLLATE";
    CreateShapeRequestShapeTypeEnum["FlowChartConnector"] = "FLOW_CHART_CONNECTOR";
    CreateShapeRequestShapeTypeEnum["FlowChartDecision"] = "FLOW_CHART_DECISION";
    CreateShapeRequestShapeTypeEnum["FlowChartDelay"] = "FLOW_CHART_DELAY";
    CreateShapeRequestShapeTypeEnum["FlowChartDisplay"] = "FLOW_CHART_DISPLAY";
    CreateShapeRequestShapeTypeEnum["FlowChartDocument"] = "FLOW_CHART_DOCUMENT";
    CreateShapeRequestShapeTypeEnum["FlowChartExtract"] = "FLOW_CHART_EXTRACT";
    CreateShapeRequestShapeTypeEnum["FlowChartInputOutput"] = "FLOW_CHART_INPUT_OUTPUT";
    CreateShapeRequestShapeTypeEnum["FlowChartInternalStorage"] = "FLOW_CHART_INTERNAL_STORAGE";
    CreateShapeRequestShapeTypeEnum["FlowChartMagneticDisk"] = "FLOW_CHART_MAGNETIC_DISK";
    CreateShapeRequestShapeTypeEnum["FlowChartMagneticDrum"] = "FLOW_CHART_MAGNETIC_DRUM";
    CreateShapeRequestShapeTypeEnum["FlowChartMagneticTape"] = "FLOW_CHART_MAGNETIC_TAPE";
    CreateShapeRequestShapeTypeEnum["FlowChartManualInput"] = "FLOW_CHART_MANUAL_INPUT";
    CreateShapeRequestShapeTypeEnum["FlowChartManualOperation"] = "FLOW_CHART_MANUAL_OPERATION";
    CreateShapeRequestShapeTypeEnum["FlowChartMerge"] = "FLOW_CHART_MERGE";
    CreateShapeRequestShapeTypeEnum["FlowChartMultidocument"] = "FLOW_CHART_MULTIDOCUMENT";
    CreateShapeRequestShapeTypeEnum["FlowChartOfflineStorage"] = "FLOW_CHART_OFFLINE_STORAGE";
    CreateShapeRequestShapeTypeEnum["FlowChartOffpageConnector"] = "FLOW_CHART_OFFPAGE_CONNECTOR";
    CreateShapeRequestShapeTypeEnum["FlowChartOnlineStorage"] = "FLOW_CHART_ONLINE_STORAGE";
    CreateShapeRequestShapeTypeEnum["FlowChartOr"] = "FLOW_CHART_OR";
    CreateShapeRequestShapeTypeEnum["FlowChartPredefinedProcess"] = "FLOW_CHART_PREDEFINED_PROCESS";
    CreateShapeRequestShapeTypeEnum["FlowChartPreparation"] = "FLOW_CHART_PREPARATION";
    CreateShapeRequestShapeTypeEnum["FlowChartProcess"] = "FLOW_CHART_PROCESS";
    CreateShapeRequestShapeTypeEnum["FlowChartPunchedCard"] = "FLOW_CHART_PUNCHED_CARD";
    CreateShapeRequestShapeTypeEnum["FlowChartPunchedTape"] = "FLOW_CHART_PUNCHED_TAPE";
    CreateShapeRequestShapeTypeEnum["FlowChartSort"] = "FLOW_CHART_SORT";
    CreateShapeRequestShapeTypeEnum["FlowChartSummingJunction"] = "FLOW_CHART_SUMMING_JUNCTION";
    CreateShapeRequestShapeTypeEnum["FlowChartTerminator"] = "FLOW_CHART_TERMINATOR";
    CreateShapeRequestShapeTypeEnum["ArrowEast"] = "ARROW_EAST";
    CreateShapeRequestShapeTypeEnum["ArrowNorthEast"] = "ARROW_NORTH_EAST";
    CreateShapeRequestShapeTypeEnum["ArrowNorth"] = "ARROW_NORTH";
    CreateShapeRequestShapeTypeEnum["Speech"] = "SPEECH";
    CreateShapeRequestShapeTypeEnum["Starburst"] = "STARBURST";
    CreateShapeRequestShapeTypeEnum["Teardrop"] = "TEARDROP";
    CreateShapeRequestShapeTypeEnum["EllipseRibbon"] = "ELLIPSE_RIBBON";
    CreateShapeRequestShapeTypeEnum["EllipseRibbon2"] = "ELLIPSE_RIBBON_2";
    CreateShapeRequestShapeTypeEnum["CloudCallout"] = "CLOUD_CALLOUT";
    CreateShapeRequestShapeTypeEnum["Custom"] = "CUSTOM";
})(CreateShapeRequestShapeTypeEnum || (CreateShapeRequestShapeTypeEnum = {}));
// CreateShapeRequest
/**
 * Creates a new shape.
**/
var CreateShapeRequest = /** @class */ (function (_super) {
    __extends(CreateShapeRequest, _super);
    function CreateShapeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=elementProperties" }),
        __metadata("design:type", PageElementProperties)
    ], CreateShapeRequest.prototype, "elementProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectId" }),
        __metadata("design:type", String)
    ], CreateShapeRequest.prototype, "objectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shapeType" }),
        __metadata("design:type", String)
    ], CreateShapeRequest.prototype, "shapeType", void 0);
    return CreateShapeRequest;
}(SpeakeasyBase));
export { CreateShapeRequest };
