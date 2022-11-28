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
import { ChartData } from "./chartdata";
import { TextFormat } from "./textformat";
export var DataLabelPlacementEnum;
(function (DataLabelPlacementEnum) {
    DataLabelPlacementEnum["DataLabelPlacementUnspecified"] = "DATA_LABEL_PLACEMENT_UNSPECIFIED";
    DataLabelPlacementEnum["Center"] = "CENTER";
    DataLabelPlacementEnum["Left"] = "LEFT";
    DataLabelPlacementEnum["Right"] = "RIGHT";
    DataLabelPlacementEnum["Above"] = "ABOVE";
    DataLabelPlacementEnum["Below"] = "BELOW";
    DataLabelPlacementEnum["InsideEnd"] = "INSIDE_END";
    DataLabelPlacementEnum["InsideBase"] = "INSIDE_BASE";
    DataLabelPlacementEnum["OutsideEnd"] = "OUTSIDE_END";
})(DataLabelPlacementEnum || (DataLabelPlacementEnum = {}));
export var DataLabelTypeEnum;
(function (DataLabelTypeEnum) {
    DataLabelTypeEnum["DataLabelTypeUnspecified"] = "DATA_LABEL_TYPE_UNSPECIFIED";
    DataLabelTypeEnum["None"] = "NONE";
    DataLabelTypeEnum["Data"] = "DATA";
    DataLabelTypeEnum["Custom"] = "CUSTOM";
})(DataLabelTypeEnum || (DataLabelTypeEnum = {}));
// DataLabel
/**
 * Settings for one set of data labels. Data labels are annotations that appear next to a set of data, such as the points on a line chart, and provide additional information about what the data represents, such as a text representation of the value behind that point on the graph.
**/
var DataLabel = /** @class */ (function (_super) {
    __extends(DataLabel, _super);
    function DataLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customLabelData" }),
        __metadata("design:type", ChartData)
    ], DataLabel.prototype, "customLabelData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placement" }),
        __metadata("design:type", String)
    ], DataLabel.prototype, "placement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textFormat" }),
        __metadata("design:type", TextFormat)
    ], DataLabel.prototype, "textFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DataLabel.prototype, "type", void 0);
    return DataLabel;
}(SpeakeasyBase));
export { DataLabel };
