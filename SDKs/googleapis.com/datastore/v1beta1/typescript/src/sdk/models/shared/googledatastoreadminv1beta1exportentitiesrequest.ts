import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleDatastoreAdminV1beta1EntityFilter } from "./googledatastoreadminv1beta1entityfilter";



// GoogleDatastoreAdminV1beta1ExportEntitiesRequest
/** 
 * The request for google.datastore.admin.v1beta1.DatastoreAdmin.ExportEntities.
**/
export class GoogleDatastoreAdminV1beta1ExportEntitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entityFilter" })
  entityFilter?: GoogleDatastoreAdminV1beta1EntityFilter;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=outputUrlPrefix" })
  outputUrlPrefix?: string;
}
