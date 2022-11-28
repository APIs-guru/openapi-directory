import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModelVersion
/** 
 * Travel Impact Model version. For more information about the model versioning see https://github.com/google/travel-impact-model/#versioning.
**/
export class ModelVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dated" })
  dated?: string;

  @SpeakeasyMetadata({ data: "json, name=major" })
  major?: number;

  @SpeakeasyMetadata({ data: "json, name=minor" })
  minor?: number;

  @SpeakeasyMetadata({ data: "json, name=patch" })
  patch?: number;
}
