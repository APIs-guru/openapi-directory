import { SpeakeasyBase } from "../../../internal/utils";
import { CompositeType } from "./compositetype";
/**
 * A response that returns all Composite Types supported by Deployment Manager
**/
export declare class CompositeTypesListResponse extends SpeakeasyBase {
    compositeTypes?: CompositeType[];
    nextPageToken?: string;
}
