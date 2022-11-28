import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceTemplateSpec } from "./instancetemplatespec";



// JobSpec
/** 
 * JobSpec describes how the job execution will look like.
**/
export class JobSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeDeadlineSeconds" })
  activeDeadlineSeconds?: string;

  @SpeakeasyMetadata({ data: "json, name=backoffLimit" })
  backoffLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=completions" })
  completions?: number;

  @SpeakeasyMetadata({ data: "json, name=parallelism" })
  parallelism?: number;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: InstanceTemplateSpec;

  @SpeakeasyMetadata({ data: "json, name=ttlSecondsAfterFinished" })
  ttlSecondsAfterFinished?: number;
}
