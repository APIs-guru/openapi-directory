import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum IdSourceEnum {
    Nsidc = "NSIDC"
,    Ade = "ADE"
}


export class IdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=source" })
  source: IdSourceEnum;
}


export class IdRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: IdQueryParams;
}


export class IdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  id200ApplicationXSuggestionsPlusJsonString?: string;
}
