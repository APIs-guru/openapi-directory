import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Service } from "./service";



// ResolveServiceResponse
/** 
 * The response message for LookupService.ResolveService.
**/
export class ResolveServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: Service;
}
