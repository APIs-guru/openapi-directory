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
import { MessageCode405AisEnum } from "./messagecode405aisenum";
// Error405AisAdditionalErrors
/**
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
var Error405AisAdditionalErrors = /** @class */ (function (_super) {
    __extends(Error405AisAdditionalErrors, _super);
    function Error405AisAdditionalErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], Error405AisAdditionalErrors.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], Error405AisAdditionalErrors.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Error405AisAdditionalErrors.prototype, "title", void 0);
    return Error405AisAdditionalErrors;
}(SpeakeasyBase));
export { Error405AisAdditionalErrors };
// Error405Ais
/**
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 405 for AIS.
 *
**/
var Error405Ais = /** @class */ (function (_super) {
    __extends(Error405Ais, _super);
    function Error405Ais() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType }),
        __metadata("design:type", Map)
    ], Error405Ais.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalErrors", elemType: Error405AisAdditionalErrors }),
        __metadata("design:type", Array)
    ], Error405Ais.prototype, "additionalErrors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], Error405Ais.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], Error405Ais.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Error405Ais.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Error405Ais.prototype, "type", void 0);
    return Error405Ais;
}(SpeakeasyBase));
export { Error405Ais };
