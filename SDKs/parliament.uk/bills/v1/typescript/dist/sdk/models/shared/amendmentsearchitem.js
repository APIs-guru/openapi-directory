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
import { AmendmentTypeEnum } from "./amendmenttypeenum";
import { AmendmentDecisionEnum } from "./amendmentdecisionenum";
import { AmendmentMember } from "./amendmentmember";
var AmendmentSearchItem = /** @class */ (function (_super) {
    __extends(AmendmentSearchItem, _super);
    function AmendmentSearchItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amendmentId" }),
        __metadata("design:type", Number)
    ], AmendmentSearchItem.prototype, "amendmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amendmentPosition" }),
        __metadata("design:type", String)
    ], AmendmentSearchItem.prototype, "amendmentPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amendmentType" }),
        __metadata("design:type", String)
    ], AmendmentSearchItem.prototype, "amendmentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billId" }),
        __metadata("design:type", Number)
    ], AmendmentSearchItem.prototype, "billId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billStageId" }),
        __metadata("design:type", Number)
    ], AmendmentSearchItem.prototype, "billStageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clause" }),
        __metadata("design:type", Number)
    ], AmendmentSearchItem.prototype, "clause", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decision" }),
        __metadata("design:type", String)
    ], AmendmentSearchItem.prototype, "decision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineNumber" }),
        __metadata("design:type", Number)
    ], AmendmentSearchItem.prototype, "lineNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marshalledListText" }),
        __metadata("design:type", String)
    ], AmendmentSearchItem.prototype, "marshalledListText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageNumber" }),
        __metadata("design:type", Number)
    ], AmendmentSearchItem.prototype, "pageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule" }),
        __metadata("design:type", Number)
    ], AmendmentSearchItem.prototype, "schedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sponsors", elemType: AmendmentMember }),
        __metadata("design:type", Array)
    ], AmendmentSearchItem.prototype, "sponsors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=summaryText" }),
        __metadata("design:type", Array)
    ], AmendmentSearchItem.prototype, "summaryText", void 0);
    return AmendmentSearchItem;
}(SpeakeasyBase));
export { AmendmentSearchItem };
