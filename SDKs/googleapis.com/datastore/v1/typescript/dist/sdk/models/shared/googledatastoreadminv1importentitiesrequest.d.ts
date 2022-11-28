import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleDatastoreAdminV1EntityFilter } from "./googledatastoreadminv1entityfilter";
/**
 * The request for google.datastore.admin.v1.DatastoreAdmin.ImportEntities.
**/
export declare class GoogleDatastoreAdminV1ImportEntitiesRequest extends SpeakeasyBase {
    entityFilter?: GoogleDatastoreAdminV1EntityFilter;
    inputUrl?: string;
    labels?: Map<string, string>;
}
