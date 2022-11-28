import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDomainRecordPathParams extends SpeakeasyBase {
    domainId: number;
    recordId: number;
}
export declare class GetDomainRecordSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetDomainRecordDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetDomainRecordRequest extends SpeakeasyBase {
    pathParams: GetDomainRecordPathParams;
    security: GetDomainRecordSecurity;
}
export declare class GetDomainRecordResponse extends SpeakeasyBase {
    contentType: string;
    domainRecord?: shared.DomainRecord;
    statusCode: number;
    getDomainRecordDefaultApplicationJsonObject?: GetDomainRecordDefaultApplicationJson;
}
