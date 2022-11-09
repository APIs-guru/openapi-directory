import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetValuesForVariablesFormatEnum {
    Google = "google"
}


export class GetValuesForVariablesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=app_token" })
  appToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=describe" })
  describe?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=entity_id" })
  entityId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=forecast" })
  forecast?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetValuesForVariablesFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=variable" })
  variable: string;
}


export class GetValuesForVariablesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-App-Token" })
  xAppToken?: string;
}


export class GetValuesForVariablesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetValuesForVariablesQueryParams;

  @Metadata()
  headers: GetValuesForVariablesHeaders;
}


export class GetValuesForVariablesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
