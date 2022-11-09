import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CreativeFieldValue } from "./creativefieldvalue";


// CreativeFieldValuesListResponse
/** 
 * Creative Field Value List Response
**/
export class CreativeFieldValuesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=creativeFieldValues", elemType: shared.CreativeFieldValue })
  creativeFieldValues?: CreativeFieldValue[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
