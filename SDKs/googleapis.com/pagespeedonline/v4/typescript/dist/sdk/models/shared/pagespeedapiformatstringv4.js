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
var PagespeedApiFormatStringV4ArgsRects = /** @class */ (function (_super) {
    __extends(PagespeedApiFormatStringV4ArgsRects, _super);
    function PagespeedApiFormatStringV4ArgsRects() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiFormatStringV4ArgsRects.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiFormatStringV4ArgsRects.prototype, "left", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiFormatStringV4ArgsRects.prototype, "top", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiFormatStringV4ArgsRects.prototype, "width", void 0);
    return PagespeedApiFormatStringV4ArgsRects;
}(SpeakeasyBase));
export { PagespeedApiFormatStringV4ArgsRects };
var PagespeedApiFormatStringV4ArgsSecondaryRects = /** @class */ (function (_super) {
    __extends(PagespeedApiFormatStringV4ArgsSecondaryRects, _super);
    function PagespeedApiFormatStringV4ArgsSecondaryRects() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiFormatStringV4ArgsSecondaryRects.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiFormatStringV4ArgsSecondaryRects.prototype, "left", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiFormatStringV4ArgsSecondaryRects.prototype, "top", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiFormatStringV4ArgsSecondaryRects.prototype, "width", void 0);
    return PagespeedApiFormatStringV4ArgsSecondaryRects;
}(SpeakeasyBase));
export { PagespeedApiFormatStringV4ArgsSecondaryRects };
var PagespeedApiFormatStringV4Args = /** @class */ (function (_super) {
    __extends(PagespeedApiFormatStringV4Args, _super);
    function PagespeedApiFormatStringV4Args() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedApiFormatStringV4Args.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: PagespeedApiFormatStringV4ArgsRects }),
        __metadata("design:type", Array)
    ], PagespeedApiFormatStringV4Args.prototype, "rects", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: PagespeedApiFormatStringV4ArgsSecondaryRects }),
        __metadata("design:type", Array)
    ], PagespeedApiFormatStringV4Args.prototype, "secondaryRects", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedApiFormatStringV4Args.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedApiFormatStringV4Args.prototype, "value", void 0);
    return PagespeedApiFormatStringV4Args;
}(SpeakeasyBase));
export { PagespeedApiFormatStringV4Args };
var PagespeedApiFormatStringV4 = /** @class */ (function (_super) {
    __extends(PagespeedApiFormatStringV4, _super);
    function PagespeedApiFormatStringV4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: PagespeedApiFormatStringV4Args }),
        __metadata("design:type", Array)
    ], PagespeedApiFormatStringV4.prototype, "args", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedApiFormatStringV4.prototype, "format", void 0);
    return PagespeedApiFormatStringV4;
}(SpeakeasyBase));
export { PagespeedApiFormatStringV4 };
