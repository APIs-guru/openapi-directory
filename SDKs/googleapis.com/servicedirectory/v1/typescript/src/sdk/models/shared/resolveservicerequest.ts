import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResolveServiceRequest
/** 
 * The request message for LookupService.ResolveService. Looks up a service by its name, returns the service and its endpoints.
**/
export class ResolveServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpointFilter" })
  endpointFilter?: string;

  @SpeakeasyMetadata({ data: "json, name=maxEndpoints" })
  maxEndpoints?: number;
}
