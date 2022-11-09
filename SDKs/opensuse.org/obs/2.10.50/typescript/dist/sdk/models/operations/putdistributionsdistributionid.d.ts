import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutDistributionsDistributionIdPathParams extends SpeakeasyBase {
    distributionId: number;
}
export declare class PutDistributionsDistributionIdSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class PutDistributionsDistributionIdRequest extends SpeakeasyBase {
    pathParams: PutDistributionsDistributionIdPathParams;
    request?: Uint8Array;
    security: PutDistributionsDistributionIdSecurity;
}
export declare class PutDistributionsDistributionIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
