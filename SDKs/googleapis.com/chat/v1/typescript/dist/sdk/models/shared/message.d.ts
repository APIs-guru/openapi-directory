import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * A message in Google Chat.
**/
export declare class MessageInput extends SpeakeasyBase {
    actionResponse?: ActionResponse;
    argumentText?: string;
    attachment?: AttachmentInput[];
    cards?: Card[];
    cardsV2?: CardWithId[];
    clientAssignedMessageId?: string;
    fallbackText?: string;
    name?: string;
    sender?: UserInput;
    slashCommand?: SlashCommand;
    space?: SpaceInput;
    text?: string;
    thread?: Thread;
}
/**
 * A message in Google Chat.
**/
export declare class Message extends SpeakeasyBase {
    actionResponse?: ActionResponse;
    annotations?: Annotation[];
    argumentText?: string;
    attachment?: Attachment[];
    cards?: Card[];
    cardsV2?: CardWithId[];
    clientAssignedMessageId?: string;
    createTime?: string;
    fallbackText?: string;
    lastUpdateTime?: string;
    matchedUrl?: MatchedUrl;
    name?: string;
    sender?: User;
    slashCommand?: SlashCommand;
    space?: Space;
    text?: string;
    thread?: Thread;
    threadReply?: boolean;
}
