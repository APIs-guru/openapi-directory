import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PostalCode } from "./postalcode";


// PostalCodesListResponse
/** 
 * Postal Code List Response
**/
export class PostalCodesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=postalCodes", elemType: shared.PostalCode })
  postalCodes?: PostalCode[];
}
