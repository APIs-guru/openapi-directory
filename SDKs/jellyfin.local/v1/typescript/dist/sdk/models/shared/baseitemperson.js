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
// BaseItemPersonImageBlurHashes
/**
 * Gets or sets the primary image blurhash.
**/
var BaseItemPersonImageBlurHashes = /** @class */ (function (_super) {
    __extends(BaseItemPersonImageBlurHashes, _super);
    function BaseItemPersonImageBlurHashes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Art" }),
        __metadata("design:type", Map)
    ], BaseItemPersonImageBlurHashes.prototype, "art", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Backdrop" }),
        __metadata("design:type", Map)
    ], BaseItemPersonImageBlurHashes.prototype, "backdrop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Banner" }),
        __metadata("design:type", Map)
    ], BaseItemPersonImageBlurHashes.prototype, "banner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Box" }),
        __metadata("design:type", Map)
    ], BaseItemPersonImageBlurHashes.prototype, "box", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BoxRear" }),
        __metadata("design:type", Map)
    ], BaseItemPersonImageBlurHashes.prototype, "boxRear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Chapter" }),
        __metadata("design:type", Map)
    ], BaseItemPersonImageBlurHashes.prototype, "chapter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Disc" }),
        __metadata("design:type", Map)
    ], BaseItemPersonImageBlurHashes.prototype, "disc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Logo" }),
        __metadata("design:type", Map)
    ], BaseItemPersonImageBlurHashes.prototype, "logo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Menu" }),
        __metadata("design:type", Map)
    ], BaseItemPersonImageBlurHashes.prototype, "menu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Primary" }),
        __metadata("design:type", Map)
    ], BaseItemPersonImageBlurHashes.prototype, "primary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Profile" }),
        __metadata("design:type", Map)
    ], BaseItemPersonImageBlurHashes.prototype, "profile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Screenshot" }),
        __metadata("design:type", Map)
    ], BaseItemPersonImageBlurHashes.prototype, "screenshot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Thumb" }),
        __metadata("design:type", Map)
    ], BaseItemPersonImageBlurHashes.prototype, "thumb", void 0);
    return BaseItemPersonImageBlurHashes;
}(SpeakeasyBase));
export { BaseItemPersonImageBlurHashes };
// BaseItemPerson
/**
 * This is used by the api to get information about a Person within a BaseItem.
**/
var BaseItemPerson = /** @class */ (function (_super) {
    __extends(BaseItemPerson, _super);
    function BaseItemPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], BaseItemPerson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageBlurHashes" }),
        __metadata("design:type", BaseItemPersonImageBlurHashes)
    ], BaseItemPerson.prototype, "imageBlurHashes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], BaseItemPerson.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrimaryImageTag" }),
        __metadata("design:type", String)
    ], BaseItemPerson.prototype, "primaryImageTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Role" }),
        __metadata("design:type", String)
    ], BaseItemPerson.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], BaseItemPerson.prototype, "type", void 0);
    return BaseItemPerson;
}(SpeakeasyBase));
export { BaseItemPerson };
