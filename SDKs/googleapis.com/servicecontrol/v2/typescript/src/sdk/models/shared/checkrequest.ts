import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeContext } from "./attributecontext";
import { ResourceInfo } from "./resourceinfo";



// CheckRequest
/** 
 * Request message for the Check method.
**/
export class CheckRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: AttributeContext;

  @SpeakeasyMetadata({ data: "json, name=flags" })
  flags?: string;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: ResourceInfo })
  resources?: ResourceInfo[];

  @SpeakeasyMetadata({ data: "json, name=serviceConfigId" })
  serviceConfigId?: string;
}
