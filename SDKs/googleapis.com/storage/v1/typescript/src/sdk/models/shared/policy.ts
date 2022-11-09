import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Expr } from "./expr";


export class PolicyBindings extends SpeakeasyBase {
  @Metadata({ data: "json, name=condition" })
  condition?: Expr;

  @Metadata({ data: "json, name=members" })
  members?: string[];

  @Metadata({ data: "json, name=role" })
  role?: string;
}


// Policy
/** 
 * A bucket/object IAM policy.
**/
export class Policy extends SpeakeasyBase {
  @Metadata({ data: "json, name=bindings", elemType: shared.PolicyBindings })
  bindings?: PolicyBindings[];

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
