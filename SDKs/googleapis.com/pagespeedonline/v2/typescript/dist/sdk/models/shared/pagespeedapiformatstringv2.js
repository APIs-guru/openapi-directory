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
var PagespeedApiFormatStringV2ArgsRects = /** @class */ (function (_super) {
    __extends(PagespeedApiFormatStringV2ArgsRects, _super);
    function PagespeedApiFormatStringV2ArgsRects() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiFormatStringV2ArgsRects.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiFormatStringV2ArgsRects.prototype, "left", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiFormatStringV2ArgsRects.prototype, "top", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiFormatStringV2ArgsRects.prototype, "width", void 0);
    return PagespeedApiFormatStringV2ArgsRects;
}(SpeakeasyBase));
export { PagespeedApiFormatStringV2ArgsRects };
var PagespeedApiFormatStringV2ArgsSecondaryRects = /** @class */ (function (_super) {
    __extends(PagespeedApiFormatStringV2ArgsSecondaryRects, _super);
    function PagespeedApiFormatStringV2ArgsSecondaryRects() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiFormatStringV2ArgsSecondaryRects.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiFormatStringV2ArgsSecondaryRects.prototype, "left", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiFormatStringV2ArgsSecondaryRects.prototype, "top", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiFormatStringV2ArgsSecondaryRects.prototype, "width", void 0);
    return PagespeedApiFormatStringV2ArgsSecondaryRects;
}(SpeakeasyBase));
export { PagespeedApiFormatStringV2ArgsSecondaryRects };
var PagespeedApiFormatStringV2Args = /** @class */ (function (_super) {
    __extends(PagespeedApiFormatStringV2Args, _super);
    function PagespeedApiFormatStringV2Args() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedApiFormatStringV2Args.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: PagespeedApiFormatStringV2ArgsRects }),
        __metadata("design:type", Array)
    ], PagespeedApiFormatStringV2Args.prototype, "rects", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: PagespeedApiFormatStringV2ArgsSecondaryRects }),
        __metadata("design:type", Array)
    ], PagespeedApiFormatStringV2Args.prototype, "secondaryRects", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedApiFormatStringV2Args.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedApiFormatStringV2Args.prototype, "value", void 0);
    return PagespeedApiFormatStringV2Args;
}(SpeakeasyBase));
export { PagespeedApiFormatStringV2Args };
var PagespeedApiFormatStringV2 = /** @class */ (function (_super) {
    __extends(PagespeedApiFormatStringV2, _super);
    function PagespeedApiFormatStringV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: PagespeedApiFormatStringV2Args }),
        __metadata("design:type", Array)
    ], PagespeedApiFormatStringV2.prototype, "args", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedApiFormatStringV2.prototype, "format", void 0);
    return PagespeedApiFormatStringV2;
}(SpeakeasyBase));
export { PagespeedApiFormatStringV2 };
