import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SlashCommand
/** 
 * A [slash command](https://developers.google.com/chat/how-tos/slash-commands) in Google Chat.
**/
export class SlashCommand extends SpeakeasyBase {
  @Metadata({ data: "json, name=commandId" })
  commandId?: string;
}
