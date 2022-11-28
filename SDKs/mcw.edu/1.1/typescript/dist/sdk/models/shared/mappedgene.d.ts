import { SpeakeasyBase } from "../../../internal/utils";
import { Gene } from "./gene";
export declare class MappedGene extends SpeakeasyBase {
    chromosome?: string;
    gene?: Gene;
    mapKey?: number;
    start?: number;
    stop?: number;
    strand?: string;
}
