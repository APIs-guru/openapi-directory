import { SpeakeasyBase } from "../../../internal/utils";
import { ProductStatus } from "./productstatus";
export declare class ProductstatusesListResponse extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    resources?: ProductStatus[];
}
