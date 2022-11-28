import { SpeakeasyBase } from "../../../internal/utils";
export declare class Provider extends SpeakeasyBase {
    account?: string;
    adminContact?: string;
    asn?: number;
    circuitCount?: number;
    comments?: string;
    created?: Date;
    customFields?: Map<string, any>;
    id?: number;
    lastUpdated?: Date;
    name: string;
    nocContact?: string;
    portalUrl?: string;
    slug: string;
    tags?: string[];
}
export declare class ProviderInput extends SpeakeasyBase {
    account?: string;
    adminContact?: string;
    asn?: number;
    comments?: string;
    customFields?: Map<string, any>;
    name: string;
    nocContact?: string;
    portalUrl?: string;
    slug: string;
    tags?: string[];
}
