import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1ImagePayload } from "./googleclouddatalabelingv1beta1imagepayload";
import { GoogleCloudDatalabelingV1beta1TextPayload } from "./googleclouddatalabelingv1beta1textpayload";
import { GoogleCloudDatalabelingV1beta1VideoPayload } from "./googleclouddatalabelingv1beta1videopayload";



// GoogleCloudDatalabelingV1beta1DataItem
/** 
 * DataItem is a piece of data, without annotation. For example, an image.
**/
export class GoogleCloudDatalabelingV1beta1DataItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imagePayload" })
  imagePayload?: GoogleCloudDatalabelingV1beta1ImagePayload;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=textPayload" })
  textPayload?: GoogleCloudDatalabelingV1beta1TextPayload;

  @SpeakeasyMetadata({ data: "json, name=videoPayload" })
  videoPayload?: GoogleCloudDatalabelingV1beta1VideoPayload;
}
