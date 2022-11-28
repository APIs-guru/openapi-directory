import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaCatalogAttributeInput } from "./googlecloudretailv2betacatalogattribute";
/**
 * Request for CatalogService.ReplaceCatalogAttribute method.
**/
export declare class GoogleCloudRetailV2betaReplaceCatalogAttributeRequestInput extends SpeakeasyBase {
    catalogAttribute?: GoogleCloudRetailV2betaCatalogAttributeInput;
    updateMask?: string;
}
