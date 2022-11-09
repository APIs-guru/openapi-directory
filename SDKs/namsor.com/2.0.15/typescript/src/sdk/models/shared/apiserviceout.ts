import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApiServiceOut
/** 
 * List of API Services
**/
export class ApiServiceOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=costInUnits" })
  costInUnits?: number;

  @Metadata({ data: "json, name=serviceGroup" })
  serviceGroup?: string;

  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
