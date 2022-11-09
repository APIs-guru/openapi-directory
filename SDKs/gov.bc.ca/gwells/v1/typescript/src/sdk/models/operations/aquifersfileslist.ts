import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AquifersFilesListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=aquifer_id" })
  aquiferId: string;
}


export class AquifersFilesListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AquifersFilesListPathParams;
}


export class AquifersFilesList200ApplicationJsonPrivate extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class AquifersFilesList200ApplicationJsonPublic extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class AquifersFilesList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=private", elemType: operations.AquifersFilesList200ApplicationJsonPrivate })
  private?: AquifersFilesList200ApplicationJsonPrivate[];

  @Metadata({ data: "json, name=public", elemType: operations.AquifersFilesList200ApplicationJsonPublic })
  public?: AquifersFilesList200ApplicationJsonPublic[];
}


export class AquifersFilesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  aquifersFilesList200ApplicationJsonObject?: AquifersFilesList200ApplicationJson;
}
