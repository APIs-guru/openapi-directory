import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetPatientsIdMetadataPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPatientsIdMetadataQueryParams extends SpeakeasyBase {
    expand?: string;
}
export declare class GetPatientsIdMetadataRequest extends SpeakeasyBase {
    pathParams: GetPatientsIdMetadataPathParams;
    queryParams: GetPatientsIdMetadataQueryParams;
}
export declare class GetPatientsIdMetadataResponse extends SpeakeasyBase {
    contentType: string;
    getPatientsIdMetadata200ApplicationJsonAny?: any;
    statusCode: number;
}
