import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDomainRecordPathParams extends SpeakeasyBase {
    domainId: number;
    recordId: number;
}
export declare class DeleteDomainRecordSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DeleteDomainRecordDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DeleteDomainRecordRequest extends SpeakeasyBase {
    pathParams: DeleteDomainRecordPathParams;
    security: DeleteDomainRecordSecurity;
}
export declare class DeleteDomainRecordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteDomainRecord200ApplicationJsonObject?: Map<string, any>;
    deleteDomainRecordDefaultApplicationJsonObject?: DeleteDomainRecordDefaultApplicationJson;
}
