import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleHomeEnterpriseSdmV1Room
/** 
 * Room resource represents an instance of sub-space within a structure such as rooms in a hotel suite or rental apartment.
**/
export class GoogleHomeEnterpriseSdmV1Room extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=traits" })
  traits?: Map<string, any>;
}
