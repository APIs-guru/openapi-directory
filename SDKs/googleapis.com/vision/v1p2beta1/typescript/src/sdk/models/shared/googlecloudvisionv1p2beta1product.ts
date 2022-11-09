import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVisionV1p2beta1ProductKeyValue } from "./googlecloudvisionv1p2beta1productkeyvalue";


// GoogleCloudVisionV1p2beta1Product
/** 
 * A Product contains ReferenceImages.
**/
export class GoogleCloudVisionV1p2beta1Product extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=productCategory" })
  productCategory?: string;

  @Metadata({ data: "json, name=productLabels", elemType: shared.GoogleCloudVisionV1p2beta1ProductKeyValue })
  productLabels?: GoogleCloudVisionV1p2beta1ProductKeyValue[];
}
