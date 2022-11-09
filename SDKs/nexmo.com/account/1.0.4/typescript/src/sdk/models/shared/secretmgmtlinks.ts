import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SecretMgmtLinksSelf
/** 
 * This resource
**/
export class SecretMgmtLinksSelf extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;
}


// SecretMgmtLinks
/** 
 * Links related to this resource
**/
export class SecretMgmtLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self?: SecretMgmtLinksSelf;
}
