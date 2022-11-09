import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MacVerifyRequest
/** 
 * Request message for KeyManagementService.MacVerify.
**/
export class MacVerifyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=dataCrc32c" })
  dataCrc32c?: string;

  @Metadata({ data: "json, name=mac" })
  mac?: string;

  @Metadata({ data: "json, name=macCrc32c" })
  macCrc32c?: string;
}
