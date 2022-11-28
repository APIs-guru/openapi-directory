import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TransportationIncentivesLawsOutputFormatEnum {
    Json = "json",
    Xml = "xml",
    Csv = "csv"
}


export class TransportationIncentivesLawsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=output_format" })
  outputFormat: TransportationIncentivesLawsOutputFormatEnum;
}


export class TransportationIncentivesLawsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expired" })
  expired?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=incentive_type" })
  incentiveType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jurisdiction" })
  jurisdiction?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyword" })
  keyword?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=law_type" })
  lawType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=local" })
  local?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=poc" })
  poc?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recent" })
  recent?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=regulation_type" })
  regulationType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=technology" })
  technology?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_type" })
  userType?: string;
}


export class TransportationIncentivesLawsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TransportationIncentivesLawsPathParams;

  @SpeakeasyMetadata()
  queryParams: TransportationIncentivesLawsQueryParams;
}


export class TransportationIncentivesLawsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
