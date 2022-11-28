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
import { FieldMetadata } from "./fieldmetadata";
import { FieldMetadataInput } from "./fieldmetadata";
// Address
/**
 * A person's physical address. May be a P.O. box or street address. All fields are optional.
**/
var Address = /** @class */ (function (_super) {
    __extends(Address, _super);
    function Address() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], Address.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], Address.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=countryCode" }),
        __metadata("design:type", String)
    ], Address.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extendedAddress" }),
        __metadata("design:type", String)
    ], Address.prototype, "extendedAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=formattedType" }),
        __metadata("design:type", String)
    ], Address.prototype, "formattedType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=formattedValue" }),
        __metadata("design:type", String)
    ], Address.prototype, "formattedValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", FieldMetadata)
    ], Address.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=poBox" }),
        __metadata("design:type", String)
    ], Address.prototype, "poBox", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postalCode" }),
        __metadata("design:type", String)
    ], Address.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], Address.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=streetAddress" }),
        __metadata("design:type", String)
    ], Address.prototype, "streetAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Address.prototype, "type", void 0);
    return Address;
}(SpeakeasyBase));
export { Address };
// AddressInput
/**
 * A person's physical address. May be a P.O. box or street address. All fields are optional.
**/
var AddressInput = /** @class */ (function (_super) {
    __extends(AddressInput, _super);
    function AddressInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], AddressInput.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], AddressInput.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=countryCode" }),
        __metadata("design:type", String)
    ], AddressInput.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extendedAddress" }),
        __metadata("design:type", String)
    ], AddressInput.prototype, "extendedAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=formattedValue" }),
        __metadata("design:type", String)
    ], AddressInput.prototype, "formattedValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", FieldMetadataInput)
    ], AddressInput.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=poBox" }),
        __metadata("design:type", String)
    ], AddressInput.prototype, "poBox", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postalCode" }),
        __metadata("design:type", String)
    ], AddressInput.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], AddressInput.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=streetAddress" }),
        __metadata("design:type", String)
    ], AddressInput.prototype, "streetAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AddressInput.prototype, "type", void 0);
    return AddressInput;
}(SpeakeasyBase));
export { AddressInput };
