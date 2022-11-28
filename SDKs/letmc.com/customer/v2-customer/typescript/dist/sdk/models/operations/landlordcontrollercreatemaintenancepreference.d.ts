import { SpeakeasyBase } from "../../../internal/utils";
export declare class LandlordControllerCreateMaintenancePreferencePathParams extends SpeakeasyBase {
    shortName: string;
}
export declare class LandlordControllerCreateMaintenancePreferenceQueryParams extends SpeakeasyBase {
    name: string;
    notes: string;
    tenancyId: string;
    token: string;
}
export declare class LandlordControllerCreateMaintenancePreferenceRequest extends SpeakeasyBase {
    pathParams: LandlordControllerCreateMaintenancePreferencePathParams;
    queryParams: LandlordControllerCreateMaintenancePreferenceQueryParams;
}
export declare class LandlordControllerCreateMaintenancePreferenceResponse extends SpeakeasyBase {
    contentType: string;
    landlordControllerCreateMaintenancePreference200ApplicationJsonString?: string;
    landlordControllerCreateMaintenancePreference200ApplicationXmlString?: string;
    landlordControllerCreateMaintenancePreference200TextJsonString?: string;
    landlordControllerCreateMaintenancePreference200TextXmlString?: string;
    statusCode: number;
}
