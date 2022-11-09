import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetRemarketingTagResponse
/** 
 * Response for a request to get remarketing tag.
**/
export class GetRemarketingTagResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=snippet" })
  snippet?: string;
}
