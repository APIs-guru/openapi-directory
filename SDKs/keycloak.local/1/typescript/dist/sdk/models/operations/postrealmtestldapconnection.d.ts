import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmTestLdapConnectionPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class PostRealmTestLdapConnectionRequest extends SpeakeasyBase {
    pathParams: PostRealmTestLdapConnectionPathParams;
    request: shared.TestLdapConnectionRepresentation;
}
export declare class PostRealmTestLdapConnectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
