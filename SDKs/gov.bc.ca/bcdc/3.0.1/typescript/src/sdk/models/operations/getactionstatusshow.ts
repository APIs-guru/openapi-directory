import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetActionStatusShowResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
