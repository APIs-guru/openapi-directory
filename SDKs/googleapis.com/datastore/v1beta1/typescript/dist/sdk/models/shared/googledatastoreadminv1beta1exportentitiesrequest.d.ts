import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleDatastoreAdminV1beta1EntityFilter } from "./googledatastoreadminv1beta1entityfilter";
/**
 * The request for google.datastore.admin.v1beta1.DatastoreAdmin.ExportEntities.
**/
export declare class GoogleDatastoreAdminV1beta1ExportEntitiesRequest extends SpeakeasyBase {
    entityFilter?: GoogleDatastoreAdminV1beta1EntityFilter;
    labels?: Map<string, string>;
    outputUrlPrefix?: string;
}
