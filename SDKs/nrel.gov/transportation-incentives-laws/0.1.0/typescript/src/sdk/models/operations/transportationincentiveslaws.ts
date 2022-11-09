import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TransportationIncentivesLawsOutputFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Csv = "csv"
}


export class TransportationIncentivesLawsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=output_format" })
  outputFormat: TransportationIncentivesLawsOutputFormatEnum;
}


export class TransportationIncentivesLawsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=expired" })
  expired?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=incentive_type" })
  incentiveType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jurisdiction" })
  jurisdiction?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=keyword" })
  keyword?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=law_type" })
  lawType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=local" })
  local?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=poc" })
  poc?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=recent" })
  recent?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=regulation_type" })
  regulationType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=technology" })
  technology?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_type" })
  userType?: string;
}


export class TransportationIncentivesLawsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TransportationIncentivesLawsPathParams;

  @Metadata()
  queryParams: TransportationIncentivesLawsQueryParams;
}


export class TransportationIncentivesLawsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
