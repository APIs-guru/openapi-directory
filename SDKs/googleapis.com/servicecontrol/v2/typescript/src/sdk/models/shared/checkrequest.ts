import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeContext } from "./attributecontext";
import { ResourceInfo } from "./resourceinfo";


// CheckRequest
/** 
 * Request message for the Check method.
**/
export class CheckRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: AttributeContext;

  @Metadata({ data: "json, name=flags" })
  flags?: string;

  @Metadata({ data: "json, name=resources", elemType: shared.ResourceInfo })
  resources?: ResourceInfo[];

  @Metadata({ data: "json, name=serviceConfigId" })
  serviceConfigId?: string;
}
