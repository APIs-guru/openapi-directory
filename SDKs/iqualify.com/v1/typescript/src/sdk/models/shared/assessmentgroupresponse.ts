import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssessmentGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
