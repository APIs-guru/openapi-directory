import { SpeakeasyBase } from "../../../internal/utils";
import { SdfConfig } from "./sdfconfig";
/**
 * Structured Data Files (SDF) settings of an advertiser.
**/
export declare class AdvertiserSdfConfig extends SpeakeasyBase {
    overridePartnerSdfConfig?: boolean;
    sdfConfig?: SdfConfig;
}
