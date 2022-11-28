import { SpeakeasyBase } from "../../../internal/utils";
import { RuntimeEntitySchema } from "./runtimeentityschema";
/**
 * Response message for ConnectorsService.ListRuntimeEntitySchemas.
**/
export declare class ListRuntimeEntitySchemasResponse extends SpeakeasyBase {
    nextPageToken?: string;
    runtimeEntitySchemas?: RuntimeEntitySchema[];
}
