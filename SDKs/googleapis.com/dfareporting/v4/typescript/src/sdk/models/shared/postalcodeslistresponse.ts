import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PostalCode } from "./postalcode";



// PostalCodesListResponse
/** 
 * Postal Code List Response
**/
export class PostalCodesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCodes", elemType: PostalCode })
  postalCodes?: PostalCode[];
}
