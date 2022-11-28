import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCoursesResponse extends SpeakeasyBase {
    contentType: string;
    courseResponses?: shared.CourseResponse[];
    error?: shared.Error;
    statusCode: number;
}
