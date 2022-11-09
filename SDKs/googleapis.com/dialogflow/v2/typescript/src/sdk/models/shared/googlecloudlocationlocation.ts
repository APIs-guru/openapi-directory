import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudLocationLocation
/** 
 * A resource that represents Google Cloud Platform location.
**/
export class GoogleCloudLocationLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
