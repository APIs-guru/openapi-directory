import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProductAspect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aspectName" })
  aspectName?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationName" })
  destinationName?: string;

  @SpeakeasyMetadata({ data: "json, name=intention" })
  intention?: string;
}
