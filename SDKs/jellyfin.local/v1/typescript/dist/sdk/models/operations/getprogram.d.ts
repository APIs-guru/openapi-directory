import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProgramPathParams extends SpeakeasyBase {
    programId: string;
}
export declare class GetProgramQueryParams extends SpeakeasyBase {
    userId?: string;
}
export declare class GetProgramSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetProgramRequest extends SpeakeasyBase {
    pathParams: GetProgramPathParams;
    queryParams: GetProgramQueryParams;
    security: GetProgramSecurity;
}
export declare class GetProgramResponse extends SpeakeasyBase {
    baseItemDto?: shared.BaseItemDto;
    contentType: string;
    statusCode: number;
}
