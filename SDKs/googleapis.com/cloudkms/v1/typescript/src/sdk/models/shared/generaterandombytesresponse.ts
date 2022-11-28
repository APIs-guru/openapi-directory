import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GenerateRandomBytesResponse
/** 
 * Response message for KeyManagementService.GenerateRandomBytes.
**/
export class GenerateRandomBytesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=dataCrc32c" })
  dataCrc32c?: string;
}
