import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Company } from "./company";
import { ResponseMetadata } from "./responsemetadata";



// ListCompaniesResponse
/** 
 * The List companies response object.
**/
export class ListCompaniesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companies", elemType: Company })
  companies?: Company[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ResponseMetadata;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
