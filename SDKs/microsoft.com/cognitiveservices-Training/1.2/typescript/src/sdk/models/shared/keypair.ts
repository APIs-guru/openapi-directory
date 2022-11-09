import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class KeyPair extends SpeakeasyBase {
  @Metadata({ data: "json, name=PrimaryKey" })
  primaryKey?: string;

  @Metadata({ data: "json, name=SecondaryKey" })
  secondaryKey?: string;
}
