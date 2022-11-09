import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DatasetTemplate
/** 
 * Dataset template used for dynamic dataset creation.
**/
export class DatasetTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetIdPrefix" })
  datasetIdPrefix?: string;

  @Metadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;
}
