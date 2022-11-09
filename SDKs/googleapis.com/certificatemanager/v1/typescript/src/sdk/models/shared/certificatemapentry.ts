import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CertificateMapEntryMatcherEnum {
    MatcherUnspecified = "MATCHER_UNSPECIFIED"
,    Primary = "PRIMARY"
}

export enum CertificateMapEntryStateEnum {
    ServingStateUnspecified = "SERVING_STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Pending = "PENDING"
}


// CertificateMapEntry
/** 
 * Defines a certificate map entry.
**/
export class CertificateMapEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificates" })
  certificates?: string[];

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=matcher" })
  matcher?: CertificateMapEntryMatcherEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: CertificateMapEntryStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
