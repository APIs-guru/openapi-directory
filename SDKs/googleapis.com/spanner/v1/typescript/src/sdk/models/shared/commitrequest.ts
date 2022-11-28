import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Mutation } from "./mutation";
import { RequestOptions } from "./requestoptions";
import { TransactionOptions } from "./transactionoptions";



// CommitRequest
/** 
 * The request for Commit.
**/
export class CommitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mutations", elemType: Mutation })
  mutations?: Mutation[];

  @SpeakeasyMetadata({ data: "json, name=requestOptions" })
  requestOptions?: RequestOptions;

  @SpeakeasyMetadata({ data: "json, name=returnCommitStats" })
  returnCommitStats?: boolean;

  @SpeakeasyMetadata({ data: "json, name=singleUseTransaction" })
  singleUseTransaction?: TransactionOptions;

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId?: string;
}
