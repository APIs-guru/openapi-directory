import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetConnectionManager3PathParams extends SpeakeasyBase {
    serverId: string;
}
export declare class GetConnectionManager3Request extends SpeakeasyBase {
    pathParams: GetConnectionManager3PathParams;
}
export declare class GetConnectionManager3Response extends SpeakeasyBase {
    contentType: string;
    getConnectionManager3200TextXmlBinaryString?: Uint8Array;
    statusCode: number;
}
