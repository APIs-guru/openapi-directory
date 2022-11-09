import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Mutation } from "./mutation";
import { RequestOptions } from "./requestoptions";
import { TransactionOptions } from "./transactionoptions";


// CommitRequest
/** 
 * The request for Commit.
**/
export class CommitRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=mutations", elemType: shared.Mutation })
  mutations?: Mutation[];

  @Metadata({ data: "json, name=requestOptions" })
  requestOptions?: RequestOptions;

  @Metadata({ data: "json, name=returnCommitStats" })
  returnCommitStats?: boolean;

  @Metadata({ data: "json, name=singleUseTransaction" })
  singleUseTransaction?: TransactionOptions;

  @Metadata({ data: "json, name=transactionId" })
  transactionId?: string;
}
