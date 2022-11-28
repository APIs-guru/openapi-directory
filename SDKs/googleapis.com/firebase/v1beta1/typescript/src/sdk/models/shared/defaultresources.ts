import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DefaultResources
/** 
 * The default resources associated with the Project.
**/
export class DefaultResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hostingSite" })
  hostingSite?: string;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=realtimeDatabaseInstance" })
  realtimeDatabaseInstance?: string;

  @SpeakeasyMetadata({ data: "json, name=storageBucket" })
  storageBucket?: string;
}
