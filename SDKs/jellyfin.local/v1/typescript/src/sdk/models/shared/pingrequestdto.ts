import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PingRequestDto
/** 
 * Class PingRequestDto.
**/
export class PingRequestDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Ping" })
  ping?: number;
}
