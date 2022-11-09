import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObjectRequestOptions
/** 
 * Configures what properties of the enrolled CRM object are included in the action execution request
**/
export class ObjectRequestOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=properties" })
  properties: string[];
}
