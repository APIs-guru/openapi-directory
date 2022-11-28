import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersDestinationsLinkPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TagmanagerAccountsContainersDestinationsLinkQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    allowUserPermissionFeatureUpdate?: boolean;
    alt?: shared.AltEnum;
    callback?: string;
    destinationId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TagmanagerAccountsContainersDestinationsLinkSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersDestinationsLinkRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersDestinationsLinkPathParams;
    queryParams: TagmanagerAccountsContainersDestinationsLinkQueryParams;
    security: TagmanagerAccountsContainersDestinationsLinkSecurity;
}
export declare class TagmanagerAccountsContainersDestinationsLinkResponse extends SpeakeasyBase {
    contentType: string;
    destination?: shared.Destination;
    statusCode: number;
}
