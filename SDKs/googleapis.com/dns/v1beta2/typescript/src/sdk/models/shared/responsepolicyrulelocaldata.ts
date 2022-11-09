import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceRecordSet } from "./resourcerecordset";


export class ResponsePolicyRuleLocalData extends SpeakeasyBase {
  @Metadata({ data: "json, name=localDatas", elemType: shared.ResourceRecordSet })
  localDatas?: ResourceRecordSet[];
}
