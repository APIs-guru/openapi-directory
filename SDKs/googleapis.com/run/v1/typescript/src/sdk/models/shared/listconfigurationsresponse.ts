import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Configuration } from "./configuration";
import { ListMeta } from "./listmeta";


// ListConfigurationsResponse
/** 
 * ListConfigurationsResponse is a list of Configuration resources.
**/
export class ListConfigurationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @Metadata({ data: "json, name=items", elemType: shared.Configuration })
  items?: Configuration[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: ListMeta;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
