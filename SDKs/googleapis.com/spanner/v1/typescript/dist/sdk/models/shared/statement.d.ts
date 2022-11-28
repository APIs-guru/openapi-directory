import { SpeakeasyBase } from "../../../internal/utils";
import { Type } from "./type";
/**
 * A single DML statement.
**/
export declare class Statement extends SpeakeasyBase {
    paramTypes?: Map<string, Type>;
    params?: Map<string, any>;
    sql?: string;
}
