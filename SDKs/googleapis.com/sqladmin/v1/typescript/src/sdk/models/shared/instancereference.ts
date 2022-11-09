import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstanceReference
/** 
 * Reference to another Cloud SQL instance.
**/
export class InstanceReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=project" })
  project?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;
}
