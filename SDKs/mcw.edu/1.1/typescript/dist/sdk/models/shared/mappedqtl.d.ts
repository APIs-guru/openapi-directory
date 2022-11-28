import { SpeakeasyBase } from "../../../internal/utils";
import { Qtl } from "./qtl";
export declare class MappedQtl extends SpeakeasyBase {
    chromosome?: string;
    mapKey?: number;
    qtl?: Qtl;
    start?: number;
    stop?: number;
    strand?: string;
}
