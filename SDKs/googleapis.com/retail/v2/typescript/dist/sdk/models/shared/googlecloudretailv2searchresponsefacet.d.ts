import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2SearchResponseFacetFacetValue } from "./googlecloudretailv2searchresponsefacetfacetvalue";
/**
 * A facet result.
**/
export declare class GoogleCloudRetailV2SearchResponseFacet extends SpeakeasyBase {
    dynamicFacet?: boolean;
    key?: string;
    values?: GoogleCloudRetailV2SearchResponseFacetFacetValue[];
}
