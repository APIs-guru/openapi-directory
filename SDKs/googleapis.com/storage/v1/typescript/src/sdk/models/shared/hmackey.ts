import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HmacKeyMetadata } from "./hmackeymetadata";



// HmacKey
/** 
 * JSON template to produce a JSON-style HMAC Key resource for Create responses.
**/
export class HmacKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: HmacKeyMetadata;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
