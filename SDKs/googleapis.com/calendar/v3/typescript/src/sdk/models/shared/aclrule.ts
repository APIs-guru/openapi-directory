import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AclRuleScope
/** 
 * The extent to which calendar access is granted by this ACL rule.
**/
export class AclRuleScope extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class AclRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: AclRuleScope;
}
