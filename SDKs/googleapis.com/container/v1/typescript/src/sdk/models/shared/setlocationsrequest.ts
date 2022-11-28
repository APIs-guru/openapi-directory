import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SetLocationsRequest
/** 
 * SetLocationsRequest sets the locations of the cluster.
**/
export class SetLocationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=locations" })
  locations?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
