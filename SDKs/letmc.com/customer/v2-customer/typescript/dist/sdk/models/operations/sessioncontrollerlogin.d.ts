import { SpeakeasyBase } from "../../../internal/utils";
export declare class SessionControllerLoginPathParams extends SpeakeasyBase {
    shortName: string;
}
export declare class SessionControllerLoginQueryParams extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class SessionControllerLoginRequest extends SpeakeasyBase {
    pathParams: SessionControllerLoginPathParams;
    queryParams: SessionControllerLoginQueryParams;
}
export declare class SessionControllerLoginResponse extends SpeakeasyBase {
    contentType: string;
    sessionControllerLogin200ApplicationJsonString?: string;
    sessionControllerLogin200ApplicationXmlString?: string;
    sessionControllerLogin200TextJsonString?: string;
    sessionControllerLogin200TextXmlString?: string;
    statusCode: number;
}
