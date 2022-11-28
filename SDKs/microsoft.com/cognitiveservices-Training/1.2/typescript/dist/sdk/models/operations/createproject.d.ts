import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateProjectQueryParams extends SpeakeasyBase {
    description?: string;
    domainId?: string;
    name: string;
}
export declare class CreateProjectHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class CreateProjectRequest extends SpeakeasyBase {
    queryParams: CreateProjectQueryParams;
    headers: CreateProjectHeaders;
}
export declare class CreateProjectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    project?: shared.Project;
    statusCode: number;
}
