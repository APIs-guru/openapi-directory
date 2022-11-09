import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RetrieveAUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class RetrieveAUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveAUserPathParams;
}


export class RetrieveAUser200ApplicationJsonPerson extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;
}


export class RetrieveAUser200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=avatar_url" })
  avatarUrl?: any;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=object" })
  object?: string;

  @Metadata({ data: "json, name=person" })
  person?: RetrieveAUser200ApplicationJsonPerson;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveAUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  retrieveAUser200ApplicationJsonObject?: RetrieveAUser200ApplicationJson;
}
