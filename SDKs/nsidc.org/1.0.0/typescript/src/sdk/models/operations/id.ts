import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum IdSourceEnum {
    Nsidc = "NSIDC",
    Ade = "ADE"
}


export class IdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" })
  source: IdSourceEnum;
}


export class IdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: IdQueryParams;
}


export class IdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  id200ApplicationXSuggestionsPlusJsonString?: string;
}
