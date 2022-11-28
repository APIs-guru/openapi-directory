import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetareacodefromnumberQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" })
  number: string;
}


export class Getareacodefromnumber200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Abbreviation" })
  abbreviation?: string;

  @SpeakeasyMetadata({ data: "json, name=AreaCode" })
  areaCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Credits" })
  credits?: string;

  @SpeakeasyMetadata({ data: "json, name=Locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=PrimaryCity" })
  primaryCity?: string;
}


export class GetareacodefromnumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetareacodefromnumberQueryParams;
}


export class GetareacodefromnumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getareacodefromnumber200ApplicationJsonObject?: Getareacodefromnumber200ApplicationJson;
}
