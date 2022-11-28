import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImageUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Url, form, name=Url;" })
  url?: string;
}
