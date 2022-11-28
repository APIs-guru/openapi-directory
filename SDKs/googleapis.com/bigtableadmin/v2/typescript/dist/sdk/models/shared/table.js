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
import { ClusterState } from "./clusterstate";
import { ColumnFamily } from "./columnfamily";
import { RestoreInfo1 } from "./restoreinfo1";
import { TableStats } from "./tablestats";
import { RestoreInfo } from "./restoreinfo";
export var TableGranularityEnum;
(function (TableGranularityEnum) {
    TableGranularityEnum["TimestampGranularityUnspecified"] = "TIMESTAMP_GRANULARITY_UNSPECIFIED";
    TableGranularityEnum["Millis"] = "MILLIS";
})(TableGranularityEnum || (TableGranularityEnum = {}));
// Table
/**
 * A collection of user data indexed by row, column, and timestamp. Each table is served using the resources of its parent cluster.
**/
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clusterStates", elemType: ClusterState }),
        __metadata("design:type", Map)
    ], Table.prototype, "clusterStates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=columnFamilies", elemType: ColumnFamily }),
        __metadata("design:type", Map)
    ], Table.prototype, "columnFamilies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deletionProtection" }),
        __metadata("design:type", Boolean)
    ], Table.prototype, "deletionProtection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=granularity" }),
        __metadata("design:type", String)
    ], Table.prototype, "granularity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Table.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restoreInfo" }),
        __metadata("design:type", RestoreInfo1)
    ], Table.prototype, "restoreInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stats" }),
        __metadata("design:type", TableStats)
    ], Table.prototype, "stats", void 0);
    return Table;
}(SpeakeasyBase));
export { Table };
// TableInput
/**
 * A collection of user data indexed by row, column, and timestamp. Each table is served using the resources of its parent cluster.
**/
var TableInput = /** @class */ (function (_super) {
    __extends(TableInput, _super);
    function TableInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=columnFamilies", elemType: ColumnFamily }),
        __metadata("design:type", Map)
    ], TableInput.prototype, "columnFamilies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deletionProtection" }),
        __metadata("design:type", Boolean)
    ], TableInput.prototype, "deletionProtection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=granularity" }),
        __metadata("design:type", String)
    ], TableInput.prototype, "granularity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TableInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restoreInfo" }),
        __metadata("design:type", RestoreInfo)
    ], TableInput.prototype, "restoreInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stats" }),
        __metadata("design:type", TableStats)
    ], TableInput.prototype, "stats", void 0);
    return TableInput;
}(SpeakeasyBase));
export { TableInput };
