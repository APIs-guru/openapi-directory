import { SpeakeasyBase } from "../../../internal/utils";
export declare class WritableCircuitInput extends SpeakeasyBase {
    cid: string;
    comments?: string;
    commitRate?: number;
    customFields?: Map<string, any>;
    description?: string;
    installDate?: Date;
    provider: number;
    status?: number;
    tags?: string[];
    tenant?: number;
    type: number;
}
