import { SpeakeasyBase } from "../../../internal/utils";
export declare class SessionControllerLogoutPathParams extends SpeakeasyBase {
    shortName: string;
}
export declare class SessionControllerLogoutQueryParams extends SpeakeasyBase {
    token: string;
}
export declare class SessionControllerLogoutRequest extends SpeakeasyBase {
    pathParams: SessionControllerLogoutPathParams;
    queryParams: SessionControllerLogoutQueryParams;
}
export declare class SessionControllerLogoutResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
