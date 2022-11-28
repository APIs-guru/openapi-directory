import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Execution } from "./execution";
import { ListMeta } from "./listmeta";



// ListExecutionsResponse
/** 
 * ListExecutionsResponse is a list of Executions resources.
**/
export class ListExecutionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: Execution })
  items?: Execution[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ListMeta;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
