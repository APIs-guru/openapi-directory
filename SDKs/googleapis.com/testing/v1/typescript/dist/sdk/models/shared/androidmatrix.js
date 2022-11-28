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
// AndroidMatrix
/**
 * A set of Android device configuration permutations is defined by the the cross-product of the given axes. Internally, the given AndroidMatrix will be expanded into a set of AndroidDevices. Only supported permutations will be instantiated. Invalid permutations (e.g., incompatible models/versions) are ignored.
**/
var AndroidMatrix = /** @class */ (function (_super) {
    __extends(AndroidMatrix, _super);
    function AndroidMatrix() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=androidModelIds" }),
        __metadata("design:type", Array)
    ], AndroidMatrix.prototype, "androidModelIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=androidVersionIds" }),
        __metadata("design:type", Array)
    ], AndroidMatrix.prototype, "androidVersionIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locales" }),
        __metadata("design:type", Array)
    ], AndroidMatrix.prototype, "locales", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orientations" }),
        __metadata("design:type", Array)
    ], AndroidMatrix.prototype, "orientations", void 0);
    return AndroidMatrix;
}(SpeakeasyBase));
export { AndroidMatrix };
