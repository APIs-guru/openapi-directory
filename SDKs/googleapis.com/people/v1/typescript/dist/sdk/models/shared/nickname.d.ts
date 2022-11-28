import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";
import { FieldMetadataInput } from "./fieldmetadata";
export declare enum NicknameTypeEnum {
    Default = "DEFAULT",
    MaidenName = "MAIDEN_NAME",
    Initials = "INITIALS",
    Gplus = "GPLUS",
    OtherName = "OTHER_NAME",
    AlternateName = "ALTERNATE_NAME",
    ShortName = "SHORT_NAME"
}
/**
 * A person's nickname.
**/
export declare class Nickname extends SpeakeasyBase {
    metadata?: FieldMetadata;
    type?: NicknameTypeEnum;
    value?: string;
}
/**
 * A person's nickname.
**/
export declare class NicknameInput extends SpeakeasyBase {
    metadata?: FieldMetadataInput;
    type?: NicknameTypeEnum;
    value?: string;
}
