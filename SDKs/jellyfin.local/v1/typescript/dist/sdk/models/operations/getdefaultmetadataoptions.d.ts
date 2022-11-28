import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDefaultMetadataOptionsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetDefaultMetadataOptionsRequest extends SpeakeasyBase {
    security: GetDefaultMetadataOptionsSecurity;
}
export declare class GetDefaultMetadataOptionsResponse extends SpeakeasyBase {
    contentType: string;
    metadataOptions?: shared.MetadataOptions;
    statusCode: number;
}
