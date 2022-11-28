import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";
import { FieldMetadataInput } from "./fieldmetadata";


export enum NicknameTypeEnum {
    Default = "DEFAULT",
    MaidenName = "MAIDEN_NAME",
    Initials = "INITIALS",
    Gplus = "GPLUS",
    OtherName = "OTHER_NAME",
    AlternateName = "ALTERNATE_NAME",
    ShortName = "SHORT_NAME"
}


// Nickname
/** 
 * A person's nickname.
**/
export class Nickname extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: NicknameTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// NicknameInput
/** 
 * A person's nickname.
**/
export class NicknameInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadataInput;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: NicknameTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
