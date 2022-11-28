import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MacSignRequest
/** 
 * Request message for KeyManagementService.MacSign.
**/
export class MacSignRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=dataCrc32c" })
  dataCrc32c?: string;
}
