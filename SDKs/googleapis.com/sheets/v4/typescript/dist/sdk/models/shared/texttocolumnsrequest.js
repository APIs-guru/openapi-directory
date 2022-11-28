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
import { GridRange } from "./gridrange";
export var TextToColumnsRequestDelimiterTypeEnum;
(function (TextToColumnsRequestDelimiterTypeEnum) {
    TextToColumnsRequestDelimiterTypeEnum["DelimiterTypeUnspecified"] = "DELIMITER_TYPE_UNSPECIFIED";
    TextToColumnsRequestDelimiterTypeEnum["Comma"] = "COMMA";
    TextToColumnsRequestDelimiterTypeEnum["Semicolon"] = "SEMICOLON";
    TextToColumnsRequestDelimiterTypeEnum["Period"] = "PERIOD";
    TextToColumnsRequestDelimiterTypeEnum["Space"] = "SPACE";
    TextToColumnsRequestDelimiterTypeEnum["Custom"] = "CUSTOM";
    TextToColumnsRequestDelimiterTypeEnum["Autodetect"] = "AUTODETECT";
})(TextToColumnsRequestDelimiterTypeEnum || (TextToColumnsRequestDelimiterTypeEnum = {}));
// TextToColumnsRequest
/**
 * Splits a column of text into multiple columns, based on a delimiter in each cell.
**/
var TextToColumnsRequest = /** @class */ (function (_super) {
    __extends(TextToColumnsRequest, _super);
    function TextToColumnsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delimiter" }),
        __metadata("design:type", String)
    ], TextToColumnsRequest.prototype, "delimiter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delimiterType" }),
        __metadata("design:type", String)
    ], TextToColumnsRequest.prototype, "delimiterType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", GridRange)
    ], TextToColumnsRequest.prototype, "source", void 0);
    return TextToColumnsRequest;
}(SpeakeasyBase));
export { TextToColumnsRequest };
