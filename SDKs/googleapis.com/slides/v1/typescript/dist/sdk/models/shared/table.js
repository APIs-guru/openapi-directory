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
import { TableBorderRow } from "./tableborderrow";
import { TableColumnProperties } from "./tablecolumnproperties";
import { TableRow } from "./tablerow";
// Table
/**
 * A PageElement kind representing a table.
**/
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=columns" }),
        __metadata("design:type", Number)
    ], Table.prototype, "columns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=horizontalBorderRows", elemType: TableBorderRow }),
        __metadata("design:type", Array)
    ], Table.prototype, "horizontalBorderRows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rows" }),
        __metadata("design:type", Number)
    ], Table.prototype, "rows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tableColumns", elemType: TableColumnProperties }),
        __metadata("design:type", Array)
    ], Table.prototype, "tableColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tableRows", elemType: TableRow }),
        __metadata("design:type", Array)
    ], Table.prototype, "tableRows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verticalBorderRows", elemType: TableBorderRow }),
        __metadata("design:type", Array)
    ], Table.prototype, "verticalBorderRows", void 0);
    return Table;
}(SpeakeasyBase));
export { Table };
