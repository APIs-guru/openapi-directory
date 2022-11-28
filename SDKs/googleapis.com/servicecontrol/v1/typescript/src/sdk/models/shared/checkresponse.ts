import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CheckError } from "./checkerror";
import { CheckInfo } from "./checkinfo";
import { QuotaInfo } from "./quotainfo";



// CheckResponse
/** 
 * Response message for the Check method.
**/
export class CheckResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkErrors", elemType: CheckError })
  checkErrors?: CheckError[];

  @SpeakeasyMetadata({ data: "json, name=checkInfo" })
  checkInfo?: CheckInfo;

  @SpeakeasyMetadata({ data: "json, name=operationId" })
  operationId?: string;

  @SpeakeasyMetadata({ data: "json, name=quotaInfo" })
  quotaInfo?: QuotaInfo;

  @SpeakeasyMetadata({ data: "json, name=serviceConfigId" })
  serviceConfigId?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceRolloutId" })
  serviceRolloutId?: string;
}
