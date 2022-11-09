import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProductAspect extends SpeakeasyBase {
  @Metadata({ data: "json, name=aspectName" })
  aspectName?: string;

  @Metadata({ data: "json, name=destinationName" })
  destinationName?: string;

  @Metadata({ data: "json, name=intention" })
  intention?: string;
}
