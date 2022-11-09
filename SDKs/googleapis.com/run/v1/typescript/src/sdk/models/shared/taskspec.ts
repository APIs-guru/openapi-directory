import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Container } from "./container";
import { Volume } from "./volume";


// TaskSpec
/** 
 * TaskSpec is a description of a task.
**/
export class TaskSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=containers", elemType: shared.Container })
  containers?: Container[];

  @Metadata({ data: "json, name=maxRetries" })
  maxRetries?: number;

  @Metadata({ data: "json, name=serviceAccountName" })
  serviceAccountName?: string;

  @Metadata({ data: "json, name=timeoutSeconds" })
  timeoutSeconds?: string;

  @Metadata({ data: "json, name=volumes", elemType: shared.Volume })
  volumes?: Volume[];
}
