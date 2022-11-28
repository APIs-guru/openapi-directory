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
import { ActionResponse } from "./actionresponse";
import { AttachmentInput } from "./attachment";
import { Card } from "./card";
import { CardWithId } from "./cardwithid";
import { UserInput } from "./user";
import { SlashCommand } from "./slashcommand";
import { SpaceInput } from "./space";
import { Thread } from "./thread";
import { Annotation } from "./annotation";
import { Attachment } from "./attachment";
import { MatchedUrl } from "./matchedurl";
import { User } from "./user";
import { Space } from "./space";
// MessageInput
/**
 * A message in Google Chat.
**/
var MessageInput = /** @class */ (function (_super) {
    __extends(MessageInput, _super);
    function MessageInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actionResponse" }),
        __metadata("design:type", ActionResponse)
    ], MessageInput.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=argumentText" }),
        __metadata("design:type", String)
    ], MessageInput.prototype, "argumentText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attachment", elemType: AttachmentInput }),
        __metadata("design:type", Array)
    ], MessageInput.prototype, "attachment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cards", elemType: Card }),
        __metadata("design:type", Array)
    ], MessageInput.prototype, "cards", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cardsV2", elemType: CardWithId }),
        __metadata("design:type", Array)
    ], MessageInput.prototype, "cardsV2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientAssignedMessageId" }),
        __metadata("design:type", String)
    ], MessageInput.prototype, "clientAssignedMessageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fallbackText" }),
        __metadata("design:type", String)
    ], MessageInput.prototype, "fallbackText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MessageInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sender" }),
        __metadata("design:type", UserInput)
    ], MessageInput.prototype, "sender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slashCommand" }),
        __metadata("design:type", SlashCommand)
    ], MessageInput.prototype, "slashCommand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=space" }),
        __metadata("design:type", SpaceInput)
    ], MessageInput.prototype, "space", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], MessageInput.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thread" }),
        __metadata("design:type", Thread)
    ], MessageInput.prototype, "thread", void 0);
    return MessageInput;
}(SpeakeasyBase));
export { MessageInput };
// Message
/**
 * A message in Google Chat.
**/
var Message = /** @class */ (function (_super) {
    __extends(Message, _super);
    function Message() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actionResponse" }),
        __metadata("design:type", ActionResponse)
    ], Message.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations", elemType: Annotation }),
        __metadata("design:type", Array)
    ], Message.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=argumentText" }),
        __metadata("design:type", String)
    ], Message.prototype, "argumentText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attachment", elemType: Attachment }),
        __metadata("design:type", Array)
    ], Message.prototype, "attachment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cards", elemType: Card }),
        __metadata("design:type", Array)
    ], Message.prototype, "cards", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cardsV2", elemType: CardWithId }),
        __metadata("design:type", Array)
    ], Message.prototype, "cardsV2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientAssignedMessageId" }),
        __metadata("design:type", String)
    ], Message.prototype, "clientAssignedMessageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Message.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fallbackText" }),
        __metadata("design:type", String)
    ], Message.prototype, "fallbackText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdateTime" }),
        __metadata("design:type", String)
    ], Message.prototype, "lastUpdateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matchedUrl" }),
        __metadata("design:type", MatchedUrl)
    ], Message.prototype, "matchedUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Message.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sender" }),
        __metadata("design:type", User)
    ], Message.prototype, "sender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slashCommand" }),
        __metadata("design:type", SlashCommand)
    ], Message.prototype, "slashCommand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=space" }),
        __metadata("design:type", Space)
    ], Message.prototype, "space", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], Message.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thread" }),
        __metadata("design:type", Thread)
    ], Message.prototype, "thread", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=threadReply" }),
        __metadata("design:type", Boolean)
    ], Message.prototype, "threadReply", void 0);
    return Message;
}(SpeakeasyBase));
export { Message };
