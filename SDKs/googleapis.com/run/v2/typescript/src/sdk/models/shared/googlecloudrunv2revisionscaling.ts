import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRunV2RevisionScaling
/** 
 * Settings for revision-level scaling settings.
**/
export class GoogleCloudRunV2RevisionScaling extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxInstanceCount" })
  maxInstanceCount?: number;

  @Metadata({ data: "json, name=minInstanceCount" })
  minInstanceCount?: number;
}
