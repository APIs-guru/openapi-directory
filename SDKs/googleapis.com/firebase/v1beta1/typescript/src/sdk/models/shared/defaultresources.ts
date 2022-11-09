import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DefaultResources
/** 
 * The default resources associated with the Project.
**/
export class DefaultResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=hostingSite" })
  hostingSite?: string;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=realtimeDatabaseInstance" })
  realtimeDatabaseInstance?: string;

  @Metadata({ data: "json, name=storageBucket" })
  storageBucket?: string;
}
