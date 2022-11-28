import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RetrieveAUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class RetrieveAUser200ApplicationJsonPerson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;
}


export class RetrieveAUser200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatar_url" })
  avatarUrl?: any;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;

  @SpeakeasyMetadata({ data: "json, name=person" })
  person?: RetrieveAUser200ApplicationJsonPerson;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveAUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetrieveAUserPathParams;
}


export class RetrieveAUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  retrieveAUser200ApplicationJsonObject?: RetrieveAUser200ApplicationJson;
}
