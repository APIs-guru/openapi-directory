import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
export declare enum SlashCommandMetadataTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Add = "ADD",
    Invoke = "INVOKE"
}
/**
 * Annotation metadata for slash commands (/).
**/
export declare class SlashCommandMetadata extends SpeakeasyBase {
    bot?: User;
    commandId?: string;
    commandName?: string;
    triggersDialog?: boolean;
    type?: SlashCommandMetadataTypeEnum;
}
