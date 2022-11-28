import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateDomainRecordPathParams extends SpeakeasyBase {
    domainId: number;
    recordId: number;
}
export declare class UpdateDomainRecordSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdateDomainRecordDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateDomainRecordRequest extends SpeakeasyBase {
    pathParams: UpdateDomainRecordPathParams;
    request: shared.DomainRecordInput;
    security: UpdateDomainRecordSecurity;
}
export declare class UpdateDomainRecordResponse extends SpeakeasyBase {
    contentType: string;
    domainRecord?: shared.DomainRecord;
    statusCode: number;
    updateDomainRecordDefaultApplicationJsonObject?: UpdateDomainRecordDefaultApplicationJson;
}
