import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudidentityCustomersUserinvitationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudidentityCustomersUserinvitationsCancelQueryParams extends SpeakeasyBase {
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
export declare class CloudidentityCustomersUserinvitationsCancelRequest extends SpeakeasyBase {
    pathParams: CloudidentityCustomersUserinvitationsCancelPathParams;
    queryParams: CloudidentityCustomersUserinvitationsCancelQueryParams;
    request?: Map<string, any>;
}
export declare class CloudidentityCustomersUserinvitationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
