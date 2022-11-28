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
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
export var OrgChartSpecNodeSizeEnum;
(function (OrgChartSpecNodeSizeEnum) {
    OrgChartSpecNodeSizeEnum["OrgChartLabelSizeUnspecified"] = "ORG_CHART_LABEL_SIZE_UNSPECIFIED";
    OrgChartSpecNodeSizeEnum["Small"] = "SMALL";
    OrgChartSpecNodeSizeEnum["Medium"] = "MEDIUM";
    OrgChartSpecNodeSizeEnum["Large"] = "LARGE";
})(OrgChartSpecNodeSizeEnum || (OrgChartSpecNodeSizeEnum = {}));
// OrgChartSpec
/**
 * An org chart. Org charts require a unique set of labels in labels and may optionally include parent_labels and tooltips. parent_labels contain, for each node, the label identifying the parent node. tooltips contain, for each node, an optional tooltip. For example, to describe an OrgChart with Alice as the CEO, Bob as the President (reporting to Alice) and Cathy as VP of Sales (also reporting to Alice), have labels contain "Alice", "Bob", "Cathy", parent_labels contain "", "Alice", "Alice" and tooltips contain "CEO", "President", "VP Sales".
**/
var OrgChartSpec = /** @class */ (function (_super) {
    __extends(OrgChartSpec, _super);
    function OrgChartSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", ChartData)
    ], OrgChartSpec.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeColor" }),
        __metadata("design:type", Color)
    ], OrgChartSpec.prototype, "nodeColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeColorStyle" }),
        __metadata("design:type", ColorStyle)
    ], OrgChartSpec.prototype, "nodeColorStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeSize" }),
        __metadata("design:type", String)
    ], OrgChartSpec.prototype, "nodeSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentLabels" }),
        __metadata("design:type", ChartData)
    ], OrgChartSpec.prototype, "parentLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selectedNodeColor" }),
        __metadata("design:type", Color)
    ], OrgChartSpec.prototype, "selectedNodeColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selectedNodeColorStyle" }),
        __metadata("design:type", ColorStyle)
    ], OrgChartSpec.prototype, "selectedNodeColorStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tooltips" }),
        __metadata("design:type", ChartData)
    ], OrgChartSpec.prototype, "tooltips", void 0);
    return OrgChartSpec;
}(SpeakeasyBase));
export { OrgChartSpec };
