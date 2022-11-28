import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MigratingVm } from "./migratingvm";



// ListMigratingVmsResponse
/** 
 * Response message for 'ListMigratingVms' request.
**/
export class ListMigratingVmsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=migratingVms", elemType: MigratingVm })
  migratingVms?: MigratingVm[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
