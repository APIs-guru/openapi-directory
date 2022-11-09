import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Paging } from "./paging";
import { ExternalUnifiedEvent } from "./externalunifiedevent";


export class CollectionResponseExternalUnifiedEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=paging" })
  paging?: Paging;

  @Metadata({ data: "json, name=results", elemType: shared.ExternalUnifiedEvent })
  results: ExternalUnifiedEvent[];
}
