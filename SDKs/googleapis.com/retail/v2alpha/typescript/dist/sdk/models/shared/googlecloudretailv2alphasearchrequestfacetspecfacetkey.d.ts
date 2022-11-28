import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaInterval } from "./googlecloudretailv2alphainterval";
/**
 * Specifies how a facet is computed.
**/
export declare class GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey extends SpeakeasyBase {
    caseInsensitive?: boolean;
    contains?: string[];
    intervals?: GoogleCloudRetailV2alphaInterval[];
    key?: string;
    orderBy?: string;
    prefixes?: string[];
    query?: string;
    restrictedValues?: string[];
    returnMinMax?: boolean;
}
