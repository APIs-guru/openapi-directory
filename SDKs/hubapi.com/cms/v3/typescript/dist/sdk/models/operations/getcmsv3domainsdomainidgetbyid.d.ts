import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetCmsV3DomainsDomainIdGetByIdPathParams extends SpeakeasyBase {
    domainId: string;
}
export declare class GetCmsV3DomainsDomainIdGetByIdQueryParams extends SpeakeasyBase {
    archived?: boolean;
}
export declare class GetCmsV3DomainsDomainIdGetByIdSecurity extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class GetCmsV3DomainsDomainIdGetByIdRequest extends SpeakeasyBase {
    pathParams: GetCmsV3DomainsDomainIdGetByIdPathParams;
    queryParams: GetCmsV3DomainsDomainIdGetByIdQueryParams;
    security: GetCmsV3DomainsDomainIdGetByIdSecurity;
}
export declare class GetCmsV3DomainsDomainIdGetByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    domain?: shared.Domain;
    statusCode: number;
}
