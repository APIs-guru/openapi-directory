import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AltName extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=note" })
  note: string;
}
