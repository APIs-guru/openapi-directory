import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetConnectionManagerPathParams extends SpeakeasyBase {
    serverId: string;
}
export declare class GetConnectionManagerRequest extends SpeakeasyBase {
    pathParams: GetConnectionManagerPathParams;
}
export declare class GetConnectionManagerResponse extends SpeakeasyBase {
    contentType: string;
    getConnectionManager200TextXmlBinaryString?: Uint8Array;
    statusCode: number;
}
