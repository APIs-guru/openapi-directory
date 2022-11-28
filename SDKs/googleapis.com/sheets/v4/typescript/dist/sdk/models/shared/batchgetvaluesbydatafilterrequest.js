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
import { DataFilter } from "./datafilter";
export var BatchGetValuesByDataFilterRequestDateTimeRenderOptionEnum;
(function (BatchGetValuesByDataFilterRequestDateTimeRenderOptionEnum) {
    BatchGetValuesByDataFilterRequestDateTimeRenderOptionEnum["SerialNumber"] = "SERIAL_NUMBER";
    BatchGetValuesByDataFilterRequestDateTimeRenderOptionEnum["FormattedString"] = "FORMATTED_STRING";
})(BatchGetValuesByDataFilterRequestDateTimeRenderOptionEnum || (BatchGetValuesByDataFilterRequestDateTimeRenderOptionEnum = {}));
export var BatchGetValuesByDataFilterRequestMajorDimensionEnum;
(function (BatchGetValuesByDataFilterRequestMajorDimensionEnum) {
    BatchGetValuesByDataFilterRequestMajorDimensionEnum["DimensionUnspecified"] = "DIMENSION_UNSPECIFIED";
    BatchGetValuesByDataFilterRequestMajorDimensionEnum["Rows"] = "ROWS";
    BatchGetValuesByDataFilterRequestMajorDimensionEnum["Columns"] = "COLUMNS";
})(BatchGetValuesByDataFilterRequestMajorDimensionEnum || (BatchGetValuesByDataFilterRequestMajorDimensionEnum = {}));
export var BatchGetValuesByDataFilterRequestValueRenderOptionEnum;
(function (BatchGetValuesByDataFilterRequestValueRenderOptionEnum) {
    BatchGetValuesByDataFilterRequestValueRenderOptionEnum["FormattedValue"] = "FORMATTED_VALUE";
    BatchGetValuesByDataFilterRequestValueRenderOptionEnum["UnformattedValue"] = "UNFORMATTED_VALUE";
    BatchGetValuesByDataFilterRequestValueRenderOptionEnum["Formula"] = "FORMULA";
})(BatchGetValuesByDataFilterRequestValueRenderOptionEnum || (BatchGetValuesByDataFilterRequestValueRenderOptionEnum = {}));
// BatchGetValuesByDataFilterRequest
/**
 * The request for retrieving a range of values in a spreadsheet selected by a set of DataFilters.
**/
var BatchGetValuesByDataFilterRequest = /** @class */ (function (_super) {
    __extends(BatchGetValuesByDataFilterRequest, _super);
    function BatchGetValuesByDataFilterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataFilters", elemType: DataFilter }),
        __metadata("design:type", Array)
    ], BatchGetValuesByDataFilterRequest.prototype, "dataFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateTimeRenderOption" }),
        __metadata("design:type", String)
    ], BatchGetValuesByDataFilterRequest.prototype, "dateTimeRenderOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=majorDimension" }),
        __metadata("design:type", String)
    ], BatchGetValuesByDataFilterRequest.prototype, "majorDimension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valueRenderOption" }),
        __metadata("design:type", String)
    ], BatchGetValuesByDataFilterRequest.prototype, "valueRenderOption", void 0);
    return BatchGetValuesByDataFilterRequest;
}(SpeakeasyBase));
export { BatchGetValuesByDataFilterRequest };
