import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImageUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url, form, name=url;" })
  url?: string;
}
