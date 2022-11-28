import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AquifersFilesListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=aquifer_id" })
  aquiferId: string;
}


export class AquifersFilesList200ApplicationJsonPrivate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class AquifersFilesList200ApplicationJsonPublic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class AquifersFilesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=private", elemType: AquifersFilesList200ApplicationJsonPrivate })
  private?: AquifersFilesList200ApplicationJsonPrivate[];

  @SpeakeasyMetadata({ data: "json, name=public", elemType: AquifersFilesList200ApplicationJsonPublic })
  public?: AquifersFilesList200ApplicationJsonPublic[];
}


export class AquifersFilesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AquifersFilesListPathParams;
}


export class AquifersFilesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  aquifersFilesList200ApplicationJsonObject?: AquifersFilesList200ApplicationJson;
}
