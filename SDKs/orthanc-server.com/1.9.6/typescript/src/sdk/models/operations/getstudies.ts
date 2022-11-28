import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStudiesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=full" })
  full?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: number;
}


export class GetStudiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetStudiesQueryParams;
}


export class GetStudiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getStudies200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
