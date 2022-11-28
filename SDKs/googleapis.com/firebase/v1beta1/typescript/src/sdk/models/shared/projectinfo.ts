import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProjectInfo
/** 
 * A reference to a Google Cloud Platform (GCP) `Project`.
**/
export class ProjectInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: string;
}
