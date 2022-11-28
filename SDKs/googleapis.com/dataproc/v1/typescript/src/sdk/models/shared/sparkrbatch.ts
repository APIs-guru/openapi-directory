import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SparkRBatch
/** 
 * A configuration for running an Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html) batch workload.
**/
export class SparkRBatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archiveUris" })
  archiveUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=args" })
  args?: string[];

  @SpeakeasyMetadata({ data: "json, name=fileUris" })
  fileUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=mainRFileUri" })
  mainRFileUri?: string;
}
