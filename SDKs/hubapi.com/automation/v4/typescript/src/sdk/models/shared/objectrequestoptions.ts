import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObjectRequestOptions
/** 
 * Configures what properties of the enrolled CRM object are included in the action execution request
**/
export class ObjectRequestOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties: string[];
}
