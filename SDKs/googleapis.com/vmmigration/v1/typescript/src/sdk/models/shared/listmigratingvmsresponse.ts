import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MigratingVm } from "./migratingvm";


// ListMigratingVmsResponse
/** 
 * Response message for 'ListMigratingVms' request.
**/
export class ListMigratingVmsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=migratingVms", elemType: shared.MigratingVm })
  migratingVms?: MigratingVm[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
