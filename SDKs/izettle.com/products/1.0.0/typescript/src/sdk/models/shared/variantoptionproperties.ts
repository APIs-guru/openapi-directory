import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VariantOptionProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
