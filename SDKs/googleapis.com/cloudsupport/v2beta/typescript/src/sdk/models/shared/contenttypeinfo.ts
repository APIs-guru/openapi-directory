import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ContentTypeInfo
/** 
 * # gdata.* are outside protos with mising documentation
**/
export class ContentTypeInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=bestGuess" })
  bestGuess?: string;

  @Metadata({ data: "json, name=fromBytes" })
  fromBytes?: string;

  @Metadata({ data: "json, name=fromFileName" })
  fromFileName?: string;

  @Metadata({ data: "json, name=fromHeader" })
  fromHeader?: string;

  @Metadata({ data: "json, name=fromUrlPath" })
  fromUrlPath?: string;
}
