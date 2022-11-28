import { SpeakeasyBase } from "../../../internal/utils";
import { DebugOptions } from "./debugoptions";
import { Schema } from "./schema";
export declare class UpdateSchemaRequest extends SpeakeasyBase {
    debugOptions?: DebugOptions;
    schema?: Schema;
    validateOnly?: boolean;
}
