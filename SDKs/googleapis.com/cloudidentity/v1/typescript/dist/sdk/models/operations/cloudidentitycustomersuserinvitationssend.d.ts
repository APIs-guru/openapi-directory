import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudidentityCustomersUserinvitationsSendPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudidentityCustomersUserinvitationsSendQueryParams extends SpeakeasyBase {
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
export declare class CloudidentityCustomersUserinvitationsSendRequest extends SpeakeasyBase {
    pathParams: CloudidentityCustomersUserinvitationsSendPathParams;
    queryParams: CloudidentityCustomersUserinvitationsSendQueryParams;
    request?: Map<string, any>;
}
export declare class CloudidentityCustomersUserinvitationsSendResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
