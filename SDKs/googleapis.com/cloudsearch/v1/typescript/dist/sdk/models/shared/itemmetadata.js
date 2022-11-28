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
import { ContextAttribute } from "./contextattribute";
import { Interaction } from "./interaction";
import { SearchQualityMetadata } from "./searchqualitymetadata";
// ItemMetadata
/**
 * Available metadata fields for the item.
**/
var ItemMetadata = /** @class */ (function (_super) {
    __extends(ItemMetadata, _super);
    function ItemMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerName" }),
        __metadata("design:type", String)
    ], ItemMetadata.prototype, "containerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentLanguage" }),
        __metadata("design:type", String)
    ], ItemMetadata.prototype, "contentLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contextAttributes", elemType: ContextAttribute }),
        __metadata("design:type", Array)
    ], ItemMetadata.prototype, "contextAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], ItemMetadata.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hash" }),
        __metadata("design:type", String)
    ], ItemMetadata.prototype, "hash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interactions", elemType: Interaction }),
        __metadata("design:type", Array)
    ], ItemMetadata.prototype, "interactions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keywords" }),
        __metadata("design:type", Array)
    ], ItemMetadata.prototype, "keywords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mimeType" }),
        __metadata("design:type", String)
    ], ItemMetadata.prototype, "mimeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectType" }),
        __metadata("design:type", String)
    ], ItemMetadata.prototype, "objectType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchQualityMetadata" }),
        __metadata("design:type", SearchQualityMetadata)
    ], ItemMetadata.prototype, "searchQualityMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceRepositoryUrl" }),
        __metadata("design:type", String)
    ], ItemMetadata.prototype, "sourceRepositoryUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ItemMetadata.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], ItemMetadata.prototype, "updateTime", void 0);
    return ItemMetadata;
}(SpeakeasyBase));
export { ItemMetadata };
