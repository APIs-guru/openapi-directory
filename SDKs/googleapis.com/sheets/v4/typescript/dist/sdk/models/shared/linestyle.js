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
export var LineStyleTypeEnum;
(function (LineStyleTypeEnum) {
    LineStyleTypeEnum["LineDashTypeUnspecified"] = "LINE_DASH_TYPE_UNSPECIFIED";
    LineStyleTypeEnum["Invisible"] = "INVISIBLE";
    LineStyleTypeEnum["Custom"] = "CUSTOM";
    LineStyleTypeEnum["Solid"] = "SOLID";
    LineStyleTypeEnum["Dotted"] = "DOTTED";
    LineStyleTypeEnum["MediumDashed"] = "MEDIUM_DASHED";
    LineStyleTypeEnum["MediumDashedDotted"] = "MEDIUM_DASHED_DOTTED";
    LineStyleTypeEnum["LongDashed"] = "LONG_DASHED";
    LineStyleTypeEnum["LongDashedDotted"] = "LONG_DASHED_DOTTED";
})(LineStyleTypeEnum || (LineStyleTypeEnum = {}));
// LineStyle
/**
 * Properties that describe the style of a line.
**/
var LineStyle = /** @class */ (function (_super) {
    __extends(LineStyle, _super);
    function LineStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], LineStyle.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], LineStyle.prototype, "width", void 0);
    return LineStyle;
}(SpeakeasyBase));
export { LineStyle };
