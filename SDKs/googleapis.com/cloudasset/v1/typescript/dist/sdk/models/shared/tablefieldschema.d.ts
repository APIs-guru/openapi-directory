import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A field in TableSchema.
**/
export declare class TableFieldSchema extends SpeakeasyBase {
    field?: string;
    fields?: TableFieldSchema[];
    mode?: string;
    type?: string;
}
