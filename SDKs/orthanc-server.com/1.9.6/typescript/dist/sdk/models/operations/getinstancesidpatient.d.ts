import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetInstancesIdPatientPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetInstancesIdPatientQueryParams extends SpeakeasyBase {
    full?: boolean;
    short?: boolean;
}
export declare class GetInstancesIdPatientRequest extends SpeakeasyBase {
    pathParams: GetInstancesIdPatientPathParams;
    queryParams: GetInstancesIdPatientQueryParams;
}
export declare class GetInstancesIdPatientResponse extends SpeakeasyBase {
    contentType: string;
    getInstancesIdPatient200ApplicationJsonAny?: any;
    statusCode: number;
}
