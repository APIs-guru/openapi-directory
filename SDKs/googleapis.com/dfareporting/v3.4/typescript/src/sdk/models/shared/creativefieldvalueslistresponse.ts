import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreativeFieldValue } from "./creativefieldvalue";



// CreativeFieldValuesListResponse
/** 
 * Creative Field Value List Response
**/
export class CreativeFieldValuesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creativeFieldValues", elemType: CreativeFieldValue })
  creativeFieldValues?: CreativeFieldValue[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
