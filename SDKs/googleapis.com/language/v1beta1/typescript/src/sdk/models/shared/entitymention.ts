import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TextSpan } from "./textspan";

export enum EntityMentionTypeEnum {
    TypeUnknown = "TYPE_UNKNOWN"
,    Proper = "PROPER"
,    Common = "COMMON"
}


// EntityMention
/** 
 * Represents a mention for an entity in the text. Currently, proper noun mentions are supported.
**/
export class EntityMention extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text?: TextSpan;

  @Metadata({ data: "json, name=type" })
  type?: EntityMentionTypeEnum;
}
