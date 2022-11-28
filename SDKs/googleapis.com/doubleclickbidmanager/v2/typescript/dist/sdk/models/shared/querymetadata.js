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
import { DataRange } from "./datarange";
export var QueryMetadataFormatEnum;
(function (QueryMetadataFormatEnum) {
    QueryMetadataFormatEnum["FormatUnspecified"] = "FORMAT_UNSPECIFIED";
    QueryMetadataFormatEnum["Csv"] = "CSV";
    QueryMetadataFormatEnum["Xlsx"] = "XLSX";
})(QueryMetadataFormatEnum || (QueryMetadataFormatEnum = {}));
// QueryMetadata
/**
 * Query metadata.
**/
var QueryMetadata = /** @class */ (function (_super) {
    __extends(QueryMetadata, _super);
    function QueryMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataRange" }),
        __metadata("design:type", DataRange)
    ], QueryMetadata.prototype, "dataRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], QueryMetadata.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sendNotification" }),
        __metadata("design:type", Boolean)
    ], QueryMetadata.prototype, "sendNotification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shareEmailAddress" }),
        __metadata("design:type", Array)
    ], QueryMetadata.prototype, "shareEmailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], QueryMetadata.prototype, "title", void 0);
    return QueryMetadata;
}(SpeakeasyBase));
export { QueryMetadata };
