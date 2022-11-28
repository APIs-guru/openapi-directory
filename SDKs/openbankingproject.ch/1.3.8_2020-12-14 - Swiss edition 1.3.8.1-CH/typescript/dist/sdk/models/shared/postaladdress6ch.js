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
// PostalAddress6Ch
/**
 * as in ISO pain.001.001.03.ch.02 PostalAddress6
 * If possible structured. Simultaneous use of the structured elements <StrtNm>/ <BldgNb>/<PstCd>/<TwnNm> and the unstructured element <AdrLine> is not permitted.
 * as in ISO pain.001.001.03.ch.02 PostalAddress6-CH
 *
**/
var PostalAddress6Ch = /** @class */ (function (_super) {
    __extends(PostalAddress6Ch, _super);
    function PostalAddress6Ch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressLine1" }),
        __metadata("design:type", String)
    ], PostalAddress6Ch.prototype, "addressLine1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressLine2" }),
        __metadata("design:type", String)
    ], PostalAddress6Ch.prototype, "addressLine2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildingNumber" }),
        __metadata("design:type", String)
    ], PostalAddress6Ch.prototype, "buildingNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], PostalAddress6Ch.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postCode" }),
        __metadata("design:type", String)
    ], PostalAddress6Ch.prototype, "postCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=streetName" }),
        __metadata("design:type", String)
    ], PostalAddress6Ch.prototype, "streetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=townName" }),
        __metadata("design:type", String)
    ], PostalAddress6Ch.prototype, "townName", void 0);
    return PostalAddress6Ch;
}(SpeakeasyBase));
export { PostalAddress6Ch };
