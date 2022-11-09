import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResultResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=result_file_url" })
  resultFileUrl?: string;
}
