import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetIconIdPathParams extends SpeakeasyBase {
    fileName: string;
    serverId: string;
}
export declare class GetIconIdRequest extends SpeakeasyBase {
    pathParams: GetIconIdPathParams;
}
export declare class GetIconIdResponse extends SpeakeasyBase {
    contentType: string;
    getIconId200ImageWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
