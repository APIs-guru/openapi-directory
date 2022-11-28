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
import { AlertChart } from "./alertchart";
import { CollapsibleGroup } from "./collapsiblegroup";
import { LogsPanel } from "./logspanel";
import { Scorecard } from "./scorecard";
import { Text } from "./text";
import { TimeSeriesTable } from "./timeseriestable";
import { XyChart } from "./xychart";
// Widget
/**
 * Widget contains a single dashboard component and configuration of how to present the component in the dashboard.
**/
var Widget = /** @class */ (function (_super) {
    __extends(Widget, _super);
    function Widget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alertChart" }),
        __metadata("design:type", AlertChart)
    ], Widget.prototype, "alertChart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blank" }),
        __metadata("design:type", Map)
    ], Widget.prototype, "blank", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collapsibleGroup" }),
        __metadata("design:type", CollapsibleGroup)
    ], Widget.prototype, "collapsibleGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logsPanel" }),
        __metadata("design:type", LogsPanel)
    ], Widget.prototype, "logsPanel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scorecard" }),
        __metadata("design:type", Scorecard)
    ], Widget.prototype, "scorecard", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", Text)
    ], Widget.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeSeriesTable" }),
        __metadata("design:type", TimeSeriesTable)
    ], Widget.prototype, "timeSeriesTable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Widget.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=xyChart" }),
        __metadata("design:type", XyChart)
    ], Widget.prototype, "xyChart", void 0);
    return Widget;
}(SpeakeasyBase));
export { Widget };
