import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetContentDirectoryPathParams extends SpeakeasyBase {
    serverId: string;
}
export declare class GetContentDirectoryRequest extends SpeakeasyBase {
    pathParams: GetContentDirectoryPathParams;
}
export declare class GetContentDirectoryResponse extends SpeakeasyBase {
    contentType: string;
    getContentDirectory200TextXmlBinaryString?: Uint8Array;
    statusCode: number;
}
