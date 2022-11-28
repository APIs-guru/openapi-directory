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
import { FieldMetadataInput } from "./fieldmetadata";
import { FieldMetadata } from "./fieldmetadata";
// NameInput
/**
 * A person's name. If the name is a mononym, the family name is empty.
**/
var NameInput = /** @class */ (function (_super) {
    __extends(NameInput, _super);
    function NameInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=familyName" }),
        __metadata("design:type", String)
    ], NameInput.prototype, "familyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=givenName" }),
        __metadata("design:type", String)
    ], NameInput.prototype, "givenName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=honorificPrefix" }),
        __metadata("design:type", String)
    ], NameInput.prototype, "honorificPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=honorificSuffix" }),
        __metadata("design:type", String)
    ], NameInput.prototype, "honorificSuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", FieldMetadataInput)
    ], NameInput.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=middleName" }),
        __metadata("design:type", String)
    ], NameInput.prototype, "middleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phoneticFamilyName" }),
        __metadata("design:type", String)
    ], NameInput.prototype, "phoneticFamilyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phoneticFullName" }),
        __metadata("design:type", String)
    ], NameInput.prototype, "phoneticFullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phoneticGivenName" }),
        __metadata("design:type", String)
    ], NameInput.prototype, "phoneticGivenName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phoneticHonorificPrefix" }),
        __metadata("design:type", String)
    ], NameInput.prototype, "phoneticHonorificPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phoneticHonorificSuffix" }),
        __metadata("design:type", String)
    ], NameInput.prototype, "phoneticHonorificSuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phoneticMiddleName" }),
        __metadata("design:type", String)
    ], NameInput.prototype, "phoneticMiddleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unstructuredName" }),
        __metadata("design:type", String)
    ], NameInput.prototype, "unstructuredName", void 0);
    return NameInput;
}(SpeakeasyBase));
export { NameInput };
// Name
/**
 * A person's name. If the name is a mononym, the family name is empty.
**/
var Name = /** @class */ (function (_super) {
    __extends(Name, _super);
    function Name() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Name.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayNameLastFirst" }),
        __metadata("design:type", String)
    ], Name.prototype, "displayNameLastFirst", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=familyName" }),
        __metadata("design:type", String)
    ], Name.prototype, "familyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=givenName" }),
        __metadata("design:type", String)
    ], Name.prototype, "givenName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=honorificPrefix" }),
        __metadata("design:type", String)
    ], Name.prototype, "honorificPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=honorificSuffix" }),
        __metadata("design:type", String)
    ], Name.prototype, "honorificSuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", FieldMetadata)
    ], Name.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=middleName" }),
        __metadata("design:type", String)
    ], Name.prototype, "middleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phoneticFamilyName" }),
        __metadata("design:type", String)
    ], Name.prototype, "phoneticFamilyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phoneticFullName" }),
        __metadata("design:type", String)
    ], Name.prototype, "phoneticFullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phoneticGivenName" }),
        __metadata("design:type", String)
    ], Name.prototype, "phoneticGivenName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phoneticHonorificPrefix" }),
        __metadata("design:type", String)
    ], Name.prototype, "phoneticHonorificPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phoneticHonorificSuffix" }),
        __metadata("design:type", String)
    ], Name.prototype, "phoneticHonorificSuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phoneticMiddleName" }),
        __metadata("design:type", String)
    ], Name.prototype, "phoneticMiddleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unstructuredName" }),
        __metadata("design:type", String)
    ], Name.prototype, "unstructuredName", void 0);
    return Name;
}(SpeakeasyBase));
export { Name };
