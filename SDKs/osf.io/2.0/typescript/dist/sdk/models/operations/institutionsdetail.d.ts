import { SpeakeasyBase } from "../../../internal/utils";
export declare class InstitutionsDetailPathParams extends SpeakeasyBase {
    institutionId: string;
}
export declare class InstitutionsDetailRequest extends SpeakeasyBase {
    pathParams: InstitutionsDetailPathParams;
}
export declare class InstitutionsDetailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
