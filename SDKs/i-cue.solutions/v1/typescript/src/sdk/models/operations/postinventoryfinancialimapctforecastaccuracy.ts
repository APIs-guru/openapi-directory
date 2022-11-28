import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostInventoryFinancialImapctForecastAccuracyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostInventoryFinancialImapctForecastAccuracyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostInventoryFinancialImapctForecastAccuracyHeaders;
}


export class PostInventoryFinancialImapctForecastAccuracyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
