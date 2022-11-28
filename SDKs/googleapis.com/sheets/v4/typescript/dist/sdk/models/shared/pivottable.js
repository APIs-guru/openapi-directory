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
import { PivotGroup } from "./pivotgroup";
import { PivotFilterCriteria } from "./pivotfiltercriteria";
import { DataExecutionStatus } from "./dataexecutionstatus";
import { PivotFilterSpec } from "./pivotfilterspec";
import { GridRange } from "./gridrange";
import { PivotValue } from "./pivotvalue";
export var PivotTableValueLayoutEnum;
(function (PivotTableValueLayoutEnum) {
    PivotTableValueLayoutEnum["Horizontal"] = "HORIZONTAL";
    PivotTableValueLayoutEnum["Vertical"] = "VERTICAL";
})(PivotTableValueLayoutEnum || (PivotTableValueLayoutEnum = {}));
// PivotTable
/**
 * A pivot table.
**/
var PivotTable = /** @class */ (function (_super) {
    __extends(PivotTable, _super);
    function PivotTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=columns", elemType: PivotGroup }),
        __metadata("design:type", Array)
    ], PivotTable.prototype, "columns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=criteria", elemType: PivotFilterCriteria }),
        __metadata("design:type", Map)
    ], PivotTable.prototype, "criteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataExecutionStatus" }),
        __metadata("design:type", DataExecutionStatus)
    ], PivotTable.prototype, "dataExecutionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSourceId" }),
        __metadata("design:type", String)
    ], PivotTable.prototype, "dataSourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filterSpecs", elemType: PivotFilterSpec }),
        __metadata("design:type", Array)
    ], PivotTable.prototype, "filterSpecs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rows", elemType: PivotGroup }),
        __metadata("design:type", Array)
    ], PivotTable.prototype, "rows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", GridRange)
    ], PivotTable.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valueLayout" }),
        __metadata("design:type", String)
    ], PivotTable.prototype, "valueLayout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=values", elemType: PivotValue }),
        __metadata("design:type", Array)
    ], PivotTable.prototype, "values", void 0);
    return PivotTable;
}(SpeakeasyBase));
export { PivotTable };
