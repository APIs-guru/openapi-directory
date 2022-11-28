import { SpeakeasyBase } from "../../../internal/utils";
import { Type } from "./type";
/**
 * A response that returns all Types supported by Deployment Manager
**/
export declare class TypesListResponse extends SpeakeasyBase {
    nextPageToken?: string;
    types?: Type[];
}
