import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1ProductKeyValue } from "./googlecloudvisionv1p1beta1productkeyvalue";



// GoogleCloudVisionV1p1beta1Product
/** 
 * A Product contains ReferenceImages.
**/
export class GoogleCloudVisionV1p1beta1Product extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=productCategory" })
  productCategory?: string;

  @SpeakeasyMetadata({ data: "json, name=productLabels", elemType: GoogleCloudVisionV1p1beta1ProductKeyValue })
  productLabels?: GoogleCloudVisionV1p1beta1ProductKeyValue[];
}
