import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetstateabbreviationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state: string;
}


export class GetstateabbreviationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetstateabbreviationQueryParams;
}


export class Getstateabbreviation200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Abbreviation" })
  abbreviation?: string;

  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Credits" })
  credits?: string;

  @Metadata({ data: "json, name=State" })
  state?: string;
}


export class GetstateabbreviationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getstateabbreviation200ApplicationJsonObject?: Getstateabbreviation200ApplicationJson;
}
