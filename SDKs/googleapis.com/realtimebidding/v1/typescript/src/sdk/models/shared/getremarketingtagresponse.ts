import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetRemarketingTagResponse
/** 
 * Response for a request to get remarketing tag.
**/
export class GetRemarketingTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: string;
}
