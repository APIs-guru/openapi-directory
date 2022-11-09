import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HmacKeyMetadata } from "./hmackeymetadata";


// HmacKey
/** 
 * JSON template to produce a JSON-style HMAC Key resource for Create responses.
**/
export class HmacKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: HmacKeyMetadata;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
