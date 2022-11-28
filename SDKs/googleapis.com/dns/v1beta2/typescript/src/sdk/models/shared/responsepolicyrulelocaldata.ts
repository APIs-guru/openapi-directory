import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceRecordSet } from "./resourcerecordset";



export class ResponsePolicyRuleLocalData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=localDatas", elemType: ResourceRecordSet })
  localDatas?: ResourceRecordSet[];
}
