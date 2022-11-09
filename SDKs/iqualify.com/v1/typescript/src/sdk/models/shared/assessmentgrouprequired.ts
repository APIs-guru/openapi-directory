import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssessmentGroupRequired extends SpeakeasyBase {
  @Metadata({ data: "json, name=title" })
  title: string;
}
