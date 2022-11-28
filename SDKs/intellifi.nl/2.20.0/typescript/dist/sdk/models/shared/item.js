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
import { ItemProtocolEnum } from "./itemprotocolenum";
import { TechnologyEnum } from "./technologyenum";
import { ItemTypeEnum } from "./itemtypeenum";
import { GeoCoordsReadOnly } from "./geocoordsreadonly";
var ItemInput = /** @class */ (function (_super) {
    __extends(ItemInput, _super);
    function ItemInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code_hex" }),
        __metadata("design:type", String)
    ], ItemInput.prototype, "codeHex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config_request" }),
        __metadata("design:type", Map)
    ], ItemInput.prototype, "configRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom" }),
        __metadata("design:type", Object)
    ], ItemInput.prototype, "custom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], ItemInput.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location_request" }),
        __metadata("design:type", String)
    ], ItemInput.prototype, "locationRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], ItemInput.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], ItemInput.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=technology" }),
        __metadata("design:type", String)
    ], ItemInput.prototype, "technology", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ItemInput.prototype, "type", void 0);
    return ItemInput;
}(SpeakeasyBase));
export { ItemInput };
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code_hex" }),
        __metadata("design:type", String)
    ], Item.prototype, "codeHex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config_request" }),
        __metadata("design:type", Map)
    ], Item.prototype, "configRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom" }),
        __metadata("design:type", Object)
    ], Item.prototype, "custom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=geo_coords" }),
        __metadata("design:type", GeoCoordsReadOnly)
    ], Item.prototype, "geoCoords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Item.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_present" }),
        __metadata("design:type", Boolean)
    ], Item.prototype, "isPresent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], Item.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location_request" }),
        __metadata("design:type", String)
    ], Item.prototype, "locationRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], Item.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=move_count" }),
        __metadata("design:type", Number)
    ], Item.prototype, "moveCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], Item.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sets" }),
        __metadata("design:type", Array)
    ], Item.prototype, "sets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=technology" }),
        __metadata("design:type", String)
    ], Item.prototype, "technology", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_created" }),
        __metadata("design:type", String)
    ], Item.prototype, "timeCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_last_present" }),
        __metadata("design:type", String)
    ], Item.prototype, "timeLastPresent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_moved" }),
        __metadata("design:type", String)
    ], Item.prototype, "timeMoved", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_updated" }),
        __metadata("design:type", String)
    ], Item.prototype, "timeUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Item.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Item.prototype, "url", void 0);
    return Item;
}(SpeakeasyBase));
export { Item };
