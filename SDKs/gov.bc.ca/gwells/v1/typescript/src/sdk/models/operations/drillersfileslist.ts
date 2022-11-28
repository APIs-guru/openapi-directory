import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DrillersFilesListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=person_guid" })
  personGuid: string;
}


export class DrillersFilesList200ApplicationJsonPrivate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class DrillersFilesList200ApplicationJsonPublic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class DrillersFilesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=private", elemType: DrillersFilesList200ApplicationJsonPrivate })
  private?: DrillersFilesList200ApplicationJsonPrivate[];

  @SpeakeasyMetadata({ data: "json, name=public", elemType: DrillersFilesList200ApplicationJsonPublic })
  public?: DrillersFilesList200ApplicationJsonPublic[];
}


export class DrillersFilesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DrillersFilesListPathParams;
}


export class DrillersFilesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  drillersFilesList200ApplicationJsonObject?: DrillersFilesList200ApplicationJson;
}
