import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApiServiceOut
/** 
 * List of API Services
**/
export class ApiServiceOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=costInUnits" })
  costInUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=serviceGroup" })
  serviceGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
