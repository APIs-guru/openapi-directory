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
import { MessageCode405SbsEnum } from "./messagecode405sbsenum";
// Error405SbsAdditionalErrors
/**
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
var Error405SbsAdditionalErrors = /** @class */ (function (_super) {
    __extends(Error405SbsAdditionalErrors, _super);
    function Error405SbsAdditionalErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], Error405SbsAdditionalErrors.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], Error405SbsAdditionalErrors.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Error405SbsAdditionalErrors.prototype, "title", void 0);
    return Error405SbsAdditionalErrors;
}(SpeakeasyBase));
export { Error405SbsAdditionalErrors };
// Error405Sbs
/**
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 405 for signing baskets.
 *
**/
var Error405Sbs = /** @class */ (function (_super) {
    __extends(Error405Sbs, _super);
    function Error405Sbs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType }),
        __metadata("design:type", Map)
    ], Error405Sbs.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalErrors", elemType: Error405SbsAdditionalErrors }),
        __metadata("design:type", Array)
    ], Error405Sbs.prototype, "additionalErrors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], Error405Sbs.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], Error405Sbs.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Error405Sbs.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Error405Sbs.prototype, "type", void 0);
    return Error405Sbs;
}(SpeakeasyBase));
export { Error405Sbs };
