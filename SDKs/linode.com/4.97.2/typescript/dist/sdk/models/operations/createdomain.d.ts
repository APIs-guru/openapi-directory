import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDomainRequestBodyStatusEnum {
    Disabled = "disabled",
    Active = "active"
}
export declare enum CreateDomainRequestBodyTypeEnum {
    Master = "master",
    Slave = "slave"
}
export declare class CreateDomainRequestBodyInput extends SpeakeasyBase {
    axfrIps?: string[];
    description?: string;
    domain: string;
    expireSec?: number;
    group?: string;
    masterIps?: string[];
    refreshSec?: number;
    retrySec?: number;
    soaEmail?: string;
    status?: CreateDomainRequestBodyStatusEnum;
    tags?: string[];
    ttlSec?: number;
    type: CreateDomainRequestBodyTypeEnum;
}
export declare class CreateDomainSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreateDomainDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreateDomainRequest extends SpeakeasyBase {
    request: CreateDomainRequestBodyInput;
    security: CreateDomainSecurity;
}
export declare class CreateDomainResponse extends SpeakeasyBase {
    contentType: string;
    domain?: shared.Domain;
    statusCode: number;
    createDomainDefaultApplicationJsonObject?: CreateDomainDefaultApplicationJson;
}
