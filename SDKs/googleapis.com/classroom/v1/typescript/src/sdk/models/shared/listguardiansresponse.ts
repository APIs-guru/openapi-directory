import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Guardian } from "./guardian";


// ListGuardiansResponse
/** 
 * Response when listing guardians.
**/
export class ListGuardiansResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=guardians", elemType: shared.Guardian })
  guardians?: Guardian[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
