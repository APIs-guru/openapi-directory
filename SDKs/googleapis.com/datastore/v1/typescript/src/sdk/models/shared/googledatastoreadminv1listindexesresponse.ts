import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleDatastoreAdminV1Index } from "./googledatastoreadminv1index";


// GoogleDatastoreAdminV1ListIndexesResponse
/** 
 * The response for google.datastore.admin.v1.DatastoreAdmin.ListIndexes.
**/
export class GoogleDatastoreAdminV1ListIndexesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=indexes", elemType: shared.GoogleDatastoreAdminV1Index })
  indexes?: GoogleDatastoreAdminV1Index[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
