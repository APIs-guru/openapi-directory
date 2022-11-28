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
var OffersItemsItems = /** @class */ (function (_super) {
    __extends(OffersItemsItems, _super);
    function OffersItemsItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author" }),
        __metadata("design:type", String)
    ], OffersItemsItems.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canonicalVolumeLink" }),
        __metadata("design:type", String)
    ], OffersItemsItems.prototype, "canonicalVolumeLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coverUrl" }),
        __metadata("design:type", String)
    ], OffersItemsItems.prototype, "coverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], OffersItemsItems.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], OffersItemsItems.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumeId" }),
        __metadata("design:type", String)
    ], OffersItemsItems.prototype, "volumeId", void 0);
    return OffersItemsItems;
}(SpeakeasyBase));
export { OffersItemsItems };
var OffersItems = /** @class */ (function (_super) {
    __extends(OffersItems, _super);
    function OffersItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artUrl" }),
        __metadata("design:type", String)
    ], OffersItems.prototype, "artUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gservicesKey" }),
        __metadata("design:type", String)
    ], OffersItems.prototype, "gservicesKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], OffersItems.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: OffersItemsItems }),
        __metadata("design:type", Array)
    ], OffersItems.prototype, "items", void 0);
    return OffersItems;
}(SpeakeasyBase));
export { OffersItems };
var Offers = /** @class */ (function (_super) {
    __extends(Offers, _super);
    function Offers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: OffersItems }),
        __metadata("design:type", Array)
    ], Offers.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Offers.prototype, "kind", void 0);
    return Offers;
}(SpeakeasyBase));
export { Offers };
