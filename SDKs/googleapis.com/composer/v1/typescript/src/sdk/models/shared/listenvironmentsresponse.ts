import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Environment } from "./environment";


// ListEnvironmentsResponse
/** 
 * The environments in a project and location.
**/
export class ListEnvironmentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=environments", elemType: shared.Environment })
  environments?: Environment[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
