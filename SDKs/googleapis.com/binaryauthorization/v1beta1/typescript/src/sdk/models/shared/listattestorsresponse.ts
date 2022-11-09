import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Attestor } from "./attestor";


// ListAttestorsResponse
/** 
 * Response message for BinauthzManagementService.ListAttestors.
**/
export class ListAttestorsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=attestors", elemType: shared.Attestor })
  attestors?: Attestor[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
