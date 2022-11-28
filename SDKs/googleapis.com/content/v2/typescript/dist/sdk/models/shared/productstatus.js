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
import { ProductStatusDataQualityIssue } from "./productstatusdataqualityissue";
import { ProductStatusDestinationStatus } from "./productstatusdestinationstatus";
import { ProductStatusItemLevelIssue } from "./productstatusitemlevelissue";
import { Product } from "./product";
// ProductStatus
/**
 * The status of a product, i.e., information about a product computed asynchronously.
**/
var ProductStatus = /** @class */ (function (_super) {
    __extends(ProductStatus, _super);
    function ProductStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationDate" }),
        __metadata("design:type", String)
    ], ProductStatus.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataQualityIssues", elemType: ProductStatusDataQualityIssue }),
        __metadata("design:type", Array)
    ], ProductStatus.prototype, "dataQualityIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationStatuses", elemType: ProductStatusDestinationStatus }),
        __metadata("design:type", Array)
    ], ProductStatus.prototype, "destinationStatuses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=googleExpirationDate" }),
        __metadata("design:type", String)
    ], ProductStatus.prototype, "googleExpirationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemLevelIssues", elemType: ProductStatusItemLevelIssue }),
        __metadata("design:type", Array)
    ], ProductStatus.prototype, "itemLevelIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], ProductStatus.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdateDate" }),
        __metadata("design:type", String)
    ], ProductStatus.prototype, "lastUpdateDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], ProductStatus.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=product" }),
        __metadata("design:type", Product)
    ], ProductStatus.prototype, "product", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productId" }),
        __metadata("design:type", String)
    ], ProductStatus.prototype, "productId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ProductStatus.prototype, "title", void 0);
    return ProductStatus;
}(SpeakeasyBase));
export { ProductStatus };
