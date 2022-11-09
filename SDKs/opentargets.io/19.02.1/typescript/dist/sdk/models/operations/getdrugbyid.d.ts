import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetDrugByIdPathParams extends SpeakeasyBase {
    drugId: string;
}
export declare class GetDrugByIdQueryParams extends SpeakeasyBase {
    drugId: string;
}
export declare class GetDrugByIdRequest extends SpeakeasyBase {
    pathParams: GetDrugByIdPathParams;
    queryParams: GetDrugByIdQueryParams;
}
export declare class GetDrugByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
