import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";



// IdentitytoolkitRelyingpartyUploadAccountRequest
/** 
 * Request to upload user account in batch.
**/
export class IdentitytoolkitRelyingpartyUploadAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowOverwrite" })
  allowOverwrite?: boolean;

  @SpeakeasyMetadata({ data: "json, name=blockSize" })
  blockSize?: number;

  @SpeakeasyMetadata({ data: "json, name=cpuMemCost" })
  cpuMemCost?: number;

  @SpeakeasyMetadata({ data: "json, name=delegatedProjectNumber" })
  delegatedProjectNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=dkLen" })
  dkLen?: number;

  @SpeakeasyMetadata({ data: "json, name=hashAlgorithm" })
  hashAlgorithm?: string;

  @SpeakeasyMetadata({ data: "json, name=memoryCost" })
  memoryCost?: number;

  @SpeakeasyMetadata({ data: "json, name=parallelization" })
  parallelization?: number;

  @SpeakeasyMetadata({ data: "json, name=rounds" })
  rounds?: number;

  @SpeakeasyMetadata({ data: "json, name=saltSeparator" })
  saltSeparator?: string;

  @SpeakeasyMetadata({ data: "json, name=sanityCheck" })
  sanityCheck?: boolean;

  @SpeakeasyMetadata({ data: "json, name=signerKey" })
  signerKey?: string;

  @SpeakeasyMetadata({ data: "json, name=targetProjectId" })
  targetProjectId?: string;

  @SpeakeasyMetadata({ data: "json, name=users", elemType: UserInfo })
  users?: UserInfo[];
}
