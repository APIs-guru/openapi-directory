import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AltIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=identifier" })
  identifier: string;

  @Metadata({ data: "json, name=scheme" })
  scheme: string;
}
