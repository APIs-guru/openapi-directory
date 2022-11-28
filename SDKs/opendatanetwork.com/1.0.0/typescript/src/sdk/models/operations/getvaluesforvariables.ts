import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetValuesForVariablesFormatEnum {
    Google = "google"
}


export class GetValuesForVariablesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=app_token" })
  appToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=describe" })
  describe?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entity_id" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=forecast" })
  forecast?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetValuesForVariablesFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=variable" })
  variable: string;
}


export class GetValuesForVariablesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-App-Token" })
  xAppToken?: string;
}


export class GetValuesForVariablesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetValuesForVariablesQueryParams;

  @SpeakeasyMetadata()
  headers: GetValuesForVariablesHeaders;
}


export class GetValuesForVariablesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
