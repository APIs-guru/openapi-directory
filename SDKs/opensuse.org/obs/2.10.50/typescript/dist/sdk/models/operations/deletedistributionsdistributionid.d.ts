import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDistributionsDistributionIdPathParams extends SpeakeasyBase {
    distributionId: number;
}
export declare class DeleteDistributionsDistributionIdSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class DeleteDistributionsDistributionIdRequest extends SpeakeasyBase {
    pathParams: DeleteDistributionsDistributionIdPathParams;
    security: DeleteDistributionsDistributionIdSecurity;
}
export declare class DeleteDistributionsDistributionIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
