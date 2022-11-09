import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteInstancesIdMetadataNamePathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class DeleteInstancesIdMetadataNameHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare class DeleteInstancesIdMetadataNameRequest extends SpeakeasyBase {
    pathParams: DeleteInstancesIdMetadataNamePathParams;
    headers: DeleteInstancesIdMetadataNameHeaders;
}
export declare class DeleteInstancesIdMetadataNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
