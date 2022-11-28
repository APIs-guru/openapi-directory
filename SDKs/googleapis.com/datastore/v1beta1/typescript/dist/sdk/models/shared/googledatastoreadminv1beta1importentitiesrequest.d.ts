import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleDatastoreAdminV1beta1EntityFilter } from "./googledatastoreadminv1beta1entityfilter";
/**
 * The request for google.datastore.admin.v1beta1.DatastoreAdmin.ImportEntities.
**/
export declare class GoogleDatastoreAdminV1beta1ImportEntitiesRequest extends SpeakeasyBase {
    entityFilter?: GoogleDatastoreAdminV1beta1EntityFilter;
    inputUrl?: string;
    labels?: Map<string, string>;
}
