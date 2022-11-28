import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContentTypeInfo
/** 
 * # gdata.* are outside protos with mising documentation
**/
export class ContentTypeInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bestGuess" })
  bestGuess?: string;

  @SpeakeasyMetadata({ data: "json, name=fromBytes" })
  fromBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=fromFileName" })
  fromFileName?: string;

  @SpeakeasyMetadata({ data: "json, name=fromHeader" })
  fromHeader?: string;

  @SpeakeasyMetadata({ data: "json, name=fromUrlPath" })
  fromUrlPath?: string;
}
