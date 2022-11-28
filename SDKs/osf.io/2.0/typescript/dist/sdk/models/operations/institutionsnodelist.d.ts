import { SpeakeasyBase } from "../../../internal/utils";
export declare class InstitutionsNodeListPathParams extends SpeakeasyBase {
    institutionId: string;
}
export declare class InstitutionsNodeListRequest extends SpeakeasyBase {
    pathParams: InstitutionsNodeListPathParams;
}
export declare class InstitutionsNodeListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
