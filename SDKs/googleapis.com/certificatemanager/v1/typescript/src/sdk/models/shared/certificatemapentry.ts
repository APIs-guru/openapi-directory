import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CertificateMapEntryMatcherEnum {
    MatcherUnspecified = "MATCHER_UNSPECIFIED",
    Primary = "PRIMARY"
}

export enum CertificateMapEntryStateEnum {
    ServingStateUnspecified = "SERVING_STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Pending = "PENDING"
}


// CertificateMapEntryInput
/** 
 * Defines a certificate map entry.
**/
export class CertificateMapEntryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificates" })
  certificates?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=matcher" })
  matcher?: CertificateMapEntryMatcherEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// CertificateMapEntry
/** 
 * Defines a certificate map entry.
**/
export class CertificateMapEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificates" })
  certificates?: string[];

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=matcher" })
  matcher?: CertificateMapEntryMatcherEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: CertificateMapEntryStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
