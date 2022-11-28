import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleDatastoreAdminV1EntityFilter } from "./googledatastoreadminv1entityfilter";
/**
 * The request for google.datastore.admin.v1.DatastoreAdmin.ExportEntities.
**/
export declare class GoogleDatastoreAdminV1ExportEntitiesRequest extends SpeakeasyBase {
    entityFilter?: GoogleDatastoreAdminV1EntityFilter;
    labels?: Map<string, string>;
    outputUrlPrefix?: string;
}
