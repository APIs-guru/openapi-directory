import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class QualityConcern extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=description" })
  description: string;
}
