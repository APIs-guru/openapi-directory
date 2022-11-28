import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageCreateResult } from "./imagecreateresult";



export class ImageCreateSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Images", elemType: ImageCreateResult })
  images?: ImageCreateResult[];

  @SpeakeasyMetadata({ data: "json, name=IsBatchSuccessful" })
  isBatchSuccessful?: boolean;
}
