import { SpeakeasyBase } from "../../../internal/utils";
import { Company } from "./company";
import { ResponseMetadata } from "./responsemetadata";
/**
 * The List companies response object.
**/
export declare class ListCompaniesResponse extends SpeakeasyBase {
    companies?: Company[];
    metadata?: ResponseMetadata;
    nextPageToken?: string;
}
