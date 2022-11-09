import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Schema } from "./schema";
/**
 * Response for the `ListSchemas` method.
**/
export declare class ListSchemasResponse extends SpeakeasyBase {
    nextPageToken?: string;
    schemas?: Schema[];
}
