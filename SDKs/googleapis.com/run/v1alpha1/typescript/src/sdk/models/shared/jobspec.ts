import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceTemplateSpec } from "./instancetemplatespec";


// JobSpec
/** 
 * JobSpec describes how the job execution will look like.
**/
export class JobSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeDeadlineSeconds" })
  activeDeadlineSeconds?: string;

  @Metadata({ data: "json, name=backoffLimit" })
  backoffLimit?: number;

  @Metadata({ data: "json, name=completions" })
  completions?: number;

  @Metadata({ data: "json, name=parallelism" })
  parallelism?: number;

  @Metadata({ data: "json, name=template" })
  template?: InstanceTemplateSpec;

  @Metadata({ data: "json, name=ttlSecondsAfterFinished" })
  ttlSecondsAfterFinished?: number;
}
