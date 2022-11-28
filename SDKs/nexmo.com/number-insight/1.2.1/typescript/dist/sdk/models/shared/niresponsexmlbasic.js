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
// NiResponseXmlBasicError
/**
 * The error code and status of your request
**/
var NiResponseXmlBasicError = /** @class */ (function (_super) {
    __extends(NiResponseXmlBasicError, _super);
    function NiResponseXmlBasicError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlBasicError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlBasicError.prototype, "statusText", void 0);
    return NiResponseXmlBasicError;
}(SpeakeasyBase));
export { NiResponseXmlBasicError };
// NiResponseXmlBasicLocalNumber
/**
 * An object containing the `number` in your request in the format used by the country the number belongs to.
**/
var NiResponseXmlBasicLocalNumber = /** @class */ (function (_super) {
    __extends(NiResponseXmlBasicLocalNumber, _super);
    function NiResponseXmlBasicLocalNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlBasicLocalNumber.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlBasicLocalNumber.prototype, "countryCodeIso3", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlBasicLocalNumber.prototype, "countryName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlBasicLocalNumber.prototype, "countryPrefix", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlBasicLocalNumber.prototype, "number", void 0);
    return NiResponseXmlBasicLocalNumber;
}(SpeakeasyBase));
export { NiResponseXmlBasicLocalNumber };
// NiResponseXmlBasic
/**
 * Basic
**/
var NiResponseXmlBasic = /** @class */ (function (_super) {
    __extends(NiResponseXmlBasic, _super);
    function NiResponseXmlBasic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NiResponseXmlBasicError)
    ], NiResponseXmlBasic.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlBasic.prototype, "internationalFormatNumber", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NiResponseXmlBasicLocalNumber)
    ], NiResponseXmlBasic.prototype, "localNumber", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlBasic.prototype, "requestId", void 0);
    return NiResponseXmlBasic;
}(SpeakeasyBase));
export { NiResponseXmlBasic };
