import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResultResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result_file_url" })
  resultFileUrl?: string;
}
