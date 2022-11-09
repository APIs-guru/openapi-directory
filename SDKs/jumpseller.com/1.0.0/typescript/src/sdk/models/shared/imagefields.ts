import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ImageFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=position" })
  position?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
