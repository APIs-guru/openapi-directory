import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AnnotatedGeneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accId" })
  accId?: string;

  @SpeakeasyMetadata({ data: "json, name=evidenceCodes" })
  evidenceCodes?: string[];

  @SpeakeasyMetadata({ data: "json, name=speciesTypeKeys" })
  speciesTypeKeys?: number[];
}
