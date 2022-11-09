import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { User } from "./user";

export enum SlashCommandMetadataTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Add = "ADD"
,    Invoke = "INVOKE"
}


// SlashCommandMetadata
/** 
 * Annotation metadata for slash commands (/).
**/
export class SlashCommandMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=bot" })
  bot?: User;

  @Metadata({ data: "json, name=commandId" })
  commandId?: string;

  @Metadata({ data: "json, name=commandName" })
  commandName?: string;

  @Metadata({ data: "json, name=triggersDialog" })
  triggersDialog?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: SlashCommandMetadataTypeEnum;
}
