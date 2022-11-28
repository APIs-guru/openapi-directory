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
var PortfolioModel = /** @class */ (function (_super) {
    __extends(PortfolioModel, _super);
    function PortfolioModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abc12" }),
        __metadata("design:type", String)
    ], PortfolioModel.prototype, "abc12", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abc12Value" }),
        __metadata("design:type", Number)
    ], PortfolioModel.prototype, "abc12Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abc6" }),
        __metadata("design:type", String)
    ], PortfolioModel.prototype, "abc6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abc6Value" }),
        __metadata("design:type", Number)
    ], PortfolioModel.prototype, "abc6Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abc9" }),
        __metadata("design:type", String)
    ], PortfolioModel.prototype, "abc9", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abc9Value" }),
        __metadata("design:type", Number)
    ], PortfolioModel.prototype, "abc9Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PortfolioModel.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thresholdA" }),
        __metadata("design:type", Number)
    ], PortfolioModel.prototype, "thresholdA", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thresholdB" }),
        __metadata("design:type", Number)
    ], PortfolioModel.prototype, "thresholdB", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thresholdC" }),
        __metadata("design:type", Number)
    ], PortfolioModel.prototype, "thresholdC", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thresholdX" }),
        __metadata("design:type", Number)
    ], PortfolioModel.prototype, "thresholdX", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thresholdY" }),
        __metadata("design:type", Number)
    ], PortfolioModel.prototype, "thresholdY", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thresholdZ" }),
        __metadata("design:type", Number)
    ], PortfolioModel.prototype, "thresholdZ", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=xyz12" }),
        __metadata("design:type", String)
    ], PortfolioModel.prototype, "xyz12", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=xyz12Value" }),
        __metadata("design:type", Number)
    ], PortfolioModel.prototype, "xyz12Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=xyz6" }),
        __metadata("design:type", String)
    ], PortfolioModel.prototype, "xyz6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=xyz6Value" }),
        __metadata("design:type", Number)
    ], PortfolioModel.prototype, "xyz6Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=xyz9" }),
        __metadata("design:type", String)
    ], PortfolioModel.prototype, "xyz9", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=xyz9Value" }),
        __metadata("design:type", Number)
    ], PortfolioModel.prototype, "xyz9Value", void 0);
    return PortfolioModel;
}(SpeakeasyBase));
export { PortfolioModel };
