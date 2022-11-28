import { SpeakeasyBase } from "../../../internal/utils";
export declare class PatchDeveloperAccountsDeveloperAccountIdPathParams extends SpeakeasyBase {
    developerAccountId: string;
}
export declare class PatchDeveloperAccountsDeveloperAccountIdQueryParams extends SpeakeasyBase {
    customData?: string;
    developerId: string;
    email?: string;
    name?: string;
}
export declare class PatchDeveloperAccountsDeveloperAccountIdRequest extends SpeakeasyBase {
    pathParams: PatchDeveloperAccountsDeveloperAccountIdPathParams;
    queryParams: PatchDeveloperAccountsDeveloperAccountIdQueryParams;
}
export declare class PatchDeveloperAccountsDeveloperAccountIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
