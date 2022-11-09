import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DecodeIntegrityTokenRequest
/** 
 * Request to decode the integrity token.
**/
export class DecodeIntegrityTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=integrityToken" })
  integrityToken?: string;
}
