import { SpeakeasyBase } from "../../../internal/utils";
export declare class SessionControllerGetSessionInfoPathParams extends SpeakeasyBase {
    shortName: string;
}
export declare class SessionControllerGetSessionInfoQueryParams extends SpeakeasyBase {
    token: string;
}
export declare class SessionControllerGetSessionInfoRequest extends SpeakeasyBase {
    pathParams: SessionControllerGetSessionInfoPathParams;
    queryParams: SessionControllerGetSessionInfoQueryParams;
}
export declare class SessionControllerGetSessionInfoResponse extends SpeakeasyBase {
    contentType: string;
    sessionControllerGetSessionInfo200ApplicationJsonString?: string;
    sessionControllerGetSessionInfo200ApplicationXmlString?: string;
    sessionControllerGetSessionInfo200TextJsonString?: string;
    sessionControllerGetSessionInfo200TextXmlString?: string;
    statusCode: number;
}
