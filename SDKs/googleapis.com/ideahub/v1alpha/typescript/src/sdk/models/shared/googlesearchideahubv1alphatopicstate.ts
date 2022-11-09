import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleSearchIdeahubV1alphaTopicState
/** 
 * Represents topic state specific to a web property.
**/
export class GoogleSearchIdeahubV1alphaTopicState extends SpeakeasyBase {
  @Metadata({ data: "json, name=dismissed" })
  dismissed?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=saved" })
  saved?: boolean;
}
