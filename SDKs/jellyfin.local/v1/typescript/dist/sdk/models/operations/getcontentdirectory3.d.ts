import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetContentDirectory3PathParams extends SpeakeasyBase {
    serverId: string;
}
export declare class GetContentDirectory3Request extends SpeakeasyBase {
    pathParams: GetContentDirectory3PathParams;
}
export declare class GetContentDirectory3Response extends SpeakeasyBase {
    contentType: string;
    getContentDirectory3200TextXmlBinaryString?: Uint8Array;
    statusCode: number;
}
