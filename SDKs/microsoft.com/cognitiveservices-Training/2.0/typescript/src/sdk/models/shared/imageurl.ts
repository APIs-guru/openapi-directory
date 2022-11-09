import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ImageUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=url, form, name=url;" })
  url?: string;
}
