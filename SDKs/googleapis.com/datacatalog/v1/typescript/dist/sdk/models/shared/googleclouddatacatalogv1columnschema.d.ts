import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A column within a schema. Columns can be nested inside other columns.
**/
export declare class GoogleCloudDatacatalogV1ColumnSchema extends SpeakeasyBase {
    column?: string;
    description?: string;
    gcRule?: string;
    mode?: string;
    subcolumns?: GoogleCloudDatacatalogV1ColumnSchema[];
    type?: string;
}
