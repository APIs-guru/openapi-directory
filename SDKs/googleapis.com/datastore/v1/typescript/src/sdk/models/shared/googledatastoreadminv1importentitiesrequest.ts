import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleDatastoreAdminV1EntityFilter } from "./googledatastoreadminv1entityfilter";


// GoogleDatastoreAdminV1ImportEntitiesRequest
/** 
 * The request for google.datastore.admin.v1.DatastoreAdmin.ImportEntities.
**/
export class GoogleDatastoreAdminV1ImportEntitiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entityFilter" })
  entityFilter?: GoogleDatastoreAdminV1EntityFilter;

  @Metadata({ data: "json, name=inputUrl" })
  inputUrl?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;
}
