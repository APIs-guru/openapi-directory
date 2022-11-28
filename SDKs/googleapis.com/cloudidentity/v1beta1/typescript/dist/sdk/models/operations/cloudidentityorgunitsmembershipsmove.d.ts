import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudidentityOrgUnitsMembershipsMovePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudidentityOrgUnitsMembershipsMoveQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudidentityOrgUnitsMembershipsMoveRequest extends SpeakeasyBase {
    pathParams: CloudidentityOrgUnitsMembershipsMovePathParams;
    queryParams: CloudidentityOrgUnitsMembershipsMoveQueryParams;
    request?: shared.MoveOrgMembershipRequest;
}
export declare class CloudidentityOrgUnitsMembershipsMoveResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
