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
// UserItemDataDto
/**
 * Class UserItemDataDto.
**/
var UserItemDataDto = /** @class */ (function (_super) {
    __extends(UserItemDataDto, _super);
    function UserItemDataDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsFavorite" }),
        __metadata("design:type", Boolean)
    ], UserItemDataDto.prototype, "isFavorite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ItemId" }),
        __metadata("design:type", String)
    ], UserItemDataDto.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Key" }),
        __metadata("design:type", String)
    ], UserItemDataDto.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastPlayedDate" }),
        __metadata("design:type", Date)
    ], UserItemDataDto.prototype, "lastPlayedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Likes" }),
        __metadata("design:type", Boolean)
    ], UserItemDataDto.prototype, "likes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlayCount" }),
        __metadata("design:type", Number)
    ], UserItemDataDto.prototype, "playCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlaybackPositionTicks" }),
        __metadata("design:type", Number)
    ], UserItemDataDto.prototype, "playbackPositionTicks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Played" }),
        __metadata("design:type", Boolean)
    ], UserItemDataDto.prototype, "played", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlayedPercentage" }),
        __metadata("design:type", Number)
    ], UserItemDataDto.prototype, "playedPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Rating" }),
        __metadata("design:type", Number)
    ], UserItemDataDto.prototype, "rating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UnplayedItemCount" }),
        __metadata("design:type", Number)
    ], UserItemDataDto.prototype, "unplayedItemCount", void 0);
    return UserItemDataDto;
}(SpeakeasyBase));
export { UserItemDataDto };
