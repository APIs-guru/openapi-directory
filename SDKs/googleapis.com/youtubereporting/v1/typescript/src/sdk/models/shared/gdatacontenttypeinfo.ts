import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GdataContentTypeInfo
/** 
 * gdata
**/
export class GdataContentTypeInfo extends SpeakeasyBase {
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
