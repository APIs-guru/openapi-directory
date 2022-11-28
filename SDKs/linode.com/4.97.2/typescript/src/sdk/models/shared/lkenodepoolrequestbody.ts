import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Items } from "./items";



// LkeNodePoolRequestBody
/** 
 * Specifies a collection of Linodes which will be members of a Kubernetes cluster.
 * 
**/
export class LkeNodePoolRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=disks", elemType: Items })
  disks?: Items[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
