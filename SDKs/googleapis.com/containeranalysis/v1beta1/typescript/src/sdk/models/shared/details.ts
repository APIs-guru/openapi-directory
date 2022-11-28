import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attestation } from "./attestation";



// Details
/** 
 * Details of an attestation occurrence.
**/
export class Details extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attestation" })
  attestation?: Attestation;
}
