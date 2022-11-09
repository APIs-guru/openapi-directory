import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CheckError } from "./checkerror";
import { CheckInfo } from "./checkinfo";
import { QuotaInfo } from "./quotainfo";


// CheckResponse
/** 
 * Response message for the Check method.
**/
export class CheckResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkErrors", elemType: shared.CheckError })
  checkErrors?: CheckError[];

  @Metadata({ data: "json, name=checkInfo" })
  checkInfo?: CheckInfo;

  @Metadata({ data: "json, name=operationId" })
  operationId?: string;

  @Metadata({ data: "json, name=quotaInfo" })
  quotaInfo?: QuotaInfo;

  @Metadata({ data: "json, name=serviceConfigId" })
  serviceConfigId?: string;

  @Metadata({ data: "json, name=serviceRolloutId" })
  serviceRolloutId?: string;
}
