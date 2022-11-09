import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProfileMetadata } from "./profilemetadata";

export enum SourceTypeEnum {
    SourceTypeUnspecified = "SOURCE_TYPE_UNSPECIFIED"
,    Account = "ACCOUNT"
,    Profile = "PROFILE"
,    DomainProfile = "DOMAIN_PROFILE"
,    Contact = "CONTACT"
,    OtherContact = "OTHER_CONTACT"
,    DomainContact = "DOMAIN_CONTACT"
}


// Source
/** 
 * The source of a field.
**/
export class Source extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=profileMetadata" })
  profileMetadata?: ProfileMetadata;

  @Metadata({ data: "json, name=type" })
  type?: SourceTypeEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
