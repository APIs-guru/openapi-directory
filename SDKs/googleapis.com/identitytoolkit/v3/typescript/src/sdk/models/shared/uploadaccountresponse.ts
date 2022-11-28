import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UploadAccountResponseError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


// UploadAccountResponse
/** 
 * Respone of uploading accounts in batch.
**/
export class UploadAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error", elemType: UploadAccountResponseError })
  error?: UploadAccountResponseError[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
