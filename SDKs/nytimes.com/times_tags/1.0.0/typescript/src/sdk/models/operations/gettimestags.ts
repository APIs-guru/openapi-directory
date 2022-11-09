import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetTimestagsFilterEnum {
    Des = "Des"
,    Geo = "Geo"
,    Org = "Org"
,    Per = "Per"
}


export class GetTimestagsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetTimestagsFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class GetTimestagsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTimestagsQueryParams;
}


export class GetTimestagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getTimestags200ApplicationJsonArrays?: string[][];

  @Metadata()
  statusCode: number;
}
