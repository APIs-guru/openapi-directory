import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleDatastoreAdminV1EntityFilter } from "./googledatastoreadminv1entityfilter";



// GoogleDatastoreAdminV1ImportEntitiesRequest
/** 
 * The request for google.datastore.admin.v1.DatastoreAdmin.ImportEntities.
**/
export class GoogleDatastoreAdminV1ImportEntitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entityFilter" })
  entityFilter?: GoogleDatastoreAdminV1EntityFilter;

  @SpeakeasyMetadata({ data: "json, name=inputUrl" })
  inputUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;
}
