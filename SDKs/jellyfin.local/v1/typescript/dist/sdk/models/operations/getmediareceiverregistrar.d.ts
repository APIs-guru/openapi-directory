import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMediaReceiverRegistrarPathParams extends SpeakeasyBase {
    serverId: string;
}
export declare class GetMediaReceiverRegistrarRequest extends SpeakeasyBase {
    pathParams: GetMediaReceiverRegistrarPathParams;
}
export declare class GetMediaReceiverRegistrarResponse extends SpeakeasyBase {
    contentType: string;
    getMediaReceiverRegistrar200TextXmlBinaryString?: Uint8Array;
    statusCode: number;
}
