import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateEntitiesWithConditionsResponse
/** 
 * Response message for EntityService.UpdateEntitiesWithConditions
**/
export class UpdateEntitiesWithConditionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=response" })
  response?: Map<string, any>;
}
