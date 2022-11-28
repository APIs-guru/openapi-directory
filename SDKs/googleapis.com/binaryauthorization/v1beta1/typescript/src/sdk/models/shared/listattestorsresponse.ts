import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attestor } from "./attestor";



// ListAttestorsResponse
/** 
 * Response message for BinauthzManagementService.ListAttestors.
**/
export class ListAttestorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attestors", elemType: Attestor })
  attestors?: Attestor[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
