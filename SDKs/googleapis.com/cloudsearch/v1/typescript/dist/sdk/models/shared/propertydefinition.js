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
import { BooleanPropertyOptions } from "./booleanpropertyoptions";
import { DatePropertyOptions } from "./datepropertyoptions";
import { PropertyDisplayOptions } from "./propertydisplayoptions";
import { DoublePropertyOptions } from "./doublepropertyoptions";
import { EnumPropertyOptions } from "./enumpropertyoptions";
import { HtmlPropertyOptions } from "./htmlpropertyoptions";
import { IntegerPropertyOptions } from "./integerpropertyoptions";
import { ObjectPropertyOptions } from "./objectpropertyoptions";
import { TextPropertyOptions } from "./textpropertyoptions";
import { TimestampPropertyOptions } from "./timestamppropertyoptions";
// PropertyDefinition
/**
 * The definition of a property within an object.
**/
var PropertyDefinition = /** @class */ (function (_super) {
    __extends(PropertyDefinition, _super);
    function PropertyDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=booleanPropertyOptions" }),
        __metadata("design:type", BooleanPropertyOptions)
    ], PropertyDefinition.prototype, "booleanPropertyOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datePropertyOptions" }),
        __metadata("design:type", DatePropertyOptions)
    ], PropertyDefinition.prototype, "datePropertyOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayOptions" }),
        __metadata("design:type", PropertyDisplayOptions)
    ], PropertyDefinition.prototype, "displayOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=doublePropertyOptions" }),
        __metadata("design:type", DoublePropertyOptions)
    ], PropertyDefinition.prototype, "doublePropertyOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enumPropertyOptions" }),
        __metadata("design:type", EnumPropertyOptions)
    ], PropertyDefinition.prototype, "enumPropertyOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=htmlPropertyOptions" }),
        __metadata("design:type", HtmlPropertyOptions)
    ], PropertyDefinition.prototype, "htmlPropertyOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integerPropertyOptions" }),
        __metadata("design:type", IntegerPropertyOptions)
    ], PropertyDefinition.prototype, "integerPropertyOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isFacetable" }),
        __metadata("design:type", Boolean)
    ], PropertyDefinition.prototype, "isFacetable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isRepeatable" }),
        __metadata("design:type", Boolean)
    ], PropertyDefinition.prototype, "isRepeatable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isReturnable" }),
        __metadata("design:type", Boolean)
    ], PropertyDefinition.prototype, "isReturnable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSortable" }),
        __metadata("design:type", Boolean)
    ], PropertyDefinition.prototype, "isSortable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSuggestable" }),
        __metadata("design:type", Boolean)
    ], PropertyDefinition.prototype, "isSuggestable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isWildcardSearchable" }),
        __metadata("design:type", Boolean)
    ], PropertyDefinition.prototype, "isWildcardSearchable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PropertyDefinition.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectPropertyOptions" }),
        __metadata("design:type", ObjectPropertyOptions)
    ], PropertyDefinition.prototype, "objectPropertyOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textPropertyOptions" }),
        __metadata("design:type", TextPropertyOptions)
    ], PropertyDefinition.prototype, "textPropertyOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestampPropertyOptions" }),
        __metadata("design:type", TimestampPropertyOptions)
    ], PropertyDefinition.prototype, "timestampPropertyOptions", void 0);
    return PropertyDefinition;
}(SpeakeasyBase));
export { PropertyDefinition };
