import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchEnableServicesRequest
/** 
 * Request message for the `BatchEnableServices` method.
**/
export class BatchEnableServicesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=serviceIds" })
  serviceIds?: string[];
}
