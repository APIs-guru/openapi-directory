import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DsseHint } from "./dssehint";



// DsseAttestationNote
/** 
 * A note describing an attestation
**/
export class DsseAttestationNote extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hint" })
  hint?: DsseHint;
}
