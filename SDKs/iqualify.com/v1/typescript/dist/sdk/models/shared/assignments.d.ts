import { SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
export declare class Assignments extends SpeakeasyBase {
    files?: Document[];
    marks?: any[];
    status?: string;
    submittedAt?: Date;
    updatedAt?: Date;
}
