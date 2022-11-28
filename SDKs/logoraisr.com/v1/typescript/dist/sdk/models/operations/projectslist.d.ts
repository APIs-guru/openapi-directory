import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectsListResponse extends SpeakeasyBase {
    contentType: string;
    project?: shared.Project;
    statusCode: number;
}
