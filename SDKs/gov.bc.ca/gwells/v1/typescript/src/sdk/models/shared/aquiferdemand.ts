import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AquiferDemand extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;
}
