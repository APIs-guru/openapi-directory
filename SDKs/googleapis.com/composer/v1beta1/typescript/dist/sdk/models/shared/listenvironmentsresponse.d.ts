import { SpeakeasyBase } from "../../../internal/utils";
import { Environment } from "./environment";
/**
 * The environments in a project and location.
**/
export declare class ListEnvironmentsResponse extends SpeakeasyBase {
    environments?: Environment[];
    nextPageToken?: string;
}
