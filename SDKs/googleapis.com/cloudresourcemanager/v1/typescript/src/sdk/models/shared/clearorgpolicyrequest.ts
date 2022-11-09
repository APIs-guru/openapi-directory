import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ClearOrgPolicyRequest
/** 
 * The request sent to the ClearOrgPolicy method.
**/
export class ClearOrgPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=constraint" })
  constraint?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;
}
