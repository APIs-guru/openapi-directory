import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDomainRecordPathParams extends SpeakeasyBase {
    domainId: number;
}
export declare enum CreateDomainRecordRequestBodyTagEnum {
    Issue = "issue",
    Issuewild = "issuewild",
    Iodef = "iodef"
}
export declare enum CreateDomainRecordRequestBodyTypeEnum {
    A = "A",
    Aaaa = "AAAA",
    Ns = "NS",
    Mx = "MX",
    Cname = "CNAME",
    Txt = "TXT",
    Srv = "SRV",
    Ptr = "PTR",
    Caa = "CAA"
}
export declare class CreateDomainRecordRequestBodyInput extends SpeakeasyBase {
    name?: string;
    port?: number;
    priority?: number;
    protocol?: string;
    service?: string;
    tag?: CreateDomainRecordRequestBodyTagEnum;
    target?: string;
    ttlSec?: number;
    type: CreateDomainRecordRequestBodyTypeEnum;
    weight?: number;
}
export declare class CreateDomainRecordSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreateDomainRecordDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreateDomainRecordRequest extends SpeakeasyBase {
    pathParams: CreateDomainRecordPathParams;
    request: CreateDomainRecordRequestBodyInput;
    security: CreateDomainRecordSecurity;
}
export declare class CreateDomainRecordResponse extends SpeakeasyBase {
    contentType: string;
    domainRecord?: shared.DomainRecord;
    statusCode: number;
    createDomainRecordDefaultApplicationJsonObject?: CreateDomainRecordDefaultApplicationJson;
}
