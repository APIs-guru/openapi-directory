import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DefaultPool
/** 
 * Execution using the default Cloud Build pool.
**/
export class DefaultPool extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifactStorage" })
  artifactStorage?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;
}
