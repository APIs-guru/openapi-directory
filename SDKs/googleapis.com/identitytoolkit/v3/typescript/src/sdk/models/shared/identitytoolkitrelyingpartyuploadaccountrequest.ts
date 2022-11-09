import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserInfo } from "./userinfo";


// IdentitytoolkitRelyingpartyUploadAccountRequest
/** 
 * Request to upload user account in batch.
**/
export class IdentitytoolkitRelyingpartyUploadAccountRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowOverwrite" })
  allowOverwrite?: boolean;

  @Metadata({ data: "json, name=blockSize" })
  blockSize?: number;

  @Metadata({ data: "json, name=cpuMemCost" })
  cpuMemCost?: number;

  @Metadata({ data: "json, name=delegatedProjectNumber" })
  delegatedProjectNumber?: string;

  @Metadata({ data: "json, name=dkLen" })
  dkLen?: number;

  @Metadata({ data: "json, name=hashAlgorithm" })
  hashAlgorithm?: string;

  @Metadata({ data: "json, name=memoryCost" })
  memoryCost?: number;

  @Metadata({ data: "json, name=parallelization" })
  parallelization?: number;

  @Metadata({ data: "json, name=rounds" })
  rounds?: number;

  @Metadata({ data: "json, name=saltSeparator" })
  saltSeparator?: string;

  @Metadata({ data: "json, name=sanityCheck" })
  sanityCheck?: boolean;

  @Metadata({ data: "json, name=signerKey" })
  signerKey?: string;

  @Metadata({ data: "json, name=targetProjectId" })
  targetProjectId?: string;

  @Metadata({ data: "json, name=users", elemType: shared.UserInfo })
  users?: UserInfo[];
}
