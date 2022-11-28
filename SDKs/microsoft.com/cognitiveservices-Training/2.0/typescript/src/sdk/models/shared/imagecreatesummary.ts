import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageCreateResult } from "./imagecreateresult";



export class ImageCreateSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=images", elemType: ImageCreateResult })
  images?: ImageCreateResult[];

  @SpeakeasyMetadata({ data: "json, name=isBatchSuccessful" })
  isBatchSuccessful?: boolean;
}
