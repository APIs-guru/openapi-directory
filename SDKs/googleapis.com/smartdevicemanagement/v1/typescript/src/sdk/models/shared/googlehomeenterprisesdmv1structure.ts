import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleHomeEnterpriseSdmV1Structure
/** 
 * Structure resource represents an instance of enterprise managed home or hotel room.
**/
export class GoogleHomeEnterpriseSdmV1Structure extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=traits" })
  traits?: Map<string, any>;
}
