import { SpeakeasyBase } from "../../../internal/utils";
export declare class UsersNodesListPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UsersNodesListRequest extends SpeakeasyBase {
    pathParams: UsersNodesListPathParams;
}
export declare class UsersNodesListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
