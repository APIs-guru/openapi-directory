import { SpeakeasyBase } from "../../../internal/utils";
export declare class SessionControllerCreateLandlordLoginPathParams extends SpeakeasyBase {
    shortName: string;
}
export declare class SessionControllerCreateLandlordLoginQueryParams extends SpeakeasyBase {
    branchId?: string;
    contactDetails: string;
    email: string;
    forename: string;
    propertyAddress: string;
    surname: string;
    title: string;
}
export declare class SessionControllerCreateLandlordLoginRequest extends SpeakeasyBase {
    pathParams: SessionControllerCreateLandlordLoginPathParams;
    queryParams: SessionControllerCreateLandlordLoginQueryParams;
}
export declare class SessionControllerCreateLandlordLoginResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
