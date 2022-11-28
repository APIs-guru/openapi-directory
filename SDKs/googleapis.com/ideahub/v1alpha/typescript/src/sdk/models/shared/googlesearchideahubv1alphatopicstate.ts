import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleSearchIdeahubV1alphaTopicState
/** 
 * Represents topic state specific to a web property.
**/
export class GoogleSearchIdeahubV1alphaTopicState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dismissed" })
  dismissed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=saved" })
  saved?: boolean;
}
