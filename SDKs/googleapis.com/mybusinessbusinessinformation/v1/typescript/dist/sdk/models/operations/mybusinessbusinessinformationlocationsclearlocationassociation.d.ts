import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessbusinessinformationLocationsClearLocationAssociationPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessbusinessinformationLocationsClearLocationAssociationQueryParams extends SpeakeasyBase {
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
export declare class MybusinessbusinessinformationLocationsClearLocationAssociationRequest extends SpeakeasyBase {
    pathParams: MybusinessbusinessinformationLocationsClearLocationAssociationPathParams;
    queryParams: MybusinessbusinessinformationLocationsClearLocationAssociationQueryParams;
    request?: Map<string, any>;
}
export declare class MybusinessbusinessinformationLocationsClearLocationAssociationResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
