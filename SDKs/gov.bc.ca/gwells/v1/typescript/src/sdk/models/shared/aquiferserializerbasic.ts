import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AquiferSerializerBasic extends SpeakeasyBase {
  @Metadata({ data: "json, name=aquifer_id" })
  aquiferId?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;
}
