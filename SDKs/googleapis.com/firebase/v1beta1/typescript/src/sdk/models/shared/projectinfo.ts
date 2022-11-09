import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProjectInfo
/** 
 * A reference to a Google Cloud Platform (GCP) `Project`.
**/
export class ProjectInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=project" })
  project?: string;
}
