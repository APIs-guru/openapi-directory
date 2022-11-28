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
import { Price } from "./price";
import { VariantOption } from "./variantoption";
import { PresentationDto } from "./presentationdto";
var VariantDto = /** @class */ (function (_super) {
    __extends(VariantDto, _super);
    function VariantDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=barcode" }),
        __metadata("design:type", String)
    ], VariantDto.prototype, "barcode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=costPrice" }),
        __metadata("design:type", Price)
    ], VariantDto.prototype, "costPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], VariantDto.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], VariantDto.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options", elemType: VariantOption }),
        __metadata("design:type", Array)
    ], VariantDto.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=presentation" }),
        __metadata("design:type", PresentationDto)
    ], VariantDto.prototype, "presentation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", Price)
    ], VariantDto.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sku" }),
        __metadata("design:type", String)
    ], VariantDto.prototype, "sku", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], VariantDto.prototype, "uuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vatPercentage" }),
        __metadata("design:type", Number)
    ], VariantDto.prototype, "vatPercentage", void 0);
    return VariantDto;
}(SpeakeasyBase));
export { VariantDto };
