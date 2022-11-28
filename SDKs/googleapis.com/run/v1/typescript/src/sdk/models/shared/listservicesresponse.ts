import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Service } from "./service";
import { ListMeta } from "./listmeta";



// ListServicesResponse
/** 
 * A list of Service resources.
**/
export class ListServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: Service })
  items?: Service[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ListMeta;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
