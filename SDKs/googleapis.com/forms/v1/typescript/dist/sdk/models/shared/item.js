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
import { ImageItem } from "./imageitem";
import { QuestionGroupItem } from "./questiongroupitem";
import { QuestionItem } from "./questionitem";
import { VideoItem } from "./videoitem";
import { ImageItemInput } from "./imageitem";
import { QuestionGroupItemInput } from "./questiongroupitem";
import { QuestionItemInput } from "./questionitem";
// Item
/**
 * A single item of the form. `kind` defines which kind of item it is.
**/
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Item.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageItem" }),
        __metadata("design:type", ImageItem)
    ], Item.prototype, "imageItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemId" }),
        __metadata("design:type", String)
    ], Item.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageBreakItem" }),
        __metadata("design:type", Map)
    ], Item.prototype, "pageBreakItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=questionGroupItem" }),
        __metadata("design:type", QuestionGroupItem)
    ], Item.prototype, "questionGroupItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=questionItem" }),
        __metadata("design:type", QuestionItem)
    ], Item.prototype, "questionItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textItem" }),
        __metadata("design:type", Map)
    ], Item.prototype, "textItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Item.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoItem" }),
        __metadata("design:type", VideoItem)
    ], Item.prototype, "videoItem", void 0);
    return Item;
}(SpeakeasyBase));
export { Item };
// ItemInput
/**
 * A single item of the form. `kind` defines which kind of item it is.
**/
var ItemInput = /** @class */ (function (_super) {
    __extends(ItemInput, _super);
    function ItemInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ItemInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageItem" }),
        __metadata("design:type", ImageItemInput)
    ], ItemInput.prototype, "imageItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemId" }),
        __metadata("design:type", String)
    ], ItemInput.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageBreakItem" }),
        __metadata("design:type", Map)
    ], ItemInput.prototype, "pageBreakItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=questionGroupItem" }),
        __metadata("design:type", QuestionGroupItemInput)
    ], ItemInput.prototype, "questionGroupItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=questionItem" }),
        __metadata("design:type", QuestionItemInput)
    ], ItemInput.prototype, "questionItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textItem" }),
        __metadata("design:type", Map)
    ], ItemInput.prototype, "textItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ItemInput.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoItem" }),
        __metadata("design:type", VideoItem)
    ], ItemInput.prototype, "videoItem", void 0);
    return ItemInput;
}(SpeakeasyBase));
export { ItemInput };
