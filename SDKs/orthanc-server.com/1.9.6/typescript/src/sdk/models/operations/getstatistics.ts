import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getStatistics200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
