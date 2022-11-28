import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A JWT verifier used only for the current service descriptor
**/
export declare class LocalJwtVerifier extends SpeakeasyBase {
    algoSettings: any;
    enabled: boolean;
    source: any;
    strategy: any;
    strict: boolean;
    type: string;
}
