import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Container } from "./container";
import { Volume } from "./volume";



// InstanceSpec
/** 
 * InstanceSpec is a description of an instance.
**/
export class InstanceSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeDeadlineSeconds" })
  activeDeadlineSeconds?: string;

  @SpeakeasyMetadata({ data: "json, name=containers", elemType: Container })
  containers?: Container[];

  @SpeakeasyMetadata({ data: "json, name=restartPolicy" })
  restartPolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccountName" })
  serviceAccountName?: string;

  @SpeakeasyMetadata({ data: "json, name=terminationGracePeriodSeconds" })
  terminationGracePeriodSeconds?: string;

  @SpeakeasyMetadata({ data: "json, name=volumes", elemType: Volume })
  volumes?: Volume[];
}
