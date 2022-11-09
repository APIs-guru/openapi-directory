import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNumbersRandomQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min" })
  min?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=total" })
  total?: number;
}


export class GetNumbersRandomSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}


export class GetNumbersRandomRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetNumbersRandomQueryParams;

  @Metadata()
  security: GetNumbersRandomSecurity;
}


export class GetNumbersRandomResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
