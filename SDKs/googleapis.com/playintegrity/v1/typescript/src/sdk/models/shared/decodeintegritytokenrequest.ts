import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DecodeIntegrityTokenRequest
/** 
 * Request to decode the integrity token.
**/
export class DecodeIntegrityTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=integrityToken" })
  integrityToken?: string;
}
