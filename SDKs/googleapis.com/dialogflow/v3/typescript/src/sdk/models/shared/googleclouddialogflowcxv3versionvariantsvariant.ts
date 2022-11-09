import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3VersionVariantsVariant
/** 
 * A single flow version with specified traffic allocation.
**/
export class GoogleCloudDialogflowCxV3VersionVariantsVariant extends SpeakeasyBase {
  @Metadata({ data: "json, name=isControlGroup" })
  isControlGroup?: boolean;

  @Metadata({ data: "json, name=trafficAllocation" })
  trafficAllocation?: number;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
