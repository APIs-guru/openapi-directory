import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SetLocationsRequest
/** 
 * SetLocationsRequest sets the locations of the cluster.
**/
export class SetLocationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @Metadata({ data: "json, name=locations" })
  locations?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
