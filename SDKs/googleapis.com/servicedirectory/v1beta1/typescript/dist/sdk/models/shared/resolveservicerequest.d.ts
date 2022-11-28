import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request message for LookupService.ResolveService. Looks up a service by its name, returns the service and its endpoints.
**/
export declare class ResolveServiceRequest extends SpeakeasyBase {
    endpointFilter?: string;
    maxEndpoints?: number;
}
