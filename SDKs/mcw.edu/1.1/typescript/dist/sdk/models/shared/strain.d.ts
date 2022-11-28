import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
export declare class Strain extends SpeakeasyBase {
    backgroundStrainRgdId?: number;
    chrAltered?: string;
    color?: string;
    geneticStatus?: string;
    genetics?: string;
    imageUrl?: string;
    inbredGen?: string;
    key?: number;
    lastStatus?: string;
    lastStatusObject?: Status;
    modificationMethod?: string;
    name?: string;
    notes?: string;
    origin?: string;
    researchUse?: string;
    rgdId?: number;
    source?: string;
    speciesTypeKey?: number;
    statusLog?: Status[];
    strain?: string;
    strainTypeName?: string;
    substrain?: string;
    symbol?: string;
}
