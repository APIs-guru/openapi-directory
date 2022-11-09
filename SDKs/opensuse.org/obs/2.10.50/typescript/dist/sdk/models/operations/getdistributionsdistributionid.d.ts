import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetDistributionsDistributionIdPathParams extends SpeakeasyBase {
    distributionId: number;
}
export declare class GetDistributionsDistributionIdSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetDistributionsDistributionIdRequest extends SpeakeasyBase {
    pathParams: GetDistributionsDistributionIdPathParams;
    security: GetDistributionsDistributionIdSecurity;
}
export declare class GetDistributionsDistributionIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
