import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PatchDevelopersDeveloperIdPathParams extends SpeakeasyBase {
    developerId: string;
}
export declare class PatchDevelopersDeveloperIdQueryParams extends SpeakeasyBase {
    customData?: string;
    email?: string;
    name?: string;
    type?: string;
    username?: string;
}
export declare class PatchDevelopersDeveloperIdRequest extends SpeakeasyBase {
    pathParams: PatchDevelopersDeveloperIdPathParams;
    queryParams: PatchDevelopersDeveloperIdQueryParams;
}
export declare class PatchDevelopersDeveloperIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
