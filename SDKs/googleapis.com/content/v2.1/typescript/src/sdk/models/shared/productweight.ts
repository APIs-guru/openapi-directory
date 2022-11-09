import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProductWeight extends SpeakeasyBase {
  @Metadata({ data: "json, name=unit" })
  unit?: string;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
