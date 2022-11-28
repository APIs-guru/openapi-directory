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
import { RepeatedEnumAttributeValue } from "./repeatedenumattributevalue";
import { UriAttributeValue } from "./uriattributevalue";
export var AttributeValueTypeEnum;
(function (AttributeValueTypeEnum) {
    AttributeValueTypeEnum["AttributeValueTypeUnspecified"] = "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED";
    AttributeValueTypeEnum["Bool"] = "BOOL";
    AttributeValueTypeEnum["Enum"] = "ENUM";
    AttributeValueTypeEnum["Url"] = "URL";
    AttributeValueTypeEnum["RepeatedEnum"] = "REPEATED_ENUM";
})(AttributeValueTypeEnum || (AttributeValueTypeEnum = {}));
// Attribute
/**
 * A location attribute. Attributes provide additional information about a location. The attributes that can be set on a location may vary based on the properties of that location (for example, category). Available attributes are determined by Google and may be added and removed without API changes.
**/
var Attribute = /** @class */ (function (_super) {
    __extends(Attribute, _super);
    function Attribute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Attribute.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repeatedEnumValue" }),
        __metadata("design:type", RepeatedEnumAttributeValue)
    ], Attribute.prototype, "repeatedEnumValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uriValues", elemType: UriAttributeValue }),
        __metadata("design:type", Array)
    ], Attribute.prototype, "uriValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valueType" }),
        __metadata("design:type", String)
    ], Attribute.prototype, "valueType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=values" }),
        __metadata("design:type", Array)
    ], Attribute.prototype, "values", void 0);
    return Attribute;
}(SpeakeasyBase));
export { Attribute };
// AttributeInput
/**
 * A location attribute. Attributes provide additional information about a location. The attributes that can be set on a location may vary based on the properties of that location (for example, category). Available attributes are determined by Google and may be added and removed without API changes.
**/
var AttributeInput = /** @class */ (function (_super) {
    __extends(AttributeInput, _super);
    function AttributeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AttributeInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repeatedEnumValue" }),
        __metadata("design:type", RepeatedEnumAttributeValue)
    ], AttributeInput.prototype, "repeatedEnumValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uriValues", elemType: UriAttributeValue }),
        __metadata("design:type", Array)
    ], AttributeInput.prototype, "uriValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=values" }),
        __metadata("design:type", Array)
    ], AttributeInput.prototype, "values", void 0);
    return AttributeInput;
}(SpeakeasyBase));
export { AttributeInput };
