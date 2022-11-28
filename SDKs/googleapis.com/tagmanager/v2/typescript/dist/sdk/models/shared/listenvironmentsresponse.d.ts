import { SpeakeasyBase } from "../../../internal/utils";
import { Environment } from "./environment";
/**
 * List Environments Response.
**/
export declare class ListEnvironmentsResponse extends SpeakeasyBase {
    environment?: Environment[];
    nextPageToken?: string;
}
