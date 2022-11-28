import { SpeakeasyBase } from "../../../internal/utils";
import { Paging } from "./paging";
import { ExternalUnifiedEvent } from "./externalunifiedevent";
export declare class CollectionResponseExternalUnifiedEvent extends SpeakeasyBase {
    paging?: Paging;
    results: ExternalUnifiedEvent[];
}
