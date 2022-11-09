import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetUsers200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class GetUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: operations.GetUsers200ApplicationJson })
  getUsers200ApplicationJsonObjects?: GetUsers200ApplicationJson[];
}
