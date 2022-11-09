import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostInventoryFinancialImapctForecastAccuracyHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostInventoryFinancialImapctForecastAccuracyRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostInventoryFinancialImapctForecastAccuracyHeaders;
}


export class PostInventoryFinancialImapctForecastAccuracyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
