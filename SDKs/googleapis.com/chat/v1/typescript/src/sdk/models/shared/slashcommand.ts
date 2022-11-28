import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SlashCommand
/** 
 * A [slash command](https://developers.google.com/chat/how-tos/slash-commands) in Google Chat.
**/
export class SlashCommand extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commandId" })
  commandId?: string;
}
