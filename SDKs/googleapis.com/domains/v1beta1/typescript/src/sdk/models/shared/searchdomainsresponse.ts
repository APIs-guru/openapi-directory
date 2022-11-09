import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RegisterParameters } from "./registerparameters";


// SearchDomainsResponse
/** 
 * Response for the `SearchDomains` method.
**/
export class SearchDomainsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=registerParameters", elemType: shared.RegisterParameters })
  registerParameters?: RegisterParameters[];
}
