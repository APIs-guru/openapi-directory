import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetTimestagsFilterEnum {
    Des = "Des",
    Geo = "Geo",
    Org = "Org",
    Per = "Per"
}


export class GetTimestagsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetTimestagsFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class GetTimestagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTimestagsQueryParams;
}


export class GetTimestagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getTimestags200ApplicationJsonArrays?: string[][];

  @SpeakeasyMetadata()
  statusCode: number;
}
