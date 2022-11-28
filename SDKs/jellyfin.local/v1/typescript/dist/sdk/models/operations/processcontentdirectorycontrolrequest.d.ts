import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProcessContentDirectoryControlRequestPathParams extends SpeakeasyBase {
    serverId: string;
}
export declare class ProcessContentDirectoryControlRequestRequest extends SpeakeasyBase {
    pathParams: ProcessContentDirectoryControlRequestPathParams;
}
export declare class ProcessContentDirectoryControlRequestResponse extends SpeakeasyBase {
    contentType: string;
    processContentDirectoryControlRequest200TextXmlBinaryString?: Uint8Array;
    statusCode: number;
}
