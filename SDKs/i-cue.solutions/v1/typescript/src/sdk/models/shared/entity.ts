import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Entity extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=dbConnection" })
  dbConnection?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=isActive" })
  isActive?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=token" })
  token?: string;
}
