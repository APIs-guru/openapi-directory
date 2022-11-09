import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteStudiesIdMetadataNamePathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class DeleteStudiesIdMetadataNameHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare class DeleteStudiesIdMetadataNameRequest extends SpeakeasyBase {
    pathParams: DeleteStudiesIdMetadataNamePathParams;
    headers: DeleteStudiesIdMetadataNameHeaders;
}
export declare class DeleteStudiesIdMetadataNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
