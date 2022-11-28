import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCmsV3DomainsDomainIdGetByIdPathParams extends SpeakeasyBase {
    domainId: string;
}
export declare class GetCmsV3DomainsDomainIdGetByIdSecurity extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class GetCmsV3DomainsDomainIdGetByIdRequest extends SpeakeasyBase {
    pathParams: GetCmsV3DomainsDomainIdGetByIdPathParams;
    security: GetCmsV3DomainsDomainIdGetByIdSecurity;
}
export declare class GetCmsV3DomainsDomainIdGetByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    domain?: shared.Domain;
    statusCode: number;
}
