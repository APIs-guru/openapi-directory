import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DiscoverTunersQueryParams extends SpeakeasyBase {
    newDevicesOnly?: boolean;
}
export declare class DiscoverTunersSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class DiscoverTunersRequest extends SpeakeasyBase {
    queryParams: DiscoverTunersQueryParams;
    security: DiscoverTunersSecurity;
}
export declare class DiscoverTunersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tunerHostInfos?: shared.TunerHostInfo[];
}
