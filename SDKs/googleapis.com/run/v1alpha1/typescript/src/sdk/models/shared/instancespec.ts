import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Container } from "./container";
import { Volume } from "./volume";


// InstanceSpec
/** 
 * InstanceSpec is a description of an instance.
**/
export class InstanceSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeDeadlineSeconds" })
  activeDeadlineSeconds?: string;

  @Metadata({ data: "json, name=containers", elemType: shared.Container })
  containers?: Container[];

  @Metadata({ data: "json, name=restartPolicy" })
  restartPolicy?: string;

  @Metadata({ data: "json, name=serviceAccountName" })
  serviceAccountName?: string;

  @Metadata({ data: "json, name=terminationGracePeriodSeconds" })
  terminationGracePeriodSeconds?: string;

  @Metadata({ data: "json, name=volumes", elemType: shared.Volume })
  volumes?: Volume[];
}
