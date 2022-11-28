import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VersionOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=spacy" })
  spacy: string;
}
