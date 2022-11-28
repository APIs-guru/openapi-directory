import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssessmentGroupRequired extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}
