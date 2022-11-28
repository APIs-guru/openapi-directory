import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DatasetTemplate
/** 
 * Dataset template used for dynamic dataset creation.
**/
export class DatasetTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetIdPrefix" })
  datasetIdPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;
}
