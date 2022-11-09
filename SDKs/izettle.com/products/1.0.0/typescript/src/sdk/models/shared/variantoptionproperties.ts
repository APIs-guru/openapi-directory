import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VariantOptionProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}
