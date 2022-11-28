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
import { CollectionFeaturedProduct } from "./collectionfeaturedproduct";
// Collection
/**
 * The collection message.
**/
var Collection = /** @class */ (function (_super) {
    __extends(Collection, _super);
    function Collection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customLabel0" }),
        __metadata("design:type", String)
    ], Collection.prototype, "customLabel0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customLabel1" }),
        __metadata("design:type", String)
    ], Collection.prototype, "customLabel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customLabel2" }),
        __metadata("design:type", String)
    ], Collection.prototype, "customLabel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customLabel3" }),
        __metadata("design:type", String)
    ], Collection.prototype, "customLabel3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customLabel4" }),
        __metadata("design:type", String)
    ], Collection.prototype, "customLabel4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=featuredProduct", elemType: CollectionFeaturedProduct }),
        __metadata("design:type", Array)
    ], Collection.prototype, "featuredProduct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headline" }),
        __metadata("design:type", Array)
    ], Collection.prototype, "headline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Collection.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageLink" }),
        __metadata("design:type", Array)
    ], Collection.prototype, "imageLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], Collection.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], Collection.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobileLink" }),
        __metadata("design:type", String)
    ], Collection.prototype, "mobileLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productCountry" }),
        __metadata("design:type", String)
    ], Collection.prototype, "productCountry", void 0);
    return Collection;
}(SpeakeasyBase));
export { Collection };
