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
export var GoogleCloudChannelV1ColumnDataTypeEnum;
(function (GoogleCloudChannelV1ColumnDataTypeEnum) {
    GoogleCloudChannelV1ColumnDataTypeEnum["DataTypeUnspecified"] = "DATA_TYPE_UNSPECIFIED";
    GoogleCloudChannelV1ColumnDataTypeEnum["String"] = "STRING";
    GoogleCloudChannelV1ColumnDataTypeEnum["Int"] = "INT";
    GoogleCloudChannelV1ColumnDataTypeEnum["Decimal"] = "DECIMAL";
    GoogleCloudChannelV1ColumnDataTypeEnum["Money"] = "MONEY";
    GoogleCloudChannelV1ColumnDataTypeEnum["Date"] = "DATE";
    GoogleCloudChannelV1ColumnDataTypeEnum["DateTime"] = "DATE_TIME";
})(GoogleCloudChannelV1ColumnDataTypeEnum || (GoogleCloudChannelV1ColumnDataTypeEnum = {}));
// GoogleCloudChannelV1Column
/**
 * The definition of a report column. Specifies the data properties in the corresponding position of the report rows.
**/
var GoogleCloudChannelV1Column = /** @class */ (function (_super) {
    __extends(GoogleCloudChannelV1Column, _super);
    function GoogleCloudChannelV1Column() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=columnId" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1Column.prototype, "columnId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataType" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1Column.prototype, "dataType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1Column.prototype, "displayName", void 0);
    return GoogleCloudChannelV1Column;
}(SpeakeasyBase));
export { GoogleCloudChannelV1Column };
