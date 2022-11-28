import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetClientThumbnailPathParams extends SpeakeasyBase {
    clientId: string;
}
export declare class GetClientThumbnailDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetClientThumbnailRequest extends SpeakeasyBase {
    pathParams: GetClientThumbnailPathParams;
}
export declare class GetClientThumbnailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getClientThumbnail200ImagePngBinaryString?: Uint8Array;
    getClientThumbnailDefaultApplicationJsonObject?: GetClientThumbnailDefaultApplicationJson;
}
