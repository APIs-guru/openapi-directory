import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleIamV2betaPolicyRule } from "./googleiamv2betapolicyrule";


// GoogleIamV2betaPolicy
/** 
 * Data for an IAM policy.
**/
export class GoogleIamV2betaPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rules", elemType: shared.GoogleIamV2betaPolicyRule })
  rules?: GoogleIamV2betaPolicyRule[];

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
