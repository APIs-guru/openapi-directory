import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AquiferSerializerBasic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aquifer_id" })
  aquiferId?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;
}
