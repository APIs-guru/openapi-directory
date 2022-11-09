import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GenerateRandomBytesResponse
/** 
 * Response message for KeyManagementService.GenerateRandomBytes.
**/
export class GenerateRandomBytesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=dataCrc32c" })
  dataCrc32c?: string;
}
