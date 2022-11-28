import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostDeveloperAccountsDeveloperAccountIdPathParams extends SpeakeasyBase {
    developerAccountId: string;
}
export declare class PostDeveloperAccountsDeveloperAccountIdQueryParams extends SpeakeasyBase {
    customData?: string;
    developerId: string;
    email?: string;
    name?: string;
}
export declare class PostDeveloperAccountsDeveloperAccountIdRequest extends SpeakeasyBase {
    pathParams: PostDeveloperAccountsDeveloperAccountIdPathParams;
    queryParams: PostDeveloperAccountsDeveloperAccountIdQueryParams;
}
export declare class PostDeveloperAccountsDeveloperAccountIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
