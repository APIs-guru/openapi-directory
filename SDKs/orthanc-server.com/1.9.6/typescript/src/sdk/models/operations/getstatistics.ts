import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getStatistics200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
