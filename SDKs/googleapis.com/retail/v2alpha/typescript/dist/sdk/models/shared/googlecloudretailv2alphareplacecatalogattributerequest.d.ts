import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaCatalogAttributeInput } from "./googlecloudretailv2alphacatalogattribute";
/**
 * Request for CatalogService.ReplaceCatalogAttribute method.
**/
export declare class GoogleCloudRetailV2alphaReplaceCatalogAttributeRequestInput extends SpeakeasyBase {
    catalogAttribute?: GoogleCloudRetailV2alphaCatalogAttributeInput;
    updateMask?: string;
}
