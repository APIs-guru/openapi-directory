import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetApplicationPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetApplicationRequest extends SpeakeasyBase {
    pathParams: GetApplicationPathParams;
}
export declare class GetApplicationResponse extends SpeakeasyBase {
    applicationResponse?: any;
    contentType: string;
    statusCode: number;
    getApplication401ApplicationJsonAny?: any;
    getApplication404ApplicationJsonAny?: any;
    getApplication405ApplicationJsonAny?: any;
    getApplication406ApplicationJsonAny?: any;
}
