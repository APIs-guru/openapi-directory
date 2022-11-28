import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2Interval } from "./googlecloudretailv2interval";
/**
 * Specifies how a facet is computed.
**/
export declare class GoogleCloudRetailV2SearchRequestFacetSpecFacetKey extends SpeakeasyBase {
    caseInsensitive?: boolean;
    contains?: string[];
    intervals?: GoogleCloudRetailV2Interval[];
    key?: string;
    orderBy?: string;
    prefixes?: string[];
    query?: string;
    restrictedValues?: string[];
    returnMinMax?: boolean;
}
