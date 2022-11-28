import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProcessConnectionManagerControlRequestPathParams extends SpeakeasyBase {
    serverId: string;
}
export declare class ProcessConnectionManagerControlRequestRequest extends SpeakeasyBase {
    pathParams: ProcessConnectionManagerControlRequestPathParams;
}
export declare class ProcessConnectionManagerControlRequestResponse extends SpeakeasyBase {
    contentType: string;
    processConnectionManagerControlRequest200TextXmlBinaryString?: Uint8Array;
    statusCode: number;
}
