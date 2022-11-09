import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Service } from "./service";


// ResolveServiceResponse
/** 
 * The response message for LookupService.ResolveService.
**/
export class ResolveServiceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=service" })
  service?: Service;
}
