import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PrivatePool
/** 
 * Execution using a private Cloud Build pool.
**/
export class PrivatePool extends SpeakeasyBase {
  @Metadata({ data: "json, name=artifactStorage" })
  artifactStorage?: string;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @Metadata({ data: "json, name=workerPool" })
  workerPool?: string;
}
