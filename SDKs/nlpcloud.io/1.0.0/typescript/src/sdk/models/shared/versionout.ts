import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VersionOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=spacy" })
  spacy: string;
}
