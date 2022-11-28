import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExportStats
/** 
 * Progress information for an export.
**/
export class ExportStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exportedArtifactCount" })
  exportedArtifactCount?: string;

  @SpeakeasyMetadata({ data: "json, name=sizeInBytes" })
  sizeInBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=totalArtifactCount" })
  totalArtifactCount?: string;
}
