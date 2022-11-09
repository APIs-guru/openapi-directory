import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeletePatientsIdMetadataNamePathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class DeletePatientsIdMetadataNameHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare class DeletePatientsIdMetadataNameRequest extends SpeakeasyBase {
    pathParams: DeletePatientsIdMetadataNamePathParams;
    headers: DeletePatientsIdMetadataNameHeaders;
}
export declare class DeletePatientsIdMetadataNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
