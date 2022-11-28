import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateQueryJobQueryParams extends SpeakeasyBase {
    language: string;
    projectId?: number[];
    projectsList?: string;
}
export declare class CreateQueryJobSecurity extends SpeakeasyBase {
    accessToken: shared.SchemeAccessToken;
}
export declare class CreateQueryJobRequest extends SpeakeasyBase {
    queryParams: CreateQueryJobQueryParams;
    request: string;
    security: CreateQueryJobSecurity;
}
export declare class CreateQueryJobResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    operation?: shared.Operation;
}
