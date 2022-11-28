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
import { ValueRange } from "./valuerange";
export var BatchUpdateValuesRequestResponseDateTimeRenderOptionEnum;
(function (BatchUpdateValuesRequestResponseDateTimeRenderOptionEnum) {
    BatchUpdateValuesRequestResponseDateTimeRenderOptionEnum["SerialNumber"] = "SERIAL_NUMBER";
    BatchUpdateValuesRequestResponseDateTimeRenderOptionEnum["FormattedString"] = "FORMATTED_STRING";
})(BatchUpdateValuesRequestResponseDateTimeRenderOptionEnum || (BatchUpdateValuesRequestResponseDateTimeRenderOptionEnum = {}));
export var BatchUpdateValuesRequestResponseValueRenderOptionEnum;
(function (BatchUpdateValuesRequestResponseValueRenderOptionEnum) {
    BatchUpdateValuesRequestResponseValueRenderOptionEnum["FormattedValue"] = "FORMATTED_VALUE";
    BatchUpdateValuesRequestResponseValueRenderOptionEnum["UnformattedValue"] = "UNFORMATTED_VALUE";
    BatchUpdateValuesRequestResponseValueRenderOptionEnum["Formula"] = "FORMULA";
})(BatchUpdateValuesRequestResponseValueRenderOptionEnum || (BatchUpdateValuesRequestResponseValueRenderOptionEnum = {}));
export var BatchUpdateValuesRequestValueInputOptionEnum;
(function (BatchUpdateValuesRequestValueInputOptionEnum) {
    BatchUpdateValuesRequestValueInputOptionEnum["InputValueOptionUnspecified"] = "INPUT_VALUE_OPTION_UNSPECIFIED";
    BatchUpdateValuesRequestValueInputOptionEnum["Raw"] = "RAW";
    BatchUpdateValuesRequestValueInputOptionEnum["UserEntered"] = "USER_ENTERED";
})(BatchUpdateValuesRequestValueInputOptionEnum || (BatchUpdateValuesRequestValueInputOptionEnum = {}));
// BatchUpdateValuesRequest
/**
 * The request for updating more than one range of values in a spreadsheet.
**/
var BatchUpdateValuesRequest = /** @class */ (function (_super) {
    __extends(BatchUpdateValuesRequest, _super);
    function BatchUpdateValuesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: ValueRange }),
        __metadata("design:type", Array)
    ], BatchUpdateValuesRequest.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeValuesInResponse" }),
        __metadata("design:type", Boolean)
    ], BatchUpdateValuesRequest.prototype, "includeValuesInResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseDateTimeRenderOption" }),
        __metadata("design:type", String)
    ], BatchUpdateValuesRequest.prototype, "responseDateTimeRenderOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseValueRenderOption" }),
        __metadata("design:type", String)
    ], BatchUpdateValuesRequest.prototype, "responseValueRenderOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valueInputOption" }),
        __metadata("design:type", String)
    ], BatchUpdateValuesRequest.prototype, "valueInputOption", void 0);
    return BatchUpdateValuesRequest;
}(SpeakeasyBase));
export { BatchUpdateValuesRequest };
