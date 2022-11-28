import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegisterParameters } from "./registerparameters";



// SearchDomainsResponse
/** 
 * Response for the `SearchDomains` method.
**/
export class SearchDomainsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=registerParameters", elemType: RegisterParameters })
  registerParameters?: RegisterParameters[];
}
