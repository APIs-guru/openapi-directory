import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExportStats
/** 
 * Progress information for an export.
**/
export class ExportStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=exportedArtifactCount" })
  exportedArtifactCount?: string;

  @Metadata({ data: "json, name=sizeInBytes" })
  sizeInBytes?: string;

  @Metadata({ data: "json, name=totalArtifactCount" })
  totalArtifactCount?: string;
}
