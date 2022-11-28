import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApodQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hd" })
  hd?: boolean;
}


export class GetApodSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetApodRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApodQueryParams;

  @SpeakeasyMetadata()
  security: GetApodSecurity;
}


export class GetApodResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getApod200ApplicationJsonAnies?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
