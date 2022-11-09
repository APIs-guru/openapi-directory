import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum DomainCdnConfigMinimumTlsVersionEnum {
    One0 = "1.0",
    One1 = "1.1",
    One2 = "1.2",
    One3 = "1.3",
    None = "none",
    Null = "null"
}
export declare enum DomainCdnConfigSslStatusEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Eight = "8",
    Nine = "9",
    Ten = "10",
    Eleven = "11"
}
export declare enum DomainCdnConfigValidationMethodEnum {
    Zero = "0",
    One = "1",
    Two = "2"
}
export declare class DomainCdnConfig extends SpeakeasyBase {
    alternateOriginHostname: string;
    cdnGroupId: string;
    cdnId: string;
    certExpirationDate: number;
    certId: number;
    cname: string;
    cnameTarget: string;
    created: number;
    domainId: number;
    httpBody: string;
    httpUrlPath: string;
    id: number;
    minimumTlsVersion: DomainCdnConfigMinimumTlsVersionEnum;
    portalId: number;
    sslStatus: DomainCdnConfigSslStatusEnum;
    updated: number;
    validationMethod: DomainCdnConfigValidationMethodEnum;
}
