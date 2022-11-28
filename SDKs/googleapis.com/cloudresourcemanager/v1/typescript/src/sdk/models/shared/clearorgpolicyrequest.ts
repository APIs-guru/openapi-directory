import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClearOrgPolicyRequest
/** 
 * The request sent to the ClearOrgPolicy method.
**/
export class ClearOrgPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=constraint" })
  constraint?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;
}
