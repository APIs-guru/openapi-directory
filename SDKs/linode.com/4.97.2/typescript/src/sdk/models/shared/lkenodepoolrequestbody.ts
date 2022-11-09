import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Items } from "./items";


// LkeNodePoolRequestBody
/** 
 * Specifies a collection of Linodes which will be members of a Kubernetes cluster.
 * 
**/
export class LkeNodePoolRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=disks", elemType: shared.Items })
  disks?: Items[];

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=type" })
  type?: string;
}
