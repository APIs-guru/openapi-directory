import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Service } from "./service";
import { ListMeta } from "./listmeta";


// ListServicesResponse
/** 
 * A list of Service resources.
**/
export class ListServicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @Metadata({ data: "json, name=items", elemType: shared.Service })
  items?: Service[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: ListMeta;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
