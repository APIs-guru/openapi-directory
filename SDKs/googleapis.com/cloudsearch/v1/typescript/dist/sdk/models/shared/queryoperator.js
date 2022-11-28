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
export var QueryOperatorTypeEnum;
(function (QueryOperatorTypeEnum) {
    QueryOperatorTypeEnum["Unknown"] = "UNKNOWN";
    QueryOperatorTypeEnum["Integer"] = "INTEGER";
    QueryOperatorTypeEnum["Double"] = "DOUBLE";
    QueryOperatorTypeEnum["Timestamp"] = "TIMESTAMP";
    QueryOperatorTypeEnum["Boolean"] = "BOOLEAN";
    QueryOperatorTypeEnum["Enum"] = "ENUM";
    QueryOperatorTypeEnum["Date"] = "DATE";
    QueryOperatorTypeEnum["Text"] = "TEXT";
    QueryOperatorTypeEnum["Html"] = "HTML";
})(QueryOperatorTypeEnum || (QueryOperatorTypeEnum = {}));
// QueryOperator
/**
 * The definition of a operator that can be used in a Search/Suggest request.
**/
var QueryOperator = /** @class */ (function (_super) {
    __extends(QueryOperator, _super);
    function QueryOperator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], QueryOperator.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enumValues" }),
        __metadata("design:type", Array)
    ], QueryOperator.prototype, "enumValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=greaterThanOperatorName" }),
        __metadata("design:type", String)
    ], QueryOperator.prototype, "greaterThanOperatorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isFacetable" }),
        __metadata("design:type", Boolean)
    ], QueryOperator.prototype, "isFacetable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isRepeatable" }),
        __metadata("design:type", Boolean)
    ], QueryOperator.prototype, "isRepeatable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isReturnable" }),
        __metadata("design:type", Boolean)
    ], QueryOperator.prototype, "isReturnable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSortable" }),
        __metadata("design:type", Boolean)
    ], QueryOperator.prototype, "isSortable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSuggestable" }),
        __metadata("design:type", Boolean)
    ], QueryOperator.prototype, "isSuggestable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lessThanOperatorName" }),
        __metadata("design:type", String)
    ], QueryOperator.prototype, "lessThanOperatorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectType" }),
        __metadata("design:type", String)
    ], QueryOperator.prototype, "objectType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operatorName" }),
        __metadata("design:type", String)
    ], QueryOperator.prototype, "operatorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], QueryOperator.prototype, "type", void 0);
    return QueryOperator;
}(SpeakeasyBase));
export { QueryOperator };
