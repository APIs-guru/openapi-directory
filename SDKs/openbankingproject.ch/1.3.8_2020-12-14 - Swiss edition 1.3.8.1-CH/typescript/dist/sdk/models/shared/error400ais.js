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
import { HrefType } from "./hreftype";
import { MessageCode400AisEnum } from "./messagecode400aisenum";
// Error400AisAdditionalErrors
/**
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
var Error400AisAdditionalErrors = /** @class */ (function (_super) {
    __extends(Error400AisAdditionalErrors, _super);
    function Error400AisAdditionalErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], Error400AisAdditionalErrors.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], Error400AisAdditionalErrors.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Error400AisAdditionalErrors.prototype, "title", void 0);
    return Error400AisAdditionalErrors;
}(SpeakeasyBase));
export { Error400AisAdditionalErrors };
// Error400Ais
/**
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 400 for AIS.
 *
**/
var Error400Ais = /** @class */ (function (_super) {
    __extends(Error400Ais, _super);
    function Error400Ais() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType }),
        __metadata("design:type", Map)
    ], Error400Ais.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalErrors", elemType: Error400AisAdditionalErrors }),
        __metadata("design:type", Array)
    ], Error400Ais.prototype, "additionalErrors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], Error400Ais.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], Error400Ais.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Error400Ais.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Error400Ais.prototype, "type", void 0);
    return Error400Ais;
}(SpeakeasyBase));
export { Error400Ais };
