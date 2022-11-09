import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DefaultPool
/** 
 * Execution using the default Cloud Build pool.
**/
export class DefaultPool extends SpeakeasyBase {
  @Metadata({ data: "json, name=artifactStorage" })
  artifactStorage?: string;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;
}
