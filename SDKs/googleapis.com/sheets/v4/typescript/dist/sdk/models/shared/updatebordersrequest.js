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
import { Border } from "./border";
import { GridRange } from "./gridrange";
// UpdateBordersRequest
/**
 * Updates the borders of a range. If a field is not set in the request, that means the border remains as-is. For example, with two subsequent UpdateBordersRequest: 1. range: A1:A5 `{ top: RED, bottom: WHITE }` 2. range: A1:A5 `{ left: BLUE }` That would result in A1:A5 having a borders of `{ top: RED, bottom: WHITE, left: BLUE }`. If you want to clear a border, explicitly set the style to NONE.
**/
var UpdateBordersRequest = /** @class */ (function (_super) {
    __extends(UpdateBordersRequest, _super);
    function UpdateBordersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bottom" }),
        __metadata("design:type", Border)
    ], UpdateBordersRequest.prototype, "bottom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=innerHorizontal" }),
        __metadata("design:type", Border)
    ], UpdateBordersRequest.prototype, "innerHorizontal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=innerVertical" }),
        __metadata("design:type", Border)
    ], UpdateBordersRequest.prototype, "innerVertical", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=left" }),
        __metadata("design:type", Border)
    ], UpdateBordersRequest.prototype, "left", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=range" }),
        __metadata("design:type", GridRange)
    ], UpdateBordersRequest.prototype, "range", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=right" }),
        __metadata("design:type", Border)
    ], UpdateBordersRequest.prototype, "right", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=top" }),
        __metadata("design:type", Border)
    ], UpdateBordersRequest.prototype, "top", void 0);
    return UpdateBordersRequest;
}(SpeakeasyBase));
export { UpdateBordersRequest };
