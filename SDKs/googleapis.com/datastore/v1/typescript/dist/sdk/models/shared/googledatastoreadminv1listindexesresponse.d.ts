import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleDatastoreAdminV1Index } from "./googledatastoreadminv1index";
/**
 * The response for google.datastore.admin.v1.DatastoreAdmin.ListIndexes.
**/
export declare class GoogleDatastoreAdminV1ListIndexesResponse extends SpeakeasyBase {
    indexes?: GoogleDatastoreAdminV1Index[];
    nextPageToken?: string;
}
