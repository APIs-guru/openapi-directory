import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GenerateConsistencyTokenResponse
/** 
 * Response message for google.bigtable.admin.v2.BigtableTableAdmin.GenerateConsistencyToken
**/
export class GenerateConsistencyTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=consistencyToken" })
  consistencyToken?: string;
}
