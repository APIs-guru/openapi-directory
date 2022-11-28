import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLinodeTypes200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.LinodeType })
  data?: shared.LinodeType[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: number;
}


export class GetLinodeTypesDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLinodeTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLinodeTypes200ApplicationJsonObject?: GetLinodeTypes200ApplicationJson;

  @SpeakeasyMetadata()
  getLinodeTypesDefaultApplicationJsonObject?: GetLinodeTypesDefaultApplicationJson;
}
