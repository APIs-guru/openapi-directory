import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResolveServiceRequest
/** 
 * The request message for LookupService.ResolveService. Looks up a service by its name, returns the service and its endpoints.
**/
export class ResolveServiceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=endpointFilter" })
  endpointFilter?: string;

  @Metadata({ data: "json, name=maxEndpoints" })
  maxEndpoints?: number;
}
