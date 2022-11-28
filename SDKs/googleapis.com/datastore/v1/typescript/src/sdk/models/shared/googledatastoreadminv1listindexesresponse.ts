import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleDatastoreAdminV1Index } from "./googledatastoreadminv1index";



// GoogleDatastoreAdminV1ListIndexesResponse
/** 
 * The response for google.datastore.admin.v1.DatastoreAdmin.ListIndexes.
**/
export class GoogleDatastoreAdminV1ListIndexesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=indexes", elemType: GoogleDatastoreAdminV1Index })
  indexes?: GoogleDatastoreAdminV1Index[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
