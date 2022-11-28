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
import { BadgeExpiry } from "./badgeexpiry";
var OfferingBadge = /** @class */ (function (_super) {
    __extends(OfferingBadge, _super);
    function OfferingBadge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=badgeExpiry" }),
        __metadata("design:type", BadgeExpiry)
    ], OfferingBadge.prototype, "badgeExpiry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], OfferingBadge.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requiresApproval" }),
        __metadata("design:type", Boolean)
    ], OfferingBadge.prototype, "requiresApproval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], OfferingBadge.prototype, "title", void 0);
    return OfferingBadge;
}(SpeakeasyBase));
export { OfferingBadge };
var OfferingMetadata1 = /** @class */ (function (_super) {
    __extends(OfferingMetadata1, _super);
    function OfferingMetadata1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], OfferingMetadata1.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=level" }),
        __metadata("design:type", String)
    ], OfferingMetadata1.prototype, "level", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], OfferingMetadata1.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], OfferingMetadata1.prototype, "topic", void 0);
    return OfferingMetadata1;
}(SpeakeasyBase));
export { OfferingMetadata1 };
var Offering = /** @class */ (function (_super) {
    __extends(Offering, _super);
    function Offering() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=badge" }),
        __metadata("design:type", OfferingBadge)
    ], Offering.prototype, "badge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentId" }),
        __metadata("design:type", String)
    ], Offering.prototype, "contentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Offering.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=earlyCloseOffDate" }),
        __metadata("design:type", Date)
    ], Offering.prototype, "earlyCloseOffDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", Date)
    ], Offering.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasEarlyCloseOff" }),
        __metadata("design:type", Boolean)
    ], Offering.prototype, "hasEarlyCloseOff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identifier" }),
        __metadata("design:type", String)
    ], Offering.prototype, "identifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isReadonly" }),
        __metadata("design:type", Boolean)
    ], Offering.prototype, "isReadonly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", OfferingMetadata1)
    ], Offering.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Offering.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overview" }),
        __metadata("design:type", String)
    ], Offering.prototype, "overview", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rootContentId" }),
        __metadata("design:type", String)
    ], Offering.prototype, "rootContentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", Date)
    ], Offering.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trailerVideoUrl" }),
        __metadata("design:type", String)
    ], Offering.prototype, "trailerVideoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useRelativeDates" }),
        __metadata("design:type", Boolean)
    ], Offering.prototype, "useRelativeDates", void 0);
    return Offering;
}(SpeakeasyBase));
export { Offering };
