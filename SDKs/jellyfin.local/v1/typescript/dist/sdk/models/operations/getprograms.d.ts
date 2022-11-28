import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProgramsRequests extends SpeakeasyBase {
    getProgramsDto?: shared.GetProgramsDto;
    getProgramsDto1?: shared.GetProgramsDto;
    getProgramsDto2?: shared.GetProgramsDto;
}
export declare class GetProgramsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetProgramsRequest extends SpeakeasyBase {
    request?: GetProgramsRequests;
    security: GetProgramsSecurity;
}
export declare class GetProgramsResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
