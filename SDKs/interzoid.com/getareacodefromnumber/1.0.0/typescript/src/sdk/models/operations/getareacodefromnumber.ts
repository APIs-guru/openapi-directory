import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetareacodefromnumberQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=number" })
  number: string;
}


export class GetareacodefromnumberRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetareacodefromnumberQueryParams;
}


export class Getareacodefromnumber200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Abbreviation" })
  abbreviation?: string;

  @Metadata({ data: "json, name=AreaCode" })
  areaCode?: string;

  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Credits" })
  credits?: string;

  @Metadata({ data: "json, name=Locale" })
  locale?: string;

  @Metadata({ data: "json, name=PrimaryCity" })
  primaryCity?: string;
}


export class GetareacodefromnumberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getareacodefromnumber200ApplicationJsonObject?: Getareacodefromnumber200ApplicationJson;
}
