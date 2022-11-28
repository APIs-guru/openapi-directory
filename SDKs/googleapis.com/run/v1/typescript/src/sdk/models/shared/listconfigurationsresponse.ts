import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Configuration } from "./configuration";
import { ListMeta } from "./listmeta";



// ListConfigurationsResponse
/** 
 * ListConfigurationsResponse is a list of Configuration resources.
**/
export class ListConfigurationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: Configuration })
  items?: Configuration[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ListMeta;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
