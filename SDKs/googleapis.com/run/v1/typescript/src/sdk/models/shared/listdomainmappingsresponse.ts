import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DomainMapping } from "./domainmapping";
import { ListMeta } from "./listmeta";


// ListDomainMappingsResponse
/** 
 * ListDomainMappingsResponse is a list of DomainMapping resources.
**/
export class ListDomainMappingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @Metadata({ data: "json, name=items", elemType: shared.DomainMapping })
  items?: DomainMapping[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: ListMeta;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
