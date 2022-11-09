import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class InitSnapshotUploadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=language" })
  language: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project-id" })
  projectId: number;
}


export class InitSnapshotUploadQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=commit" })
  commit: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: Date;
}


export class InitSnapshotUploadSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class InitSnapshotUploadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: InitSnapshotUploadPathParams;

  @Metadata()
  queryParams: InitSnapshotUploadQueryParams;

  @Metadata()
  security: InitSnapshotUploadSecurity;
}


export class InitSnapshotUploadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  uploadSession?: shared.UploadSession;
}
