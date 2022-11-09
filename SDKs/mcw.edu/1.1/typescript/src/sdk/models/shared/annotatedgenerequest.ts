import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AnnotatedGeneRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=accId" })
  accId?: string;

  @Metadata({ data: "json, name=evidenceCodes" })
  evidenceCodes?: string[];

  @Metadata({ data: "json, name=speciesTypeKeys" })
  speciesTypeKeys?: number[];
}
