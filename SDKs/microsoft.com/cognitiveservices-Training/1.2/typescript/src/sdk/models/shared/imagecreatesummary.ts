import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImageCreateResult } from "./imagecreateresult";


export class ImageCreateSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=Images", elemType: shared.ImageCreateResult })
  images?: ImageCreateResult[];

  @Metadata({ data: "json, name=IsBatchSuccessful" })
  isBatchSuccessful?: boolean;
}
