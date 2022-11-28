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
export class MessageInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionResponse" })
  actionResponse?: ActionResponse;

  @SpeakeasyMetadata({ data: "json, name=argumentText" })
  argumentText?: string;

  @SpeakeasyMetadata({ data: "json, name=attachment", elemType: AttachmentInput })
  attachment?: AttachmentInput[];

  @SpeakeasyMetadata({ data: "json, name=cards", elemType: Card })
  cards?: Card[];

  @SpeakeasyMetadata({ data: "json, name=cardsV2", elemType: CardWithId })
  cardsV2?: CardWithId[];

  @SpeakeasyMetadata({ data: "json, name=clientAssignedMessageId" })
  clientAssignedMessageId?: string;

  @SpeakeasyMetadata({ data: "json, name=fallbackText" })
  fallbackText?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sender" })
  sender?: UserInput;

  @SpeakeasyMetadata({ data: "json, name=slashCommand" })
  slashCommand?: SlashCommand;

  @SpeakeasyMetadata({ data: "json, name=space" })
  space?: SpaceInput;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=thread" })
  thread?: Thread;
}


// Message
/** 
 * A message in Google Chat.
**/
export class Message extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionResponse" })
  actionResponse?: ActionResponse;

  @SpeakeasyMetadata({ data: "json, name=annotations", elemType: Annotation })
  annotations?: Annotation[];

  @SpeakeasyMetadata({ data: "json, name=argumentText" })
  argumentText?: string;

  @SpeakeasyMetadata({ data: "json, name=attachment", elemType: Attachment })
  attachment?: Attachment[];

  @SpeakeasyMetadata({ data: "json, name=cards", elemType: Card })
  cards?: Card[];

  @SpeakeasyMetadata({ data: "json, name=cardsV2", elemType: CardWithId })
  cardsV2?: CardWithId[];

  @SpeakeasyMetadata({ data: "json, name=clientAssignedMessageId" })
  clientAssignedMessageId?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=fallbackText" })
  fallbackText?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=matchedUrl" })
  matchedUrl?: MatchedUrl;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sender" })
  sender?: User;

  @SpeakeasyMetadata({ data: "json, name=slashCommand" })
  slashCommand?: SlashCommand;

  @SpeakeasyMetadata({ data: "json, name=space" })
  space?: Space;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=thread" })
  thread?: Thread;

  @SpeakeasyMetadata({ data: "json, name=threadReply" })
  threadReply?: boolean;
}
