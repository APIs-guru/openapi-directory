import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3beta1VersionVariantsVariant
/** 
 * A single flow version with specified traffic allocation.
**/
export class GoogleCloudDialogflowCxV3beta1VersionVariantsVariant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isControlGroup" })
  isControlGroup?: boolean;

  @SpeakeasyMetadata({ data: "json, name=trafficAllocation" })
  trafficAllocation?: number;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
