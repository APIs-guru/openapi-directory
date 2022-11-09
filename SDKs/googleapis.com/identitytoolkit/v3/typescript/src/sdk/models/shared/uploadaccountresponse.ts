import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UploadAccountResponseError extends SpeakeasyBase {
  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


// UploadAccountResponse
/** 
 * Respone of uploading accounts in batch.
**/
export class UploadAccountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=error", elemType: shared.UploadAccountResponseError })
  error?: UploadAccountResponseError[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
