import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TextSpan } from "./textspan";


export enum EntityMentionTypeEnum {
    TypeUnknown = "TYPE_UNKNOWN",
    Proper = "PROPER",
    Common = "COMMON"
}


// EntityMention
/** 
 * Represents a mention for an entity in the text. Currently, proper noun mentions are supported.
**/
export class EntityMention extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: TextSpan;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: EntityMentionTypeEnum;
}
