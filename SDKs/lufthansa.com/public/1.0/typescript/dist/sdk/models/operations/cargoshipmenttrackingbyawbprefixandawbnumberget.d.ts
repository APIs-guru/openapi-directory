import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CargoShipmentTrackingByAwbPrefixAndAwbNumberGetPathParams extends SpeakeasyBase {
    aWbNumber: string;
    aWbPrefix: string;
}
export declare class CargoShipmentTrackingByAwbPrefixAndAwbNumberGetHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class CargoShipmentTrackingByAwbPrefixAndAwbNumberGetSecurity extends SpeakeasyBase {
    auth: shared.SchemeAuth;
}
export declare class CargoShipmentTrackingByAwbPrefixAndAwbNumberGetRequest extends SpeakeasyBase {
    pathParams: CargoShipmentTrackingByAwbPrefixAndAwbNumberGetPathParams;
    headers: CargoShipmentTrackingByAwbPrefixAndAwbNumberGetHeaders;
    security: CargoShipmentTrackingByAwbPrefixAndAwbNumberGetSecurity;
}
export declare class CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse extends SpeakeasyBase {
    cargoShipmentTrackingByAwbPrefixAndAwbNumberGet200ApplicationJsonObject?: Map<string, any>;
    contentType: string;
    statusCode: number;
}
