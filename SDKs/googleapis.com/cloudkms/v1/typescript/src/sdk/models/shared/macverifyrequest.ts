import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MacVerifyRequest
/** 
 * Request message for KeyManagementService.MacVerify.
**/
export class MacVerifyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=dataCrc32c" })
  dataCrc32c?: string;

  @SpeakeasyMetadata({ data: "json, name=mac" })
  mac?: string;

  @SpeakeasyMetadata({ data: "json, name=macCrc32c" })
  macCrc32c?: string;
}
