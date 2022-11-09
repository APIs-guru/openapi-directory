import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DrillersFilesListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=person_guid" })
  personGuid: string;
}


export class DrillersFilesListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DrillersFilesListPathParams;
}


export class DrillersFilesList200ApplicationJsonPrivate extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class DrillersFilesList200ApplicationJsonPublic extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class DrillersFilesList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=private", elemType: operations.DrillersFilesList200ApplicationJsonPrivate })
  private?: DrillersFilesList200ApplicationJsonPrivate[];

  @Metadata({ data: "json, name=public", elemType: operations.DrillersFilesList200ApplicationJsonPublic })
  public?: DrillersFilesList200ApplicationJsonPublic[];
}


export class DrillersFilesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  drillersFilesList200ApplicationJsonObject?: DrillersFilesList200ApplicationJson;
}
