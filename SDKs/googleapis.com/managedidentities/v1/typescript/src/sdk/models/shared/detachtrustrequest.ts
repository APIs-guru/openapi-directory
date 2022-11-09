import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Trust } from "./trust";


// DetachTrustRequest
/** 
 * Request message for DetachTrust
**/
export class DetachTrustRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=trust" })
  trust?: Trust;
}
