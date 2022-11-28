import { SpeakeasyBase } from "../../../internal/utils";
import { RuntimeActionSchema } from "./runtimeactionschema";
/**
 * Response message for ConnectorsService.ListRuntimeActionSchemas.
**/
export declare class ListRuntimeActionSchemasResponse extends SpeakeasyBase {
    nextPageToken?: string;
    runtimeActionSchemas?: RuntimeActionSchema[];
}
