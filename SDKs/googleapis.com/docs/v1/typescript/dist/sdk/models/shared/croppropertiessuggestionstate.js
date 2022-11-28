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
// CropPropertiesSuggestionState
/**
 * A mask that indicates which of the fields on the base CropProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
var CropPropertiesSuggestionState = /** @class */ (function (_super) {
    __extends(CropPropertiesSuggestionState, _super);
    function CropPropertiesSuggestionState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=angleSuggested" }),
        __metadata("design:type", Boolean)
    ], CropPropertiesSuggestionState.prototype, "angleSuggested", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offsetBottomSuggested" }),
        __metadata("design:type", Boolean)
    ], CropPropertiesSuggestionState.prototype, "offsetBottomSuggested", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offsetLeftSuggested" }),
        __metadata("design:type", Boolean)
    ], CropPropertiesSuggestionState.prototype, "offsetLeftSuggested", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offsetRightSuggested" }),
        __metadata("design:type", Boolean)
    ], CropPropertiesSuggestionState.prototype, "offsetRightSuggested", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offsetTopSuggested" }),
        __metadata("design:type", Boolean)
    ], CropPropertiesSuggestionState.prototype, "offsetTopSuggested", void 0);
    return CropPropertiesSuggestionState;
}(SpeakeasyBase));
export { CropPropertiesSuggestionState };
