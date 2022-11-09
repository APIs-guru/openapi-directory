import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Company } from "./company";
import { ResponseMetadata } from "./responsemetadata";


// ListCompaniesResponse
/** 
 * Output only. The List companies response object.
**/
export class ListCompaniesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=companies", elemType: shared.Company })
  companies?: Company[];

  @Metadata({ data: "json, name=metadata" })
  metadata?: ResponseMetadata;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
