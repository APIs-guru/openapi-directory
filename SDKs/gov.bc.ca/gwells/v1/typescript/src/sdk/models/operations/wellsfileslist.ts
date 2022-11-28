import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WellsFilesListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tag" })
  tag: string;
}


export class WellsFilesList200ApplicationJsonPrivate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class WellsFilesList200ApplicationJsonPublic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class WellsFilesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=private", elemType: WellsFilesList200ApplicationJsonPrivate })
  private?: WellsFilesList200ApplicationJsonPrivate[];

  @SpeakeasyMetadata({ data: "json, name=public", elemType: WellsFilesList200ApplicationJsonPublic })
  public?: WellsFilesList200ApplicationJsonPublic[];
}


export class WellsFilesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WellsFilesListPathParams;
}


export class WellsFilesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  wellsFilesList200ApplicationJsonObject?: WellsFilesList200ApplicationJson;
}
