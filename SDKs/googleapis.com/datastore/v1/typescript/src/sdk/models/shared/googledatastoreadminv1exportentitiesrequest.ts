import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleDatastoreAdminV1EntityFilter } from "./googledatastoreadminv1entityfilter";



// GoogleDatastoreAdminV1ExportEntitiesRequest
/** 
 * The request for google.datastore.admin.v1.DatastoreAdmin.ExportEntities.
**/
export class GoogleDatastoreAdminV1ExportEntitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entityFilter" })
  entityFilter?: GoogleDatastoreAdminV1EntityFilter;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=outputUrlPrefix" })
  outputUrlPrefix?: string;
}
