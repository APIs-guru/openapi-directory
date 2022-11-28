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
import { DataFilterValueRange } from "./datafiltervaluerange";
export var BatchUpdateValuesByDataFilterRequestResponseDateTimeRenderOptionEnum;
(function (BatchUpdateValuesByDataFilterRequestResponseDateTimeRenderOptionEnum) {
    BatchUpdateValuesByDataFilterRequestResponseDateTimeRenderOptionEnum["SerialNumber"] = "SERIAL_NUMBER";
    BatchUpdateValuesByDataFilterRequestResponseDateTimeRenderOptionEnum["FormattedString"] = "FORMATTED_STRING";
})(BatchUpdateValuesByDataFilterRequestResponseDateTimeRenderOptionEnum || (BatchUpdateValuesByDataFilterRequestResponseDateTimeRenderOptionEnum = {}));
export var BatchUpdateValuesByDataFilterRequestResponseValueRenderOptionEnum;
(function (BatchUpdateValuesByDataFilterRequestResponseValueRenderOptionEnum) {
    BatchUpdateValuesByDataFilterRequestResponseValueRenderOptionEnum["FormattedValue"] = "FORMATTED_VALUE";
    BatchUpdateValuesByDataFilterRequestResponseValueRenderOptionEnum["UnformattedValue"] = "UNFORMATTED_VALUE";
    BatchUpdateValuesByDataFilterRequestResponseValueRenderOptionEnum["Formula"] = "FORMULA";
})(BatchUpdateValuesByDataFilterRequestResponseValueRenderOptionEnum || (BatchUpdateValuesByDataFilterRequestResponseValueRenderOptionEnum = {}));
export var BatchUpdateValuesByDataFilterRequestValueInputOptionEnum;
(function (BatchUpdateValuesByDataFilterRequestValueInputOptionEnum) {
    BatchUpdateValuesByDataFilterRequestValueInputOptionEnum["InputValueOptionUnspecified"] = "INPUT_VALUE_OPTION_UNSPECIFIED";
    BatchUpdateValuesByDataFilterRequestValueInputOptionEnum["Raw"] = "RAW";
    BatchUpdateValuesByDataFilterRequestValueInputOptionEnum["UserEntered"] = "USER_ENTERED";
})(BatchUpdateValuesByDataFilterRequestValueInputOptionEnum || (BatchUpdateValuesByDataFilterRequestValueInputOptionEnum = {}));
// BatchUpdateValuesByDataFilterRequest
/**
 * The request for updating more than one range of values in a spreadsheet.
**/
var BatchUpdateValuesByDataFilterRequest = /** @class */ (function (_super) {
    __extends(BatchUpdateValuesByDataFilterRequest, _super);
    function BatchUpdateValuesByDataFilterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: DataFilterValueRange }),
        __metadata("design:type", Array)
    ], BatchUpdateValuesByDataFilterRequest.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeValuesInResponse" }),
        __metadata("design:type", Boolean)
    ], BatchUpdateValuesByDataFilterRequest.prototype, "includeValuesInResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseDateTimeRenderOption" }),
        __metadata("design:type", String)
    ], BatchUpdateValuesByDataFilterRequest.prototype, "responseDateTimeRenderOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseValueRenderOption" }),
        __metadata("design:type", String)
    ], BatchUpdateValuesByDataFilterRequest.prototype, "responseValueRenderOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valueInputOption" }),
        __metadata("design:type", String)
    ], BatchUpdateValuesByDataFilterRequest.prototype, "valueInputOption", void 0);
    return BatchUpdateValuesByDataFilterRequest;
}(SpeakeasyBase));
export { BatchUpdateValuesByDataFilterRequest };
