import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2CatalogAttributeInput } from "./googlecloudretailv2catalogattribute";
/**
 * Request for CatalogService.ReplaceCatalogAttribute method.
**/
export declare class GoogleCloudRetailV2ReplaceCatalogAttributeRequestInput extends SpeakeasyBase {
    catalogAttribute?: GoogleCloudRetailV2CatalogAttributeInput;
    updateMask?: string;
}
