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
// PagespeedApiImageV2PageRect
/**
 * The region of the page that is captured by this image, with dimensions measured in CSS pixels.
**/
var PagespeedApiImageV2PageRect = /** @class */ (function (_super) {
    __extends(PagespeedApiImageV2PageRect, _super);
    function PagespeedApiImageV2PageRect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiImageV2PageRect.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiImageV2PageRect.prototype, "left", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiImageV2PageRect.prototype, "top", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiImageV2PageRect.prototype, "width", void 0);
    return PagespeedApiImageV2PageRect;
}(SpeakeasyBase));
export { PagespeedApiImageV2PageRect };
var PagespeedApiImageV2 = /** @class */ (function (_super) {
    __extends(PagespeedApiImageV2, _super);
    function PagespeedApiImageV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedApiImageV2.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiImageV2.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedApiImageV2.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedApiImageV2.prototype, "mimeType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PagespeedApiImageV2PageRect)
    ], PagespeedApiImageV2.prototype, "pageRect", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiImageV2.prototype, "width", void 0);
    return PagespeedApiImageV2;
}(SpeakeasyBase));
export { PagespeedApiImageV2 };
