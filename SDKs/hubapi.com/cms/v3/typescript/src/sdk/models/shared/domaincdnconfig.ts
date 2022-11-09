import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DomainCdnConfigMinimumTlsVersionEnum {
    One0 = "1.0"
,    One1 = "1.1"
,    One2 = "1.2"
,    One3 = "1.3"
,    None = "none"
,    Null = "null"
}

export enum DomainCdnConfigSslStatusEnum {
    Zero = "0"
,    One = "1"
,    Two = "2"
,    Three = "3"
,    Four = "4"
,    Five = "5"
,    Six = "6"
,    Seven = "7"
,    Eight = "8"
,    Nine = "9"
,    Ten = "10"
,    Eleven = "11"
}

export enum DomainCdnConfigValidationMethodEnum {
    Zero = "0"
,    One = "1"
,    Two = "2"
}


export class DomainCdnConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=alternateOriginHostname" })
  alternateOriginHostname: string;

  @Metadata({ data: "json, name=cdnGroupId" })
  cdnGroupId: string;

  @Metadata({ data: "json, name=cdnId" })
  cdnId: string;

  @Metadata({ data: "json, name=certExpirationDate" })
  certExpirationDate: number;

  @Metadata({ data: "json, name=certId" })
  certId: number;

  @Metadata({ data: "json, name=cname" })
  cname: string;

  @Metadata({ data: "json, name=cnameTarget" })
  cnameTarget: string;

  @Metadata({ data: "json, name=created" })
  created: number;

  @Metadata({ data: "json, name=domainId" })
  domainId: number;

  @Metadata({ data: "json, name=httpBody" })
  httpBody: string;

  @Metadata({ data: "json, name=httpUrlPath" })
  httpUrlPath: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=minimumTlsVersion" })
  minimumTlsVersion: DomainCdnConfigMinimumTlsVersionEnum;

  @Metadata({ data: "json, name=portalId" })
  portalId: number;

  @Metadata({ data: "json, name=sslStatus" })
  sslStatus: DomainCdnConfigSslStatusEnum;

  @Metadata({ data: "json, name=updated" })
  updated: number;

  @Metadata({ data: "json, name=validationMethod" })
  validationMethod: DomainCdnConfigValidationMethodEnum;
}
