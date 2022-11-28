import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Representation of a column within a schema. Columns could be nested inside other columns.
**/
export declare class GoogleCloudDatacatalogV1beta1ColumnSchema extends SpeakeasyBase {
    column?: string;
    description?: string;
    mode?: string;
    subcolumns?: GoogleCloudDatacatalogV1beta1ColumnSchema[];
    type?: string;
}
