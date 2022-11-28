import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetConnectionManager2PathParams extends SpeakeasyBase {
    serverId: string;
}
export declare class GetConnectionManager2Request extends SpeakeasyBase {
    pathParams: GetConnectionManager2PathParams;
}
export declare class GetConnectionManager2Response extends SpeakeasyBase {
    contentType: string;
    getConnectionManager2200TextXmlBinaryString?: Uint8Array;
    statusCode: number;
}
