import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDataStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
