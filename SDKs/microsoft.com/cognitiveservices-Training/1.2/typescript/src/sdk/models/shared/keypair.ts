import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class KeyPair extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PrimaryKey" })
  primaryKey?: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryKey" })
  secondaryKey?: string;
}
