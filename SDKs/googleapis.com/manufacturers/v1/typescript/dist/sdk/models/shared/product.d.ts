import { SpeakeasyBase } from "../../../internal/utils";
import { Attributes } from "./attributes";
import { DestinationStatus } from "./destinationstatus";
import { Issue } from "./issue";
/**
 * Product data.
**/
export declare class Product extends SpeakeasyBase {
    attributes?: Attributes;
    contentLanguage?: string;
    destinationStatuses?: DestinationStatus[];
    issues?: Issue[];
    name?: string;
    parent?: string;
    productId?: string;
    targetCountry?: string;
}
