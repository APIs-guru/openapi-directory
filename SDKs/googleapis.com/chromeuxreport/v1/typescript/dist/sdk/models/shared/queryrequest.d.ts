import { SpeakeasyBase } from "../../../internal/utils";
export declare enum QueryRequestFormFactorEnum {
    AllFormFactors = "ALL_FORM_FACTORS",
    Phone = "PHONE",
    Desktop = "DESKTOP",
    Tablet = "TABLET"
}
/**
 * Request payload sent by a physical web client. This request includes all necessary context to load a particular user experience record.
**/
export declare class QueryRequest extends SpeakeasyBase {
    effectiveConnectionType?: string;
    formFactor?: QueryRequestFormFactorEnum;
    metrics?: string[];
    origin?: string;
    url?: string;
}
