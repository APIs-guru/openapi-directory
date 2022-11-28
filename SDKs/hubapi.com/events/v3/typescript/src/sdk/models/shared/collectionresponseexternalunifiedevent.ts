import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Paging } from "./paging";
import { ExternalUnifiedEvent } from "./externalunifiedevent";



export class CollectionResponseExternalUnifiedEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=paging" })
  paging?: Paging;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ExternalUnifiedEvent })
  results: ExternalUnifiedEvent[];
}
