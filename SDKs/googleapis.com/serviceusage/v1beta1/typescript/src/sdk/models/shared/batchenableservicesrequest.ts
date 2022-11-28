import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchEnableServicesRequest
/** 
 * Request message for the `BatchEnableServices` method.
**/
export class BatchEnableServicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceIds" })
  serviceIds?: string[];
}
