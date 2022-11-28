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
var NiResponseJsonBasic = /** @class */ (function (_super) {
    __extends(NiResponseJsonBasic, _super);
    function NiResponseJsonBasic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country_code" }),
        __metadata("design:type", String)
    ], NiResponseJsonBasic.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country_code_iso3" }),
        __metadata("design:type", String)
    ], NiResponseJsonBasic.prototype, "countryCodeIso3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country_name" }),
        __metadata("design:type", String)
    ], NiResponseJsonBasic.prototype, "countryName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country_prefix" }),
        __metadata("design:type", String)
    ], NiResponseJsonBasic.prototype, "countryPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=international_format_number" }),
        __metadata("design:type", String)
    ], NiResponseJsonBasic.prototype, "internationalFormatNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=national_format_number" }),
        __metadata("design:type", String)
    ], NiResponseJsonBasic.prototype, "nationalFormatNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], NiResponseJsonBasic.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], NiResponseJsonBasic.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_message" }),
        __metadata("design:type", String)
    ], NiResponseJsonBasic.prototype, "statusMessage", void 0);
    return NiResponseJsonBasic;
}(SpeakeasyBase));
export { NiResponseJsonBasic };
