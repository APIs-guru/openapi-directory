import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LearnerProgressResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=completion" })
  completion?: string;

  @Metadata({ data: "json, name=courseId" })
  courseId?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=lastLoggedInAt" })
  lastLoggedInAt?: Date;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=personId" })
  personId?: string;
}
