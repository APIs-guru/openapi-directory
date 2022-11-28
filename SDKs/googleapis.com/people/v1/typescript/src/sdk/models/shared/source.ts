import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProfileMetadata } from "./profilemetadata";


export enum SourceTypeEnum {
    SourceTypeUnspecified = "SOURCE_TYPE_UNSPECIFIED",
    Account = "ACCOUNT",
    Profile = "PROFILE",
    DomainProfile = "DOMAIN_PROFILE",
    Contact = "CONTACT",
    OtherContact = "OTHER_CONTACT",
    DomainContact = "DOMAIN_CONTACT"
}


// Source
/** 
 * The source of a field.
**/
export class Source extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=profileMetadata" })
  profileMetadata?: ProfileMetadata;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// SourceInput
/** 
 * The source of a field.
**/
export class SourceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SourceTypeEnum;
}
