import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDataMetricsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
