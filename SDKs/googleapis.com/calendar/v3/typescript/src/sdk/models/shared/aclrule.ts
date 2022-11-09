import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AclRuleScope
/** 
 * The extent to which calendar access is granted by this ACL rule.
**/
export class AclRuleScope extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class AclRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=role" })
  role?: string;

  @Metadata({ data: "json, name=scope" })
  scope?: AclRuleScope;
}
