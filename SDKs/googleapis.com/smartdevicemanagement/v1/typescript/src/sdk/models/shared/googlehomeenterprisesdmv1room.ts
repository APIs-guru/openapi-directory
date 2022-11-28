import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleHomeEnterpriseSdmV1Room
/** 
 * Room resource represents an instance of sub-space within a structure such as rooms in a hotel suite or rental apartment.
**/
export class GoogleHomeEnterpriseSdmV1Room extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=traits" })
  traits?: Map<string, any>;
}
