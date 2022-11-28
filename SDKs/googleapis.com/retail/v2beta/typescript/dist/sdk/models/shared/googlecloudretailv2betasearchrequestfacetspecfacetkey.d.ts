import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaInterval } from "./googlecloudretailv2betainterval";
/**
 * Specifies how a facet is computed.
**/
export declare class GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey extends SpeakeasyBase {
    caseInsensitive?: boolean;
    contains?: string[];
    intervals?: GoogleCloudRetailV2betaInterval[];
    key?: string;
    orderBy?: string;
    prefixes?: string[];
    query?: string;
    restrictedValues?: string[];
    returnMinMax?: boolean;
}
