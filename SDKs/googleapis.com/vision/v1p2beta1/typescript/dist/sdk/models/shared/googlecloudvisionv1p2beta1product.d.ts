import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1ProductKeyValue } from "./googlecloudvisionv1p2beta1productkeyvalue";
/**
 * A Product contains ReferenceImages.
**/
export declare class GoogleCloudVisionV1p2beta1Product extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    name?: string;
    productCategory?: string;
    productLabels?: GoogleCloudVisionV1p2beta1ProductKeyValue[];
}
