import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Digest } from "./digest";


// AsymmetricSignRequest
/** 
 * Request message for KeyManagementService.AsymmetricSign.
**/
export class AsymmetricSignRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=dataCrc32c" })
  dataCrc32c?: string;

  @Metadata({ data: "json, name=digest" })
  digest?: Digest;

  @Metadata({ data: "json, name=digestCrc32c" })
  digestCrc32c?: string;
}
