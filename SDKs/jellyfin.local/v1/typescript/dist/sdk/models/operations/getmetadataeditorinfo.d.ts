import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMetadataEditorInfoPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class GetMetadataEditorInfoSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetMetadataEditorInfoRequest extends SpeakeasyBase {
    pathParams: GetMetadataEditorInfoPathParams;
    security: GetMetadataEditorInfoSecurity;
}
export declare class GetMetadataEditorInfoResponse extends SpeakeasyBase {
    contentType: string;
    metadataEditorInfo?: shared.MetadataEditorInfo;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
