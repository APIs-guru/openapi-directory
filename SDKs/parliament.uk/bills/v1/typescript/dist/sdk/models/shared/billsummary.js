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
import { HouseEnum } from "./houseenum";
import { StageSummary } from "./stagesummary";
var BillSummary = /** @class */ (function (_super) {
    __extends(BillSummary, _super);
    function BillSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billId" }),
        __metadata("design:type", Number)
    ], BillSummary.prototype, "billId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billTypeId" }),
        __metadata("design:type", Number)
    ], BillSummary.prototype, "billTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billWithdrawn" }),
        __metadata("design:type", Date)
    ], BillSummary.prototype, "billWithdrawn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentHouse" }),
        __metadata("design:type", String)
    ], BillSummary.prototype, "currentHouse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentStage" }),
        __metadata("design:type", StageSummary)
    ], BillSummary.prototype, "currentStage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includedSessionIds" }),
        __metadata("design:type", Array)
    ], BillSummary.prototype, "includedSessionIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=introducedSessionId" }),
        __metadata("design:type", Number)
    ], BillSummary.prototype, "introducedSessionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isAct" }),
        __metadata("design:type", Boolean)
    ], BillSummary.prototype, "isAct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDefeated" }),
        __metadata("design:type", Boolean)
    ], BillSummary.prototype, "isDefeated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdate" }),
        __metadata("design:type", Date)
    ], BillSummary.prototype, "lastUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originatingHouse" }),
        __metadata("design:type", String)
    ], BillSummary.prototype, "originatingHouse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shortTitle" }),
        __metadata("design:type", String)
    ], BillSummary.prototype, "shortTitle", void 0);
    return BillSummary;
}(SpeakeasyBase));
export { BillSummary };
