import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OAuth brand data. NOTE: Only contains a portion of the data that describes a brand.
**/
export declare class BrandInput extends SpeakeasyBase {
    applicationTitle?: string;
    supportEmail?: string;
}
/**
 * OAuth brand data. NOTE: Only contains a portion of the data that describes a brand.
**/
export declare class Brand extends SpeakeasyBase {
    applicationTitle?: string;
    name?: string;
    orgInternalOnly?: boolean;
    supportEmail?: string;
}
