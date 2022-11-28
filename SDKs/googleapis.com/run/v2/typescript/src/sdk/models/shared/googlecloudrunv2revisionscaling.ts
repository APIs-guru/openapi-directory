import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRunV2RevisionScaling
/** 
 * Settings for revision-level scaling settings.
**/
export class GoogleCloudRunV2RevisionScaling extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxInstanceCount" })
  maxInstanceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=minInstanceCount" })
  minInstanceCount?: number;
}
