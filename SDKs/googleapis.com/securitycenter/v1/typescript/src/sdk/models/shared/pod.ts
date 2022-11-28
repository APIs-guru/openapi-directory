import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Container } from "./container";
import { Label } from "./label";



// Pod
/** 
 * Kubernetes Pod.
**/
export class Pod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containers", elemType: Container })
  containers?: Container[];

  @SpeakeasyMetadata({ data: "json, name=labels", elemType: Label })
  labels?: Label[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ns" })
  ns?: string;
}
