import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SparkRBatch
/** 
 * A configuration for running an Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html) batch workload.
**/
export class SparkRBatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=archiveUris" })
  archiveUris?: string[];

  @Metadata({ data: "json, name=args" })
  args?: string[];

  @Metadata({ data: "json, name=fileUris" })
  fileUris?: string[];

  @Metadata({ data: "json, name=mainRFileUri" })
  mainRFileUri?: string;
}
