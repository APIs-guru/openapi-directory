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
var Summary = /** @class */ (function (_super) {
    __extends(Summary, _super);
    function Summary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ask" }),
        __metadata("design:type", Number)
    ], Summary.prototype, "ask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baseCurrency" }),
        __metadata("design:type", String)
    ], Summary.prototype, "baseCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bid" }),
        __metadata("design:type", Number)
    ], Summary.prototype, "bid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fiftyTwoWeekHigh" }),
        __metadata("design:type", Number)
    ], Summary.prototype, "fiftyTwoWeekHigh", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fiftyTwoWeekLow" }),
        __metadata("design:type", Number)
    ], Summary.prototype, "fiftyTwoWeekLow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fiftyTwoWeekPercentChange" }),
        __metadata("design:type", Number)
    ], Summary.prototype, "fiftyTwoWeekPercentChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fourWeekPercentChange" }),
        __metadata("design:type", Number)
    ], Summary.prototype, "fourWeekPercentChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=high" }),
        __metadata("design:type", Number)
    ], Summary.prototype, "high", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last" }),
        __metadata("design:type", Number)
    ], Summary.prototype, "last", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=low" }),
        __metadata("design:type", Number)
    ], Summary.prototype, "low", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oneDayChange" }),
        __metadata("design:type", Number)
    ], Summary.prototype, "oneDayChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oneDayPercentChange" }),
        __metadata("design:type", Number)
    ], Summary.prototype, "oneDayPercentChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oneDayValue" }),
        __metadata("design:type", Number)
    ], Summary.prototype, "oneDayValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=open" }),
        __metadata("design:type", Number)
    ], Summary.prototype, "open", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=symbol" }),
        __metadata("design:type", String)
    ], Summary.prototype, "symbol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeStamp" }),
        __metadata("design:type", Date)
    ], Summary.prototype, "timeStamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=twelveWeekPercentChange" }),
        __metadata("design:type", Number)
    ], Summary.prototype, "twelveWeekPercentChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yearToDatePercentChange" }),
        __metadata("design:type", Number)
    ], Summary.prototype, "yearToDatePercentChange", void 0);
    return Summary;
}(SpeakeasyBase));
export { Summary };
