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
import { Editors } from "./editors";
import { GridRange } from "./gridrange";
// ProtectedRange
/**
 * A protected range.
**/
var ProtectedRange = /** @class */ (function (_super) {
    __extends(ProtectedRange, _super);
    function ProtectedRange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ProtectedRange.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=editors" }),
        __metadata("design:type", Editors)
    ], ProtectedRange.prototype, "editors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=namedRangeId" }),
        __metadata("design:type", String)
    ], ProtectedRange.prototype, "namedRangeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protectedRangeId" }),
        __metadata("design:type", Number)
    ], ProtectedRange.prototype, "protectedRangeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=range" }),
        __metadata("design:type", GridRange)
    ], ProtectedRange.prototype, "range", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestingUserCanEdit" }),
        __metadata("design:type", Boolean)
    ], ProtectedRange.prototype, "requestingUserCanEdit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unprotectedRanges", elemType: GridRange }),
        __metadata("design:type", Array)
    ], ProtectedRange.prototype, "unprotectedRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=warningOnly" }),
        __metadata("design:type", Boolean)
    ], ProtectedRange.prototype, "warningOnly", void 0);
    return ProtectedRange;
}(SpeakeasyBase));
export { ProtectedRange };
