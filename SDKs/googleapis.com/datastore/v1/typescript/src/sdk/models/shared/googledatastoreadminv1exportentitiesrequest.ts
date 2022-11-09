import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleDatastoreAdminV1EntityFilter } from "./googledatastoreadminv1entityfilter";


// GoogleDatastoreAdminV1ExportEntitiesRequest
/** 
 * The request for google.datastore.admin.v1.DatastoreAdmin.ExportEntities.
**/
export class GoogleDatastoreAdminV1ExportEntitiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entityFilter" })
  entityFilter?: GoogleDatastoreAdminV1EntityFilter;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=outputUrlPrefix" })
  outputUrlPrefix?: string;
}
