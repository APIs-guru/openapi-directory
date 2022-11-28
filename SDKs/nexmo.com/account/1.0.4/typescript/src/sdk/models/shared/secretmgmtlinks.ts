import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SecretMgmtLinksSelf
/** 
 * This resource
**/
export class SecretMgmtLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


// SecretMgmtLinks
/** 
 * Links related to this resource
**/
export class SecretMgmtLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: SecretMgmtLinksSelf;
}
