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
import { BillAgent } from "./billagent";
import { HouseEnum } from "./houseenum";
import { StageSummary } from "./stagesummary";
import { Promoter } from "./promoter";
import { Sponsor } from "./sponsor";
var Bill = /** @class */ (function (_super) {
    __extends(Bill, _super);
    function Bill() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=agent" }),
        __metadata("design:type", BillAgent)
    ], Bill.prototype, "agent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billId" }),
        __metadata("design:type", Number)
    ], Bill.prototype, "billId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billTypeId" }),
        __metadata("design:type", Number)
    ], Bill.prototype, "billTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billWithdrawn" }),
        __metadata("design:type", Date)
    ], Bill.prototype, "billWithdrawn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentHouse" }),
        __metadata("design:type", String)
    ], Bill.prototype, "currentHouse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentStage" }),
        __metadata("design:type", StageSummary)
    ], Bill.prototype, "currentStage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includedSessionIds" }),
        __metadata("design:type", Array)
    ], Bill.prototype, "includedSessionIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=introducedSessionId" }),
        __metadata("design:type", Number)
    ], Bill.prototype, "introducedSessionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isAct" }),
        __metadata("design:type", Boolean)
    ], Bill.prototype, "isAct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDefeated" }),
        __metadata("design:type", Boolean)
    ], Bill.prototype, "isDefeated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdate" }),
        __metadata("design:type", Date)
    ], Bill.prototype, "lastUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longTitle" }),
        __metadata("design:type", String)
    ], Bill.prototype, "longTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originatingHouse" }),
        __metadata("design:type", String)
    ], Bill.prototype, "originatingHouse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=petitionInformation" }),
        __metadata("design:type", String)
    ], Bill.prototype, "petitionInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=petitioningPeriod" }),
        __metadata("design:type", String)
    ], Bill.prototype, "petitioningPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promoters", elemType: Promoter }),
        __metadata("design:type", Array)
    ], Bill.prototype, "promoters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shortTitle" }),
        __metadata("design:type", String)
    ], Bill.prototype, "shortTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sponsors", elemType: Sponsor }),
        __metadata("design:type", Array)
    ], Bill.prototype, "sponsors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=summary" }),
        __metadata("design:type", String)
    ], Bill.prototype, "summary", void 0);
    return Bill;
}(SpeakeasyBase));
export { Bill };
