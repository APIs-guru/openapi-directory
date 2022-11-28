import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";


export enum SlashCommandMetadataTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Add = "ADD",
    Invoke = "INVOKE"
}


// SlashCommandMetadata
/** 
 * Annotation metadata for slash commands (/).
**/
export class SlashCommandMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bot" })
  bot?: User;

  @SpeakeasyMetadata({ data: "json, name=commandId" })
  commandId?: string;

  @SpeakeasyMetadata({ data: "json, name=commandName" })
  commandName?: string;

  @SpeakeasyMetadata({ data: "json, name=triggersDialog" })
  triggersDialog?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SlashCommandMetadataTypeEnum;
}
