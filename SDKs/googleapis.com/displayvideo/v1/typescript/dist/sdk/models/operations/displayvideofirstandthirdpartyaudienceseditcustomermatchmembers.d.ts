import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersPathParams extends SpeakeasyBase {
    firstAndThirdPartyAudienceId: string;
}
export declare class DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersRequest extends SpeakeasyBase {
    pathParams: DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersPathParams;
    queryParams: DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersQueryParams;
    request?: shared.EditCustomerMatchMembersRequest;
    security: DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersSecurity;
}
export declare class DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersResponse extends SpeakeasyBase {
    contentType: string;
    editCustomerMatchMembersResponse?: shared.EditCustomerMatchMembersResponse;
    statusCode: number;
}
