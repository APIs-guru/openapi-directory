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
// ReplaceNamedRangeContentRequest
/**
 * Replaces the contents of the specified NamedRange or NamedRanges with the given replacement content. Note that an individual NamedRange may consist of multiple discontinuous ranges. In this case, only the content in the first range will be replaced. The other ranges and their content will be deleted. In cases where replacing or deleting any ranges would result in an invalid document structure, a 400 bad request error is returned.
**/
var ReplaceNamedRangeContentRequest = /** @class */ (function (_super) {
    __extends(ReplaceNamedRangeContentRequest, _super);
    function ReplaceNamedRangeContentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=namedRangeId" }),
        __metadata("design:type", String)
    ], ReplaceNamedRangeContentRequest.prototype, "namedRangeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=namedRangeName" }),
        __metadata("design:type", String)
    ], ReplaceNamedRangeContentRequest.prototype, "namedRangeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], ReplaceNamedRangeContentRequest.prototype, "text", void 0);
    return ReplaceNamedRangeContentRequest;
}(SpeakeasyBase));
export { ReplaceNamedRangeContentRequest };
