import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ErskineMayFootnote extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=number" })
  number?: number;
}
