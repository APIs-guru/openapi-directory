import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActionResponse } from "./actionresponse";
import { Annotation } from "./annotation";
import { Attachment } from "./attachment";
import { Card } from "./card";
import { CardWithId } from "./cardwithid";
import { MatchedUrl } from "./matchedurl";
import { User } from "./user";
import { SlashCommand } from "./slashcommand";
import { Space } from "./space";
import { Thread } from "./thread";


// Message
/** 
 * A message in Google Chat.
**/
export class Message extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionResponse" })
  actionResponse?: ActionResponse;

  @Metadata({ data: "json, name=annotations", elemType: shared.Annotation })
  annotations?: Annotation[];

  @Metadata({ data: "json, name=argumentText" })
  argumentText?: string;

  @Metadata({ data: "json, name=attachment", elemType: shared.Attachment })
  attachment?: Attachment[];

  @Metadata({ data: "json, name=cards", elemType: shared.Card })
  cards?: Card[];

  @Metadata({ data: "json, name=cardsV2", elemType: shared.CardWithId })
  cardsV2?: CardWithId[];

  @Metadata({ data: "json, name=clientAssignedMessageId" })
  clientAssignedMessageId?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=fallbackText" })
  fallbackText?: string;

  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: string;

  @Metadata({ data: "json, name=matchedUrl" })
  matchedUrl?: MatchedUrl;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sender" })
  sender?: User;

  @Metadata({ data: "json, name=slashCommand" })
  slashCommand?: SlashCommand;

  @Metadata({ data: "json, name=space" })
  space?: Space;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=thread" })
  thread?: Thread;
}
