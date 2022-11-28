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
var OfferingRequiredBadge = /** @class */ (function (_super) {
    __extends(OfferingRequiredBadge, _super);
    function OfferingRequiredBadge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=badgeExpiry" }),
        __metadata("design:type", BadgeExpiry)
    ], OfferingRequiredBadge.prototype, "badgeExpiry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], OfferingRequiredBadge.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requiresApproval" }),
        __metadata("design:type", Boolean)
    ], OfferingRequiredBadge.prototype, "requiresApproval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], OfferingRequiredBadge.prototype, "title", void 0);
    return OfferingRequiredBadge;
}(SpeakeasyBase));
export { OfferingRequiredBadge };
var OfferingRequiredMetadata = /** @class */ (function (_super) {
    __extends(OfferingRequiredMetadata, _super);
    function OfferingRequiredMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], OfferingRequiredMetadata.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=level" }),
        __metadata("design:type", String)
    ], OfferingRequiredMetadata.prototype, "level", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], OfferingRequiredMetadata.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], OfferingRequiredMetadata.prototype, "topic", void 0);
    return OfferingRequiredMetadata;
}(SpeakeasyBase));
export { OfferingRequiredMetadata };
var OfferingRequired = /** @class */ (function (_super) {
    __extends(OfferingRequired, _super);
    function OfferingRequired() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=badge" }),
        __metadata("design:type", OfferingRequiredBadge)
    ], OfferingRequired.prototype, "badge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentId" }),
        __metadata("design:type", String)
    ], OfferingRequired.prototype, "contentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createDefaultChannels" }),
        __metadata("design:type", Boolean)
    ], OfferingRequired.prototype, "createDefaultChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], OfferingRequired.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=earlyCloseOffDate" }),
        __metadata("design:type", Date)
    ], OfferingRequired.prototype, "earlyCloseOffDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", Date)
    ], OfferingRequired.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasEarlyCloseOff" }),
        __metadata("design:type", Boolean)
    ], OfferingRequired.prototype, "hasEarlyCloseOff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identifier" }),
        __metadata("design:type", String)
    ], OfferingRequired.prototype, "identifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isReadonly" }),
        __metadata("design:type", Boolean)
    ], OfferingRequired.prototype, "isReadonly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", OfferingRequiredMetadata)
    ], OfferingRequired.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OfferingRequired.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rootContentId" }),
        __metadata("design:type", String)
    ], OfferingRequired.prototype, "rootContentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", Date)
    ], OfferingRequired.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trailerVideoUrl" }),
        __metadata("design:type", String)
    ], OfferingRequired.prototype, "trailerVideoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useRelativeDates" }),
        __metadata("design:type", Boolean)
    ], OfferingRequired.prototype, "useRelativeDates", void 0);
    return OfferingRequired;
}(SpeakeasyBase));
export { OfferingRequired };
