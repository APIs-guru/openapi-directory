import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Container } from "./container";
import { Label } from "./label";


// Pod
/** 
 * Kubernetes Pod.
**/
export class Pod extends SpeakeasyBase {
  @Metadata({ data: "json, name=containers", elemType: shared.Container })
  containers?: Container[];

  @Metadata({ data: "json, name=labels", elemType: shared.Label })
  labels?: Label[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ns" })
  ns?: string;
}
