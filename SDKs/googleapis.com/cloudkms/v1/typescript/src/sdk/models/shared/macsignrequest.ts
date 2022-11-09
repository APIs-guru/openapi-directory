import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MacSignRequest
/** 
 * Request message for KeyManagementService.MacSign.
**/
export class MacSignRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=dataCrc32c" })
  dataCrc32c?: string;
}
