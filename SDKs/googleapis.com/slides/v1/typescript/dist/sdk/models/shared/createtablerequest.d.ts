import { SpeakeasyBase } from "../../../internal/utils";
import { PageElementProperties } from "./pageelementproperties";
/**
 * Creates a new table.
**/
export declare class CreateTableRequest extends SpeakeasyBase {
    columns?: number;
    elementProperties?: PageElementProperties;
    objectId?: string;
    rows?: number;
}
