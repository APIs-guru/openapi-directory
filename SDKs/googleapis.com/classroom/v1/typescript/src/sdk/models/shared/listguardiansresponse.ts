import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Guardian } from "./guardian";



// ListGuardiansResponse
/** 
 * Response when listing guardians.
**/
export class ListGuardiansResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=guardians", elemType: Guardian })
  guardians?: Guardian[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
