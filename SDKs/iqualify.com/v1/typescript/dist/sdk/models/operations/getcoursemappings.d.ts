import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCourseMappingsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    courseMappings?: Map<string, string>;
}
