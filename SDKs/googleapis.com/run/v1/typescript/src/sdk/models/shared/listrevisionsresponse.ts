import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Revision } from "./revision";
import { ListMeta } from "./listmeta";



// ListRevisionsResponse
/** 
 * ListRevisionsResponse is a list of Revision resources.
**/
export class ListRevisionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: Revision })
  items?: Revision[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ListMeta;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
