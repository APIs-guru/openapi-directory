import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AltIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier: string;

  @SpeakeasyMetadata({ data: "json, name=scheme" })
  scheme: string;
}
