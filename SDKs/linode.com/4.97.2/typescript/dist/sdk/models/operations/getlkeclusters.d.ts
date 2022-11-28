import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLkeClustersSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetLkeClusters200ApplicationJson extends SpeakeasyBase {
    data?: shared.LkeCluster[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetLkeClustersDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetLkeClustersRequest extends SpeakeasyBase {
    security: GetLkeClustersSecurity;
}
export declare class GetLkeClustersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getLkeClusters200ApplicationJsonObject?: GetLkeClusters200ApplicationJson;
    getLkeClustersDefaultApplicationJsonObject?: GetLkeClustersDefaultApplicationJson;
}
