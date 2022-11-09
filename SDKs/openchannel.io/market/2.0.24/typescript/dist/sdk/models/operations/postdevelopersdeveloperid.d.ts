import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PostDevelopersDeveloperIdPathParams extends SpeakeasyBase {
    developerId: string;
}
export declare class PostDevelopersDeveloperIdQueryParams extends SpeakeasyBase {
    customData?: string;
    email?: string;
    name?: string;
    type?: string;
    username?: string;
}
export declare class PostDevelopersDeveloperIdRequest extends SpeakeasyBase {
    pathParams: PostDevelopersDeveloperIdPathParams;
    queryParams: PostDevelopersDeveloperIdQueryParams;
}
export declare class PostDevelopersDeveloperIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
