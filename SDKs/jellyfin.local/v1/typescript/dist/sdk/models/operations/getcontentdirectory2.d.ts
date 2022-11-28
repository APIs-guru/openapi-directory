import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetContentDirectory2PathParams extends SpeakeasyBase {
    serverId: string;
}
export declare class GetContentDirectory2Request extends SpeakeasyBase {
    pathParams: GetContentDirectory2PathParams;
}
export declare class GetContentDirectory2Response extends SpeakeasyBase {
    contentType: string;
    getContentDirectory2200TextXmlBinaryString?: Uint8Array;
    statusCode: number;
}
