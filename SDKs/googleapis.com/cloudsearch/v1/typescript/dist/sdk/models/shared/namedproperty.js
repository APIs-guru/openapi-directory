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
import { DateValues } from "./datevalues";
import { DoubleValues } from "./doublevalues";
import { EnumValues } from "./enumvalues";
import { HtmlValues } from "./htmlvalues";
import { IntegerValues } from "./integervalues";
import { ObjectValues } from "./objectvalues";
import { TextValues } from "./textvalues";
import { TimestampValues } from "./timestampvalues";
// NamedProperty
/**
 * A typed name-value pair for structured data. The type of the value should be the same as the registered type for the `name` property in the object definition of `objectType`.
**/
var NamedProperty = /** @class */ (function (_super) {
    __extends(NamedProperty, _super);
    function NamedProperty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=booleanValue" }),
        __metadata("design:type", Boolean)
    ], NamedProperty.prototype, "booleanValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateValues" }),
        __metadata("design:type", DateValues)
    ], NamedProperty.prototype, "dateValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=doubleValues" }),
        __metadata("design:type", DoubleValues)
    ], NamedProperty.prototype, "doubleValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enumValues" }),
        __metadata("design:type", EnumValues)
    ], NamedProperty.prototype, "enumValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=htmlValues" }),
        __metadata("design:type", HtmlValues)
    ], NamedProperty.prototype, "htmlValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integerValues" }),
        __metadata("design:type", IntegerValues)
    ], NamedProperty.prototype, "integerValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NamedProperty.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectValues" }),
        __metadata("design:type", ObjectValues)
    ], NamedProperty.prototype, "objectValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textValues" }),
        __metadata("design:type", TextValues)
    ], NamedProperty.prototype, "textValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestampValues" }),
        __metadata("design:type", TimestampValues)
    ], NamedProperty.prototype, "timestampValues", void 0);
    return NamedProperty;
}(SpeakeasyBase));
export { NamedProperty };
