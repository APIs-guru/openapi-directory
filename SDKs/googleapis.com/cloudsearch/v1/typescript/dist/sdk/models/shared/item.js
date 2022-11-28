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
import { ItemAcl } from "./itemacl";
import { ItemContent } from "./itemcontent";
import { ItemMetadata } from "./itemmetadata";
import { ItemStatus } from "./itemstatus";
import { ItemStructuredData } from "./itemstructureddata";
export var ItemItemTypeEnum;
(function (ItemItemTypeEnum) {
    ItemItemTypeEnum["Unspecified"] = "UNSPECIFIED";
    ItemItemTypeEnum["ContentItem"] = "CONTENT_ITEM";
    ItemItemTypeEnum["ContainerItem"] = "CONTAINER_ITEM";
    ItemItemTypeEnum["VirtualContainerItem"] = "VIRTUAL_CONTAINER_ITEM";
})(ItemItemTypeEnum || (ItemItemTypeEnum = {}));
// Item
/**
 * Represents a single object that is an item in the search index, such as a file, folder, or a database record.
**/
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acl" }),
        __metadata("design:type", ItemAcl)
    ], Item.prototype, "acl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", ItemContent)
    ], Item.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemType" }),
        __metadata("design:type", String)
    ], Item.prototype, "itemType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", ItemMetadata)
    ], Item.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Item.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payload" }),
        __metadata("design:type", String)
    ], Item.prototype, "payload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queue" }),
        __metadata("design:type", String)
    ], Item.prototype, "queue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", ItemStatus)
    ], Item.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=structuredData" }),
        __metadata("design:type", ItemStructuredData)
    ], Item.prototype, "structuredData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], Item.prototype, "version", void 0);
    return Item;
}(SpeakeasyBase));
export { Item };
