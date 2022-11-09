import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PingRequestDto
/** 
 * Class PingRequestDto.
**/
export class PingRequestDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Ping" })
  ping?: number;
}
