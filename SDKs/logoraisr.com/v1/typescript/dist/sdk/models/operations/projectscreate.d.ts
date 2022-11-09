import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProjectsCreateRequest extends SpeakeasyBase {
    request: shared.ProjectRequest;
}
export declare class ProjectsCreateResponse extends SpeakeasyBase {
    contentType: string;
    projectResponse?: shared.ProjectResponse;
    statusCode: number;
}
