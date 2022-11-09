import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AnnotationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=evidenceCodes" })
  evidenceCodes?: string[];

  @Metadata({ data: "json, name=ids" })
  ids?: string[];

  @Metadata({ data: "json, name=speciesTypeKeys" })
  speciesTypeKeys?: number[];

  @Metadata({ data: "json, name=termAcc" })
  termAcc?: string;
}
