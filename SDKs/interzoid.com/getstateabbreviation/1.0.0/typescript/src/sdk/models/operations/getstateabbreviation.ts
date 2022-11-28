import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetstateabbreviationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state: string;
}


export class Getstateabbreviation200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Abbreviation" })
  abbreviation?: string;

  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Credits" })
  credits?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: string;
}


export class GetstateabbreviationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetstateabbreviationQueryParams;
}


export class GetstateabbreviationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getstateabbreviation200ApplicationJsonObject?: Getstateabbreviation200ApplicationJson;
}
