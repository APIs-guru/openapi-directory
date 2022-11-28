import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleDatastoreAdminV1beta1EntityFilter } from "./googledatastoreadminv1beta1entityfilter";



// GoogleDatastoreAdminV1beta1ImportEntitiesRequest
/** 
 * The request for google.datastore.admin.v1beta1.DatastoreAdmin.ImportEntities.
**/
export class GoogleDatastoreAdminV1beta1ImportEntitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entityFilter" })
  entityFilter?: GoogleDatastoreAdminV1beta1EntityFilter;

  @SpeakeasyMetadata({ data: "json, name=inputUrl" })
  inputUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;
}
