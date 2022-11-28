import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Digest } from "./digest";



// AsymmetricSignRequest
/** 
 * Request message for KeyManagementService.AsymmetricSign.
**/
export class AsymmetricSignRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=dataCrc32c" })
  dataCrc32c?: string;

  @SpeakeasyMetadata({ data: "json, name=digest" })
  digest?: Digest;

  @SpeakeasyMetadata({ data: "json, name=digestCrc32c" })
  digestCrc32c?: string;
}
