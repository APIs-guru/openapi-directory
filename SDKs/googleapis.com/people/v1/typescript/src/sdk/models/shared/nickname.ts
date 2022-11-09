import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FieldMetadata } from "./fieldmetadata";

export enum NicknameTypeEnum {
    Default = "DEFAULT"
,    MaidenName = "MAIDEN_NAME"
,    Initials = "INITIALS"
,    Gplus = "GPLUS"
,    OtherName = "OTHER_NAME"
,    AlternateName = "ALTERNATE_NAME"
,    ShortName = "SHORT_NAME"
}


// Nickname
/** 
 * A person's nickname.
**/
export class Nickname extends SpeakeasyBase {
  @Metadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @Metadata({ data: "json, name=type" })
  type?: NicknameTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
