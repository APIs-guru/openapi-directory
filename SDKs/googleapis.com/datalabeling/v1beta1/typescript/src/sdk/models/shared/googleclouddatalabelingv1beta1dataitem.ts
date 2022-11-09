import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatalabelingV1beta1ImagePayload } from "./googleclouddatalabelingv1beta1imagepayload";
import { GoogleCloudDatalabelingV1beta1TextPayload } from "./googleclouddatalabelingv1beta1textpayload";
import { GoogleCloudDatalabelingV1beta1VideoPayload } from "./googleclouddatalabelingv1beta1videopayload";


// GoogleCloudDatalabelingV1beta1DataItem
/** 
 * DataItem is a piece of data, without annotation. For example, an image.
**/
export class GoogleCloudDatalabelingV1beta1DataItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=imagePayload" })
  imagePayload?: GoogleCloudDatalabelingV1beta1ImagePayload;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=textPayload" })
  textPayload?: GoogleCloudDatalabelingV1beta1TextPayload;

  @Metadata({ data: "json, name=videoPayload" })
  videoPayload?: GoogleCloudDatalabelingV1beta1VideoPayload;
}
