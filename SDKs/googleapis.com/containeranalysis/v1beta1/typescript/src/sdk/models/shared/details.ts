import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Attestation } from "./attestation";


// Details
/** 
 * Details of an attestation occurrence.
**/
export class Details extends SpeakeasyBase {
  @Metadata({ data: "json, name=attestation" })
  attestation?: Attestation;
}
