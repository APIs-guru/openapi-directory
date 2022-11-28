import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DiscvoverTunersQueryParams extends SpeakeasyBase {
    newDevicesOnly?: boolean;
}
export declare class DiscvoverTunersSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class DiscvoverTunersRequest extends SpeakeasyBase {
    queryParams: DiscvoverTunersQueryParams;
    security: DiscvoverTunersSecurity;
}
export declare class DiscvoverTunersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tunerHostInfos?: shared.TunerHostInfo[];
}
