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
import { LineProperties } from "./lineproperties";
export var LineLineCategoryEnum;
(function (LineLineCategoryEnum) {
    LineLineCategoryEnum["LineCategoryUnspecified"] = "LINE_CATEGORY_UNSPECIFIED";
    LineLineCategoryEnum["Straight"] = "STRAIGHT";
    LineLineCategoryEnum["Bent"] = "BENT";
    LineLineCategoryEnum["Curved"] = "CURVED";
})(LineLineCategoryEnum || (LineLineCategoryEnum = {}));
export var LineLineTypeEnum;
(function (LineLineTypeEnum) {
    LineLineTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    LineLineTypeEnum["StraightConnector1"] = "STRAIGHT_CONNECTOR_1";
    LineLineTypeEnum["BentConnector2"] = "BENT_CONNECTOR_2";
    LineLineTypeEnum["BentConnector3"] = "BENT_CONNECTOR_3";
    LineLineTypeEnum["BentConnector4"] = "BENT_CONNECTOR_4";
    LineLineTypeEnum["BentConnector5"] = "BENT_CONNECTOR_5";
    LineLineTypeEnum["CurvedConnector2"] = "CURVED_CONNECTOR_2";
    LineLineTypeEnum["CurvedConnector3"] = "CURVED_CONNECTOR_3";
    LineLineTypeEnum["CurvedConnector4"] = "CURVED_CONNECTOR_4";
    LineLineTypeEnum["CurvedConnector5"] = "CURVED_CONNECTOR_5";
    LineLineTypeEnum["StraightLine"] = "STRAIGHT_LINE";
})(LineLineTypeEnum || (LineLineTypeEnum = {}));
// Line
/**
 * A PageElement kind representing a non-connector line, straight connector, curved connector, or bent connector.
**/
var Line = /** @class */ (function (_super) {
    __extends(Line, _super);
    function Line() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineCategory" }),
        __metadata("design:type", String)
    ], Line.prototype, "lineCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineProperties" }),
        __metadata("design:type", LineProperties)
    ], Line.prototype, "lineProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineType" }),
        __metadata("design:type", String)
    ], Line.prototype, "lineType", void 0);
    return Line;
}(SpeakeasyBase));
export { Line };
