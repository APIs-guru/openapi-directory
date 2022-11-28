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
import { SuperStickerMetadata } from "./superstickermetadata";
import { ChannelProfileDetails } from "./channelprofiledetails";
var SuperChatEventSnippet = /** @class */ (function (_super) {
    __extends(SuperChatEventSnippet, _super);
    function SuperChatEventSnippet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amountMicros" }),
        __metadata("design:type", String)
    ], SuperChatEventSnippet.prototype, "amountMicros", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channelId" }),
        __metadata("design:type", String)
    ], SuperChatEventSnippet.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commentText" }),
        __metadata("design:type", String)
    ], SuperChatEventSnippet.prototype, "commentText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], SuperChatEventSnippet.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], SuperChatEventSnippet.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayString" }),
        __metadata("design:type", String)
    ], SuperChatEventSnippet.prototype, "displayString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSuperStickerEvent" }),
        __metadata("design:type", Boolean)
    ], SuperChatEventSnippet.prototype, "isSuperStickerEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messageType" }),
        __metadata("design:type", Number)
    ], SuperChatEventSnippet.prototype, "messageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=superStickerMetadata" }),
        __metadata("design:type", SuperStickerMetadata)
    ], SuperChatEventSnippet.prototype, "superStickerMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supporterDetails" }),
        __metadata("design:type", ChannelProfileDetails)
    ], SuperChatEventSnippet.prototype, "supporterDetails", void 0);
    return SuperChatEventSnippet;
}(SpeakeasyBase));
export { SuperChatEventSnippet };
