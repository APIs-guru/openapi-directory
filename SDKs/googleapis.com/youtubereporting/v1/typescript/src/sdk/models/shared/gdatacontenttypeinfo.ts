import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GdataContentTypeInfo
/** 
 * gdata
**/
export class GdataContentTypeInfo extends SpeakeasyBase {
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
