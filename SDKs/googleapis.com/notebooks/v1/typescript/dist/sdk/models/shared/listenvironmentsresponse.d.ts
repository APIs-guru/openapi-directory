import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Environment } from "./environment";
/**
 * Response for listing environments.
**/
export declare class ListEnvironmentsResponse extends SpeakeasyBase {
    environments?: Environment[];
    nextPageToken?: string;
    unreachable?: string[];
}
