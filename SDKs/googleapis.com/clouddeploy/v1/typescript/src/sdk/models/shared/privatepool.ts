import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PrivatePool
/** 
 * Execution using a private Cloud Build pool.
**/
export class PrivatePool extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifactStorage" })
  artifactStorage?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=workerPool" })
  workerPool?: string;
}
