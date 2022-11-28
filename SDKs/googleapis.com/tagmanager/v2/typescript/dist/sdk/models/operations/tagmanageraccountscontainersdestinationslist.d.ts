import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersDestinationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TagmanagerAccountsContainersDestinationsListQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersDestinationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersDestinationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersDestinationsListSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersDestinationsListSecurityOption1;
    option2?: TagmanagerAccountsContainersDestinationsListSecurityOption2;
}
export declare class TagmanagerAccountsContainersDestinationsListRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersDestinationsListPathParams;
    queryParams: TagmanagerAccountsContainersDestinationsListQueryParams;
    security: TagmanagerAccountsContainersDestinationsListSecurity;
}
export declare class TagmanagerAccountsContainersDestinationsListResponse extends SpeakeasyBase {
    contentType: string;
    listDestinationsResponse?: shared.ListDestinationsResponse;
    statusCode: number;
}
