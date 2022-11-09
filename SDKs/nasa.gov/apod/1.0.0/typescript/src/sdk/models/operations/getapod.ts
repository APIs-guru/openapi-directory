import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApodQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=hd" })
  hd?: boolean;
}


export class GetApodSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetApodRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApodQueryParams;

  @Metadata()
  security: GetApodSecurity;
}


export class GetApodResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getApod200ApplicationJsonAnies?: any[];

  @Metadata()
  statusCode: number;
}
