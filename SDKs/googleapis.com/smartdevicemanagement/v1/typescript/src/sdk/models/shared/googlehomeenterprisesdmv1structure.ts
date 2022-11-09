import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleHomeEnterpriseSdmV1Structure
/** 
 * Structure resource represents an instance of enterprise managed home or hotel room.
**/
export class GoogleHomeEnterpriseSdmV1Structure extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=traits" })
  traits?: Map<string, any>;
}
