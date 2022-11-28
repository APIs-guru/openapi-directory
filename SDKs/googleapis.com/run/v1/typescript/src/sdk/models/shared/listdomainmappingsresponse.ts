import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainMapping } from "./domainmapping";
import { ListMeta } from "./listmeta";



// ListDomainMappingsResponse
/** 
 * ListDomainMappingsResponse is a list of DomainMapping resources.
**/
export class ListDomainMappingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: DomainMapping })
  items?: DomainMapping[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ListMeta;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
