import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCoursesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.CourseResponse })
  courseResponses?: shared.CourseResponse[];

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
