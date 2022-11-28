import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LearnerProgressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completion" })
  completion?: string;

  @SpeakeasyMetadata({ data: "json, name=courseId" })
  courseId?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastLoggedInAt" })
  lastLoggedInAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=personId" })
  personId?: string;
}
