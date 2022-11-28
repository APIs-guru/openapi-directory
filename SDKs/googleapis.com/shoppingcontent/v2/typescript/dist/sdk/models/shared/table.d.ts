import { SpeakeasyBase } from "../../../internal/utils";
import { Headers } from "./headers";
import { Row } from "./row";
export declare class Table extends SpeakeasyBase {
    columnHeaders?: Headers;
    name?: string;
    rowHeaders?: Headers;
    rows?: Row[];
}
