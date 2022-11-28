import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceReference
/** 
 * Reference to another Cloud SQL instance.
**/
export class InstanceReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;
}
