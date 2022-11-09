import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WellsFilesListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tag" })
  tag: string;
}


export class WellsFilesListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: WellsFilesListPathParams;
}


export class WellsFilesList200ApplicationJsonPrivate extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class WellsFilesList200ApplicationJsonPublic extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class WellsFilesList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=private", elemType: operations.WellsFilesList200ApplicationJsonPrivate })
  private?: WellsFilesList200ApplicationJsonPrivate[];

  @Metadata({ data: "json, name=public", elemType: operations.WellsFilesList200ApplicationJsonPublic })
  public?: WellsFilesList200ApplicationJsonPublic[];
}


export class WellsFilesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  wellsFilesList200ApplicationJsonObject?: WellsFilesList200ApplicationJson;
}
