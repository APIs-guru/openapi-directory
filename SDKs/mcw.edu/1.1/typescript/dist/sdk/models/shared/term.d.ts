import { SpeakeasyBase } from "../../../internal/utils";
import { TermXRef } from "./termxref";
export declare class Term extends SpeakeasyBase {
    accId?: string;
    comment?: string;
    createdBy?: string;
    creationDate?: Date;
    definition?: string;
    modificationDate?: Date;
    obsolete?: number;
    ontologyId?: string;
    term?: string;
    xrefs?: TermXRef[];
}
